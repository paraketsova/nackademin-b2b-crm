import React, {useState, useEffect} from 'react';
import CustomerListItem from '../components/CustomerListItem';
import { useHistory, Link } from 'react-router-dom';
import Header from '../components/Header';
import ButtonCreate from '../components/ButtonCreate';
import ListContainerStyled from '../components/ListContainerStyled';


   


export default function HomePage() {

  const [customerList, setCustomerList] = useState([]);
  const history = useHistory();


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
      <ListContainerStyled>
        <section>
          <Link to="/customers/create">
            <ButtonCreate />
          </Link>
        </section>

        <div>
          <h1>Customer List</h1>
          {customerList.map((item, index) => {
            return <CustomerListItem key={item.id} customerData={item} />
          })}
        </div>
      </ListContainerStyled>

    </div>
  )
}
