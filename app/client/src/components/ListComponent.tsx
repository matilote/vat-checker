import React from "react";
import { List } from "semantic-ui-react";

interface VatDataProps {
  result: {
    countryCode: string,
    vatNumber: string,
    valid: string,
    name: string,
    address: string
  }
}

const ListComponent = ({ result }: VatDataProps): JSX.Element => (
  <List>
    <List.Item>
      <List.Header><h3>Country Code:</h3></List.Header>
      {result.countryCode}
    </List.Item>
    <List.Item>
      <List.Header><h3>Vat Number:</h3></List.Header>
      {result.vatNumber}
    </List.Item>
    <List.Item>
      <List.Header><h3>Valid:</h3></List.Header>
      {setColor({result})}
    </List.Item>
    <List.Item>
      <List.Header><h3>Name:</h3></List.Header>
      {result.name}
    </List.Item>
    <List.Item>
      <List.Header><h3>Address:</h3></List.Header>
      {result.address}
    </List.Item>
  </List>
);

const setColor = ({ result }: VatDataProps) => {
  if (result.valid) {
    return <span style={{ color: "green" }}>{result.valid.toString()}</span>;
  } else {
    return <span style={{ color: "red" }}>{result.valid.toString()}</span>;
  }
};

export default ListComponent;
