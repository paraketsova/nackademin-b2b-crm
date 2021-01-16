import React from 'react'
import { Link }  from 'react-router-dom';
import Button from './Button'

export default function ButtonEdit({ id }) {
  return (
    <Link to={`/customers/${id}/edit`}>
      <Button small>Edit Customer</Button>
    </Link>
  )
}