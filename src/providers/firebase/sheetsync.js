import React, { Suspense } from "react";
import { Box } from "rebass";

import {
  SheetsyncElement,
  SheetsyncListElement,
  SheetsyncError,
} from "./index";
import { LineSkeleton, ListSkeleton } from "components/loadingSkeleton";

// ToDo Animate Updates pushed from firebase (too quick for a suspense)

/**
 * Returns a single element according to path, wrapped in a line skeleton.
 * I.e. static/about/title
 * @param path string to slingle item
 */
export function SheetsyncLine(props) {
  const { path, childProps, children } = props;

  const renderContent = () => {
    const data = SheetsyncElement({ path });

    if (children) {
      return children({ data });
    }

    return <LineSkeleton {...childProps}>{data}</LineSkeleton>;
  };

  return (
    <Box {...props}>
      <SheetsyncError
        path={path}
        fallbackError={<LineSkeleton fail>Content Error</LineSkeleton>}
      >
        <Suspense fallback={<LineSkeleton loading> Loading </LineSkeleton>}>
          {renderContent()}
        </Suspense>
      </SheetsyncError>
    </Box>
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
          {({ items }) => {
            if (
              !(items && (Array.isArray(items) || typeof items === "object"))
            ) {
              console.error("SheetsyncList received unsupported data format.");
              return [];
            }

            const itemsArr = Array.isArray(items)
              ? items
              : Object.keys(items).map(item => items[item]);

            return itemsArr.map((item, index) => children({ item, index }));
          }}
        </SheetsyncListElement>
      </Suspense>
    </SheetsyncError>
  );
}
