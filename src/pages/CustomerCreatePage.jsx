import React from 'react'

export default function CustomerCreatePage() {

  function renderInput(name, label, type) {
    return (
      <div>
      <label>{label}</label>
      <input type={type || "text"} name={name} />
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
