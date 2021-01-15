import React, {useState, useEffect} from 'react';
import CustomerListItem from '../components/CustomerListItem';
import { useHistory } from 'react-router-dom';
const userFirstName = localStorage.getItem("firstName");
const userLastName = localStorage.getItem("lastName");
const userEmail = localStorage.getItem("email");
   


export default function HomePage() {

  const [customerList, setCustomerList] = useState([]);
  const history = useHistory();
  const userFirstName = localStorage.getItem("firstName");
  const userLastName = localStorage.getItem("lastName");
  const userEmail = localStorage.getItem("email");


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

  function getMe() { 
    const userFirstName = localStorage.getItem("firstName");
    const userLastName = localStorage.getItem("lastName");
    const userEmail = localStorage.getItem("email");
    console.log(userFirstName);
    console.log(userLastName);
    console.log(userEmail);
  }

  function logOut() {
    console.log("blablabla");
    localStorage.removeItem("WEBB20"); 
    localStorage.removeItem("email"); 
    localStorage.removeItem("firstName"); 
    localStorage.removeItem("lastName"); 
    history.push('/'); 
  }

  return (
    <div>
      
        Hi, {userFirstName} {userLastName}!
        <p>First Name: {userFirstName}</p>
        <p>Last Name: {userLastName}</p> 
        <p>Email: {userEmail}</p> 

        <button onClick={getMe}>Get Me</button>

      
      {customerList.map((item, index) => {
        return <CustomerListItem key={item.id} customerData={item} />
      })}
      
      <button onClick={logOut}>Log Out</button>
    </div>
  )
}
