import React from 'react';
import styled from 'styled-components';
import ButtonEdit from './ButtonEdit';
import ButtonDelete from './ButtonDelete';

const Container = styled.div`
  table {
    width: 30rem;
    margin-bottom: 1.5rem;
    border-spacing: 0;

    th, td {
      text-align: left;
      padding: 0.3rem 0;
    }
  }
`

export default function CustomerDetails({ data, deleteCustomer }) {
 return (data ? (
    <Container>
      <h1>{data.name}</h1>
      
      <table>
        <tbody>
          <tr>
            <th>Organisatioin Number</th>
            <td>{data.organisationNr}</td>
          </tr>
          <tr>
            <th>VAT Number</th>
            <td>{data.vatNr}</td>
          </tr>
          <tr>
            <th>Reference</th>
            <td>{data.reference}</td>
          </tr>
          <tr>
            <th>Payment Term</th>
            <td>{data.paymentTerm}</td>
          </tr>
          <tr>
            <th>Website</th>
            <td>
              <a href={data.website} target="_blank" rel="noreferrer">
                {data.website}
              </a> 
            </td>
          </tr>
          <tr>
            <th>Email</th>
            <td>
              <a href={`mailto:${data.email}`}>
              {data.email}
              </a>
            </td>
          </tr>
          <tr>
            <th>Phone Number</th>
            <td>{data.phoneNumber}</td>
          </tr>
        </tbody>
      </table>

      <ButtonEdit id={data.id}>Edit Customer</ButtonEdit>
      
      <ButtonDelete deleteCustomer={deleteCustomer} />
    </Container>
  ) : (
    <p>Laddar data...</p>
  ))
}
