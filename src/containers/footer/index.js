import React, { Fragment } from "react";
import styled from "styled-components";

import { Box, Link } from "rebass";

import Footer from "components/footer";
import { SheetsyncLine } from "providers/firebase/sheetsync";

const Container = styled(Box)``;

const FooterContainer = props => {
  return (
    <Container {...props}>
      <Footer
        aside={<SheetsyncLine path={"static/footer/copyright"} />}
        title={
          <Fragment>
            <Link href="https://www.factor10.io/privacy/" target="_blank">
              privacy
            </Link>
            {` // `}
            <Link href="https://www.factor10.io/imprint/" target="_blank">
              imprint
            </Link>
          </Fragment>
        }
        id="footer"
      >
        <SheetsyncLine path={"static/footer/note"} />
        <SheetsyncLine path={"static/event/email"}>
          {({ data }) => {
            return <Link href={`mailto:${data}`}>{data}</Link>;
          }}
        </SheetsyncLine>
      </Footer>
    </Container>
  );
};

export default FooterContainer;
