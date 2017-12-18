const add2Numbers = (a,b) => {
  console.warn(`add2Numbers()
 will deprecated, please use addNumbers() instead`);

  return addNumbers(a, b);
}

const addNumbers = (...numbers) => {
  return numbers.reduce((a, b) => a + b);
}
