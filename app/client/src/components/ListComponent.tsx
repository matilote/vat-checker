import React from "react";
import { Divider, Header, Icon, Table, Grid } from "semantic-ui-react";
import { setColor } from '../utils/setColor'

interface VatDataProps {
  result: {
    countryCode: string;
    vatNumber: string;
    valid: string;
    name: string;
    address: string;
  };
}

const ListComponent = ({ result }: VatDataProps): JSX.Element => (
  <React.Fragment>
    <Divider horizontal>
      <Header as="h4">
        <Icon name="search plus" />
        Your current search
      </Header>
    </Divider>
    <Table definition size="large">
      <Table.Body>
        <Table.Row>
          <Table.Cell width={2}>Country Code:</Table.Cell>
          <Table.Cell>{result.countryCode}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Vat Number:</Table.Cell>
          <Table.Cell>{result.vatNumber}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Valid:</Table.Cell>
          <Table.Cell>{setColor(result.valid.toString())}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Name:</Table.Cell>
          <Table.Cell>{result.name}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Address:</Table.Cell>
          <Table.Cell>{result.address}</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </React.Fragment>
);

export default ListComponent;
