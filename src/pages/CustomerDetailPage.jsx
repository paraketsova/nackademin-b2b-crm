import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import Header from '../components/Header';

export default function CustomerDetailPage(props) {
  const customerId = props.match.params.id;
  const [customerItem, setCustomerItem] = useState(null);
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
    .then(data => setCustomerItem(data))
  }

  function deleteCustomer() {
    const url = `https://frebi.willandskill.eu/api/v1/customers/${customerId}/`;
    const token = localStorage.getItem("WEBB20");
    fetch(url, {
      method: "DELETE",
      headers:{
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    })
    .then(() => history.push('/'))
  }

  useEffect( () => {
    getCustomerItem()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    
    <div>
      <Header />
      {console.log(customerItem)}
      {customerItem
      ? (
          <div>
            <h2>{customerItem.name}</h2>
            <table>
              <tbody>
                <tr>
                  <td>Organisatioin Number</td>
                  <td>{customerItem.organisationNr}</td>
                </tr>
                <tr>
                  <td>VAT Number</td>
                  <td>{customerItem.vatNr}</td>
                </tr>
                <tr>
                  <td>Reference</td>
                  <td>{customerItem.reference}</td>
                </tr>
                <tr>
                  <td>Payments Term</td>
                  <td>{customerItem.paymentsTerm}</td>
                </tr>
                <tr>
                  <td>Website</td>
                  <td>
                    <a href={customerItem.website} target="_blank" rel="noreferrer">
                      {customerItem.website}
                    </a> 
                  </td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>
                    <a href={`mailto:${customerItem.email}`}>
                    {customerItem.email}
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Phone Number</td>
                  <td>{customerItem.phoneNumber}</td>
                </tr>
              </tbody>
            </table>
            <button onClick={deleteCustomer}>Delete Customer</button>
            <Link to={`/customers/${customerId}/edit`}>Edit Customer</Link>

          </div>
          
      )
      :
      (
        <span>Laddar data...</span>
      )
      }
    </div>
  )
}
