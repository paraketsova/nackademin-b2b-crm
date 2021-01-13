import React, {useState} from 'react'

export default function CustomerCreatePage() {
  const [formData, setFormData] = useState({})

  function handleOnChange(e) {
    const name = e.target.name
    const value = e.target.value
    const newObj = {...formData, [name]: value}
    setFormData(newObj)
  }

  function renderInput(name, label, type) {
    return (
      <div>
      <label>{label}</label>
      <input 
        type={type || "text"} 
        name={name}
        onChange={handleOnChange}
      />
      </div>
    )
  }

  return (
    <div>
      <h2>Create Customer</h2>
      <form>
        {renderInput("name", "Customer Name")}{renderInput("email", "Customer Email", "email")}
        {renderInput("organisationNr", "Organisation Number")}
        {renderInput("vatNr", "Vat Number")}
        {renderInput("reference", "Reference")}
        {renderInput("paymentTerm", "Payment Term", "number")}
        {renderInput("website", "Website", "url")}
        {renderInput("email", "Customer Email", "email")}
        {renderInput("phoneNumber", "Phone Number", "tel")}
      </form>
    </div>
  )
}
