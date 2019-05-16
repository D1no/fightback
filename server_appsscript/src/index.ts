/**
 *
 * Author: Dino Scheidt (dino.scheidt@factor10.io)
 *
 * This App-Script Project is responsible for syncing date from this google sheet to
 * a firebase projects real-time database. Used for the Fightback Community Website.
 *
 * This uses clasp to transpile typescript to app-script. See:
 * https://github.com/google/clasp/blob/master/docs/typescript.md#typescript
 */

/**
=====================================================================================
SETTINGS
=====================================================================================
*/

PropertiesService.getScriptProperties()
  .setProperty(
    "FIREBASE_RT_DATABASE",
    "https://fightbackplatform.firebaseio.com/"
  )
  .setProperty("MENU_TITLE", "🦄 FIGHTBACK 🚀");

const ss = SpreadsheetApp.getActiveSpreadsheet();

/**
=====================================================================================
LIB
=====================================================================================
*/

/**
 * Returns an object from a sheet/collection of two key.value or key#1value colums.
 */
function getCollection(collection: string) {
  let fragment = {};

  let content = ss.getRange(`${collection}!A2:B`).getValues();

  content.forEach(row => {
    let field = row[0].toString();
    let value = row[1].toString();

    // Do not process empty fields or values
    if (field.length < 1) return;
    if (value.length < 1) return;

    // Check if the field has object notation
    // I.e. about.sidecontent: about > sidecontent -> value
    if (field.indexOf(".") >= 0) {
      let path = field.split(".");

      // Check if existing key, create object if new.
      if (!fragment[path[0]]) {
        fragment[path[0]] = {};
      }

      // Add tuple
      fragment[path[0]][path[1]] = value;
    }

    // Check if the field has array notation; if so,
    // I.e. attendance#2title: attendance > [1] > tittle -> value
    if (field.indexOf("#") >= 0) {
      let path = field.split("#");

      // Get index from fieldname and correct to base of 0
      let arrayIndex = parseInt(path[1].charAt(0)) - 1;

      // Remove index number from beginning of second half of path
      path[1] = path[1].substr(1);

      if (!fragment[path[0]]) {
        fragment[path[0]] = [];
      }

      if (!fragment[path[0]][arrayIndex]) {
        fragment[path[0]][arrayIndex] = {};
      }

      // Add tuple to array position
      fragment[path[0]][arrayIndex][path[1]] = value;
    }
  });

  return fragment;
}

/**
 * Returns an object array from a sheet/collection.
 * Column headers are used as keys.
 */
function getArrayCollection(collection: string) {
  let arrayFragment = [];
  let keys = [];

  let content = ss
    .getSheetByName(collection)
    .getDataRange()
    .getValues();

  content[0].forEach(column => {
    keys.push(column);
  });

  for (let i = 1; i < content.length; i++) {
    let row = content[i];
    let tuple = {};

    for (let j = 0; j < keys.length; j++) {
      let key = keys[j];
      key = key.toString();
      let value = row[j];
      value = value.toString();

      if (value != "") {
        tuple[key] = value;
      }
    }

    arrayFragment.push(tuple);
  }

  return arrayFragment;
}

/**
 * Return content from sheet as nested object.
 */
function getPayload() {
  // Construct content object
  let payload = {
    created: new Date(),
    static: getCollection("static"),
    sessions: getArrayCollection("sessions"),
    speakers: getArrayCollection("speakers"),
  };

  return payload;
}

/**
 * This will overwrite the sub collection of the target collection under /sheetsync/
 */
function updateFirebaseCollection() {
  var FIREBASE_RT_DATABASE = PropertiesService.getScriptProperties().getProperty(
    "FIREBASE_RT_DATABASE"
  );

  var response = UrlFetchApp.fetch(FIREBASE_RT_DATABASE + "/sheetsync.json", {
    method: "put",
    headers: {
      "Content-type": "application/json",
      Authorization: "Bearer " + ScriptApp.getOAuthToken(),
    },
    payload: JSON.stringify(getPayload()),
  });

  console.log("Execute Firebase Put Request", response.getContentText());
}

/**
=====================================================================================
TRIGGERS
=====================================================================================
*/

/**
 * The sheet was opened, time to set up menu.
 */
function onOpenSheet(e?: any) {
  setupMenu();
}

/**
 * The sheet was edited. Main to register auto-update functions.
 */

// Trigger not hooked up. Go here: https://script.google.com/home/projects/1dBfbFhtJkAwzq3Ko63GB9AYmARF7U2JrPZyeUIOeop3fm5Xz2vaZ9RdM/triggers
// function onEditSheet(e) {
//
// }

/**
 * The sheet was edited. Main to register functions.
 */
function runAll(e?: any) {
  console.info("Dry run executed.");
  onOpenSheet();
}

/**
=====================================================================================
MENU REGISTERS
=====================================================================================
*/

/**
 * Set-up menu and for flags regarding updates.
 */
function setupMenu() {
  var MENU_TITLE = PropertiesService.getScriptProperties().getProperty(
    "MENU_TITLE"
  );

  SpreadsheetApp.getUi()
    .createMenu(MENU_TITLE)
    .addItem("Push Content to Website", "updateFirebaseCollection")
    .addToUi();
}
