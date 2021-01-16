import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom';

export default function ButtonCreate() {
  return (
    <Link to="/customers/create">
      <Button>Create Customer</Button>
    </Link>
  )
}
