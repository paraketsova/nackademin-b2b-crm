import React from 'react';
import { Link }  from 'react-router-dom';
import styled from 'styled-components';
import ButtonEdit from './ButtonEdit';
import ButtonDelete from './ButtonDelete';

const Container = styled.div`
  form, div {
    display: flex;
    flex-direction: column;
    width: 30rem;
    align-content: space-around;
    justify-content: space-around;

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 2.0rem;

      input {
        width: 15rem;
        height: 1.5rem;
      }
    }
  }
`

export default function CustomerDetails({ data, deleteCustomer }) {
  return (data ? (
    <div>
      <h2>{data.name}</h2>
      <table>
        <tbody>
          <tr>
            <td>Organisatioin Number</td>
            <td>{data.organisationNr}</td>
          </tr>
          <tr>
            <td>VAT Number</td>
            <td>{data.vatNr}</td>
          </tr>
          <tr>
            <td>Reference</td>
            <td>{data.reference}</td>
          </tr>
          <tr>
            <td>Payments Term</td>
            <td>{data.paymentsTerm}</td>
          </tr>
          <tr>
            <td>Website</td>
            <td>
              <a href={data.website} target="_blank" rel="noreferrer">
                {data.website}
              </a> 
            </td>
          </tr>
          <tr>
            <td>Email</td>
            <td>
              <a href={`mailto:${data.email}`}>
              {data.email}
              </a>
            </td>
          </tr>
          <tr>
            <td>Phone Number</td>
            <td>{data.phoneNumber}</td>
          </tr>
        </tbody>
      </table>
      <ButtonEdit id={data.id}>Edit Customer</ButtonEdit>
      <ButtonDelete deleteCustomer={deleteCustomer} />

    </div>
  ) : (
    <span>Laddar data...</span>
  ))
}
