function validateHello(greetings) {
//   res =  //regex here/.test(greetings) 
//   return res
 const data = {
    english: "hello",
    italian: "ciao",
    french: "salut",
    german: "hallo",
    spanish: "hola",
    czechRepublic: "ahoj",
    polish: "czesc",
  };
​
  // Check if greetings contains any of the values
  return Object.values(data).some(value =>
    greetings.toLowerCase().includes(value.toLowerCase())
  );
}
​
// Example usage:
console.log(validateHello("Hello there"));   // true
console.log(validateHello("Bonjour"));       // false
console.log(validateHello("Ciao bella"));    // true
​