//011 หน้าบ้าน SIT
// Lesson 1: Arrays, Objects, and Functions
 
// 1. Create an empty array to hold the quotes
const quotes = []
 
/*
  2. Function: addQuote
  - Accepts a quote object with id, content, and author
  - Adds it to the quotes array
*/
function addQuote(quote) {
  const val = ["id","content","author"]
  Object.keys(quote).forEach((key)=>{
    if(!val.includes(key)){
      throw new Error("Not a valid object")
    }
  })
  quotes.push(quote)
  // TODO: Add the quote object to the quotes array
}
 
/*
  3. Function: deleteQuote
  - Accepts an id
  - Removes the quote with that id from the array
*/
function deleteQuote(id) {
  const tobeDelete = quotes.findIndex((quote)=> quote.id === id)
  if(!tobeDelete){
    throw new Error("id not found")
  }
  quotes.splice(tobeDelete,1)
 
  // TODO: Remove the quote object from the array using the given id
}
 
/*
  4. Function: updateQuote
  - Accepts an id and an object with new content and/or author
  - Updates the quote with the given id
*/
function updateQuote(id, updatedQuote) {
  // TODO: Find the quote by id and update its properties
  const tobeUpdated = quotes.findIndex((quote)=> quote.id === id)
  if(!tobeUpdated){
    throw new Error("id not found")
  }
  quotes[tobeUpdated] = updatedQuote
}
 
/*
  5. Function: getAllQuotes
  - Returns all quotes in the array
*/
function getAllQuotes() {
  // TODO: Return the quotes array
  return quotes
}
 
// 6. Test your functions below
// TODO: Add 3 quotes using addQuote()
addQuote({id:0,content:"hi",author:"none"})
addQuote({id:1,content:"hello",author:"none"})
addQuote({id:2,content:"hellre",author:"none"})
// TODO: Delete 1 quote using deleteQuote()
deleteQuote(2)
// TODO: Update 1 quote using updateQuote()
updateQuote(1,{id:1,content:"updated",author:"me"})
// TODO: Print all quotes using getAllQuotes()
console.log(getAllQuotes())