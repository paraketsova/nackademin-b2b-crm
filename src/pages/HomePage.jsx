import React, {useState, useEffect} from 'react';
import CustomerListItem from '../components/CustomerListItem';
import { useHistory } from 'react-router-dom';


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

  function logOut() {
    console.log("blablabla");
    localStorage.removeItem("WEBB20"); 
    history.push('/'); 
  }

  return (
    <div>
      {customerList.map((item, index) => {
        return <CustomerListItem key={item.id} customerData={item} />
      })}
      
      <button onClick={logOut}>Log Out</button>
    </div>
  )
}
