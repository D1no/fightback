import React from "react";
import { Flex } from "rebass";
import styled from "styled-components/macro";

import PersonCard from "components/personCard";

export default ({ attendeesList }) => {
  const subGridCellWidth = "47%";
  const GridContainer = styled(Flex)`
    background: ${props => props.theme.backgroundColor};
  `;

  return (
    <GridContainer flexWrap={["wrap", "nowrap"]} pl={[0, 0, 6]} py={9} mt={-9}>
      <Flex
        width={[12 / 12, 6 / 12]}
        justifyContent="space-between"
        pr={[0, 5]}
        flexWrap="wrap"
        mb={[9, 0]}
      >
        <PersonCard {...attendeesList[0]} width={[subGridCellWidth]} />
        <PersonCard {...attendeesList[1]} width={[subGridCellWidth]} />
        <PersonCard {...attendeesList[2]} width={[12 / 12]} double mt={5} />
      </Flex>
      <Flex
        width={[12 / 12, 6 / 12]}
        justifyContent="space-between"
        pl={[0, 5]}
        flexWrap="wrap"
      >
        <PersonCard {...attendeesList[3]} width={[12 / 12]} double mb={5} />
        <PersonCard {...attendeesList[4]} width={[subGridCellWidth]} />
        <PersonCard {...attendeesList[5]} width={[subGridCellWidth]} />
      </Flex>
    </GridContainer>
  );
};
