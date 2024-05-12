//          100 days of coding challenge ( DAY 50 )
 // Question 01
 // ---Uses setTimeout to log a message after a 2-second delay
 setTimeout(() => {
  console.log("This message will log out after 2 seconds delay")
 }, 2000);
 // ----This showcases how to use setTimeout to delay actions in my code.
// Question 02
console.log("Start");
setTimeout(() => {
  console.log("Callback executed");
}, 0);
console.log("End");

 // Question 03
 // --Synchronous example
 console.log("before synchronous operation");
 // --Simulate a synchronous blocking operation
 for (let i = 0; i < 1e9; i++) {}
 console.log("After synchronous operation");
 // Asynchronous Example
 console.log("before asychronous example");
 setTimeout(() => {
  console.log("Asychronous operation completed")
 }, 1000);
 console.log("After sychronous setup")
