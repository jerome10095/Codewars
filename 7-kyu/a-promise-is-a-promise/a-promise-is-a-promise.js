function promiseHelloWorld() {
  return new Promise((resolve, reject) => {
 if(true) {
    resolve("Hello World!")
  } else {
    reject("error")
  }
  })
​
promise.then(result => {
  console.log(result)
})
.catch(error => {
  console.error("error")
})
}