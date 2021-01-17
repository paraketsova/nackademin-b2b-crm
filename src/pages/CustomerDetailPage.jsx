import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import CustomerDetails from '../components/CustomerDetails';
import ButtonHome from '../components/ButtonHome';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  padding-bottom: 3rem;
`

export default function CustomerDetailPage(props) {
  const customerId = props.match.params.id;
  const [customerItem, setCustomerItem] = useState(null);
  const history = useHistory();

  function getCustomerItem() {
    const url = `https://frebi.willandskill.eu/api/v1/customers/${customerId}/`;
    const token = localStorage.getItem("token");
    fetch(url, {
      headers:{
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    })
    .then(res => res.json())
    .then(data => setCustomerItem(data))
  }

  function deleteCustomer() {
    // eslint-disable-next-line no-restricted-globals
    if (confirm('Are you sure you want to delete this customer?')) {
      const url = `https://frebi.willandskill.eu/api/v1/customers/${customerId}/`;
      const token = localStorage.getItem("token");
      fetch(url, {
        method: "DELETE",
        headers:{
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      })
      .then(() => history.push('/'));
    }
  }

  useEffect( () => {
    getCustomerItem()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <Header />

      <Container>
        <Sidebar>
          <ButtonHome />
        </Sidebar>

        <CustomerDetails data={customerItem} deleteCustomer={deleteCustomer}/>
      </Container>
    </div>
  )
}
