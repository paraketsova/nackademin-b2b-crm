
import React from 'react'
import Button from './Button'

export default function ButtonDelete({ deleteCustomer }) {
  return (
    <Button small danger onClick={deleteCustomer}>Delete Customer</Button>
  )
}
