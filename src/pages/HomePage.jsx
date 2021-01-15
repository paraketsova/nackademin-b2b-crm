import React, {useState, useEffect} from 'react';
import CustomerListItem from '../components/CustomerListItem';
import { useHistory, Link } from 'react-router-dom';
import Header from '../components/Header';
import ButtonHome from '../components/ButtonHome';
import ButtonCreate from '../components/ButtonCreate';

   


export default function HomePage() {

  const [customerList, setCustomerList] = useState([]);
  const history = useHistory();


  useEffect(() => {
    getCustomerList()
  }, [])

  function getCustomerList() {
    const url = "https://frebi.willandskill.eu/api/v1/customers/";
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

      <div>
        <Link to="/">
          <ButtonHome />
        </Link>
          
        <Link to="/customers/create">
          <ButtonCreate />
        </Link>
      </div>
      
        
      
      {customerList.map((item, index) => {
        return <CustomerListItem key={item.id} customerData={item} />
      })}

    </div>
  )
}
