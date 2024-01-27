/**
 * ====> Event Loop OverView
 * The event loop is a crucial concept in JavaScript that allows the language to be asynchronous
 * and non-blocking. It's responsible for handling events, such as user input, HTTP requests, and
 * timers, in an efficient manner. The event loop constantly checks the message queue for new
 * events and executes them one at a time.
 * 
 *      Below is a simplified overview of the event loop:
 * 1) Call Stack: It's a data structure that keeps track of the function calls in the program.
 *    When a function is called, it's added to the top of the stack. When a function completes,
 *    it's removed from the stack.
 * 
 * 2) Callback Queue: It stores the callbacks and messages to be processed. When an asynchronous
 *    operation is completed, its callback is added to the queue.
 * 
 * 3) Event Loop: This continuously checks the call stack and callback queue. If the call stack
 *    is empty, it takes the first callback from the queue and pushes it onto the stack.
 * 
 * 4) Web APIs: These are APIs provided by the browser (or Node.js, in the case of server-side 
 *    JavaScript) that handle asynchronous operations like timers, HTTP requests, and DOM events.
 */
// Let's give a simple example:

console.log('Start');

setTimeout(() => {
    console.log('Inside setTimeout callback');
}, 2000);

console.log('End');

//     Execution Steps:
// console.log('Start') is added to the call stack and executed.
// setTimeout is encountered.It's passed to the Web API for a timer to be set.
// console.log('End') is added to the call stack and executed.
//     After 2 seconds, the timer in the Web API completes, and the callback is pushed to the callback queue.
// The event loop checks the call stack. Since it's empty, it takes the callback from the queue and pushes it onto the stack.
// console.log('Inside setTimeout callback') is added to the call stack and executed.