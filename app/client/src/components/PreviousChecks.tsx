import React from "react";
import { Divider, Header, Icon, Table, Grid } from "semantic-ui-react";
import { setColor } from "../utils/setColor";

interface PreviousChecksProps {
  getData: any[];
}

const PreviousChecks = ({ getData }: PreviousChecksProps): JSX.Element => (
      <React.Fragment>
        <Divider horizontal>
          <Header as="h4">
            <Icon name="history" />
            Your previous search
          </Header>
        </Divider>
        <Table definition size="large">
          <Table.Body>
            <Table.Row>
              <Table.Cell width={2}>Country Code:</Table.Cell>
              <Table.Cell>{getData[0]}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Vat Number:</Table.Cell>
              <Table.Cell>{getData[1]}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Valid:</Table.Cell>
              <Table.Cell>
                {getData[2] !== undefined
                  ? setColor(getData[2].toString())
                  : ""}
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Name:</Table.Cell>
              <Table.Cell>{getData[3]}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Address:</Table.Cell>
              <Table.Cell>{getData[4]}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </React.Fragment>
);

export default PreviousChecks;
