import React from 'react';
import styled from 'styled-components'
import CustomerListItem from '../components/CustomerListItem';
import colors from '../Colors';

const Container = styled.div`
  width: 50vw;    
  text-decoration: none;
  align-content: center;
  justify-content: center;

  h1 {
    color: ${colors.earieBlack};
    margin-top: 1rem;
    padding: 0.5rem;
  }
`

export default function CustomerList({ items }) {
  return (
    <Container>
      <h1>Customer List</h1>

      {items.map((item, index) => {
        return <CustomerListItem key={item.id} customerData={item} />
      })}
    </Container>
  )
}
