import React from 'react';
import { Link }  from 'react-router-dom';
import styled from 'styled-components';
import colors from '../Colors';

const Container = styled.div`
  a {
    text-decoration: none;
    color: ${colors.blackCoral};
    font-size: 1.2rem;
    padding: 0.5rem;
    display: block;

    :hover {
      background-color: ${colors.lightGrey};
      color: ${colors.carrotOrange};
    }
  }
`

export default function CustomerListItem({customerData}) {
  return (
    <Container>
      <Link to={`/customers/${customerData.id}`}>
        {customerData.name}
      </Link>
    </Container>
  )
}
