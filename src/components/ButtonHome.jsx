import React from 'react'
import { Link }  from 'react-router-dom';
import Button from './Button'

export default function ButtonHome() {
  return (
    <Link to="/">
      <Button>← Back to home</Button>
    </Link>
  )
}
