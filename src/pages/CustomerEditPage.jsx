import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import ButtonHome from '../components/ButtonHome';
import Button from '../components/Button';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  padding-bottom: 3rem;

  table {
    width: 40rem;
    margin-bottom: 1.5rem;
    border-spacing: 0;

    th, td {
      text-align: left;
      padding: 0.3rem 0;
    }
  }
`

export default function CustomerEditPage(props) {
  const customerId = props.match.params.id;
  const [formData, setFormData] = useState({});
  const history = useHistory();

  function getCustomerItem() {
    const url = `https://frebi.willandskill.eu/api/v1/customers/${customerId}/`;
    const token = localStorage.getItem("WEBB20");
    fetch(url, {
      headers:{
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    })
    .then(res => res.json())
    .then(data => setFormData(data))
  }

  useEffect( () => {
    getCustomerItem()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function handleOnChange(e) {
    const name = e.target.name
    const value = e.target.value
    const newObj = {...formData, [name]: value}
    setFormData(newObj)
  }

  function renderInput(name, label, type) {
    return (
      <tr>
        <th>{label}</th>
        <td>
          <input 
            type={type || "text"} 
            name={name}
            value={formData[name] || ""}
            size={50}
            onChange={handleOnChange}
          />
        </td>
      </tr>
    )
  }

  function handleOnSubmit(e) {
    e.preventDefault()
    const url = `https://frebi.willandskill.eu/api/v1/customers/${customerId}/`
    const token = localStorage.getItem("WEBB20")
    fetch(url, {
      method: "PUT",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    })
    .then(res => res.json())
    .then(() => history.push(`/customers/${customerId}`))
  }

  return (
    <div>
      <Header />

      <Container>
        <Sidebar>
          <ButtonHome />
        </Sidebar>

        <div>
          <h1>Edit Customer</h1>

          <form onSubmit={handleOnSubmit}>
            <table>
              <tbody>
                {renderInput("name", "Customer Name")}
                {renderInput("organisationNr", "Organisation Number")}
                {renderInput("vatNr", "Vat Number")}
                {renderInput("reference", "Reference")}
                {renderInput("paymentTerm", "Payment Term", "number")}
                {renderInput("website", "Website", "url")}
                {renderInput("email", "Customer Email", "email")}
                {renderInput("phoneNumber", "Phone Number", "tel")}
              </tbody>
            </table>
            
            <Button small type="submit">Update Customer</Button>

            <Link to={`/customers/${customerId}`}>Cancel</Link>
          </form>
        </div>
      </Container>
    </div>
  )
}
