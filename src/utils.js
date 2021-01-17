export function checkIfValid(data) {
  if (!data.vatNr) {
    return 'Error: VAT Number is empty';
  }
  
  const part1 = data.vatNr.slice(0, 2);
  const part2 = data.vatNr.slice(2);
  if (part1 !== 'SE' || part2.length !== 10 || /^\d+$/.test(part2) !== true) {
    return 'Error: VAT Number has an incorrect format (must be "SE" with 10 digits)';
  }
  
  if (!data.paymentTerm) {
    return 'Error: Payment Term is empty';
  }
  
  if (data.paymentTerm < 1) {
    return 'Error: Payment Term must be a positive integer';
  }
  
  return null;
}
