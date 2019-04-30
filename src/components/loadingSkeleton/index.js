import styled, { css } from "styled-components/macro";

// Used for sheetsync
const DynamicData = styled.p`
  // No special styling of all dynamic data.
  // Good place for highlighting dynamic content.
`;

// Loading / fail indication on a line bases
export const LineSkeleton = styled(DynamicData)`
  ${props =>
    // Loading Style
    props.loading &&
    css`
      background-color: ${props => props.theme.colors.loading};
    `}

  ${props =>
    // Fail Style
    props.fail &&
    css`
      font-style: italic;
      background-color: ${props => props.theme.colors.loadingFail};
    `}
`;

export const ListSkeleton = LineSkeleton;
