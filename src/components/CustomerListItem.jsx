import React from 'react';
import { Link }  from 'react-router-dom';

export default function CustomerListItem({customerData}) {
  return (
    <Link to={`/customers/${customerData.id}`}>
      {customerData.name}
    </Link>
  )
}
