import React, { useState, useEffect } from 'react'

export default function CustomerDetailPage(props) {
  const customerId = props.match.params.id;
  const [customerIten, setCustomerItem] = useState();

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
    .then(data => setCustomerItem(data.results))
  }

  useEffect( () => {
    getCustomerItem()
  }, [])

  return (
    <div>
      <h2>Customer Detail Page</h2>
    </div>
  )
}
