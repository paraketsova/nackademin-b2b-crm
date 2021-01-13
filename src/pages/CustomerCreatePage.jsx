import React from 'react'

export default function CustomerCreatePage() {

  function renderInput(name, label) {
    return (
      <>
      <label>{label}</label>
      <input name={name} />
      </>
    )
  }

  return (
    <div>
      <h2>Create Customer</h2>
      <form>
        {renderInput("name", "Customer Name")}
      </form>
    </div>
  )
}
