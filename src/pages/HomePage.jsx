import React, {useState, useEffect} from 'react';
import CustomerListItem from '../components/CustomerListItem';
import { useHistory } from 'react-router-dom';
import UserDataDetail from '../components/UserDataDetail';
   


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
    localStorage.removeItem("WEBB20"); 
    localStorage.removeItem("email"); 
    localStorage.removeItem("firstName"); 
    localStorage.removeItem("lastName"); 
    history.push('/'); 
  }

  return (
    <div>
        <UserDataDetail />
      
      {customerList.map((item, index) => {
        return <CustomerListItem key={item.id} customerData={item} />
      })}
      
      <button onClick={logOut}>Log Out</button>
    </div>
  )
}
