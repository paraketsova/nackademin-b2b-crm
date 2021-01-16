import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import CustomerList from '../components/CustomerList';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import ButtonCreate from '../components/ButtonCreate';

const Container = styled.div`
  display: flex;
  padding-bottom: 3rem;
`

export default function HomePage() {
  const [customerList, setCustomerList] = useState([]);

  useEffect(() => {
    getCustomerList()
  }, [])

  function getCustomerList() {
    const url = "https://frebi.willandskill.eu/api/v1/customers";
    const token = localStorage.getItem("WEBB20");
    fetch(url, {
      headers:{
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    })
    .then(res => res.json())
    .then(data => setCustomerList(data.results))
  }

  return (
    <div>
      <Header />

      <Container>      
        <Sidebar>
          <ButtonCreate />
        </Sidebar>

        <CustomerList items={customerList} />
      </Container>
    </div>
  )
}
