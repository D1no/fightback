import React, { Suspense } from "react";

import {
  SheetsyncElement,
  SheetsyncListElement,
  SheetsyncError,
} from "./index";
import { LineSkeleton, ListSkeleton } from "components/skeleton";

// ToDo Animate Updates pushed from firebase (too quick for a suspense)

/**
 * Returns a single element according to path, wrapped in a line skeleton.
 * I.e. static/about/title
 * @param path string to slingle item
 */
export function SheetsyncLine({ path }) {
  return (
    <SheetsyncError
      path={path}
      fallbackError={<LineSkeleton fail>Content Error</LineSkeleton>}
    >
      <Suspense fallback={<LineSkeleton loading> Loading </LineSkeleton>}>
        <LineSkeleton>
          <SheetsyncElement path={path} />
        </LineSkeleton>
      </Suspense>
    </SheetsyncError>
  );
}

export function SheetsyncList({ path, children }) {
  return (
    <SheetsyncError
      path={path}
      fallbackError={<ListSkeleton fail>Content Error</ListSkeleton>}
    >
      <Suspense fallback={<ListSkeleton loading> Loading </ListSkeleton>}>
        <SheetsyncListElement path={path}>
          {({ items }) => items.map((item, index) => children({ item, index }))}
        </SheetsyncListElement>
      </Suspense>
    </SheetsyncError>
  );
}
