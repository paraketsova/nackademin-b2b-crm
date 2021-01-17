import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import ButtonHome from '../components/ButtonHome';
import Button from '../components/Button';
import styled from 'styled-components';
import { checkIfValid } from '../utils';

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

export default function CustomerCreatePage() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState();
  const history = useHistory();

  function handleOnChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    const newObj = { ...formData, [name]: value };
    setFormData(newObj);
    setError(null);
  }

  function renderInput(name, label, type) {
    return (
      <tr>
        <th>{label}</th>
        <td>
          <input 
            type={type || "text"} 
            name={name}
            size={50}
            onChange={handleOnChange}
          />
        </td>
      </tr>
    )
  }

  function handleOnSubmit(e) {
    e.preventDefault()

    const error = checkIfValid(formData);
    if (error) {
      setError(error);
      return;
    }

    const url = "https://frebi.willandskill.eu/api/v1/customers/";
    const token = localStorage.getItem("WEBB20");

    fetch(url, {
      method: "POST",
      body: JSON.stringify(formData),
      headers:{
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    })
    .then(res => { 
      if (!res.ok) {
        res.json().then(data => setError('Server error: ' + data.detail));
      } else {
        res.json().then(data => history.push(`/`));
      }
    });
  }

  return (
    <div>
      <Header />

      <Container>
        <Sidebar>
          <ButtonHome />
        </Sidebar>

        <div>
          <h1>Create Customer</h1>

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

            {error && (
              <div style={{ color: 'red', padding: '1rem', backgroundColor: '#fee', marginBottom: '1rem' }}>{error}</div>
            )}
            
            <Button small type="submit">Create Customer</Button>
          </form>
        </div>
      </Container>

      {/* <code>{JSON.stringify(formData)}</code> */}
    </div>
  )
}
