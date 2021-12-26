// 1. your are providd with the implementation of a simple counter object

// const counter = (function counter() {
//   let value = 0;
//   return {
//     getValue: function () {
//       return value;
//     },
//     changeBy: function () {
//       value += k;
//     },
//   };
// })();

function getFixedCouter(k) {
  let counter = 0;
  return {
    increment: function () {
      counter = counter + k;
    },
    decrement: function () {
      counter = counter - k;
    },
    getValue: function () {
      return counter;
    },
  };
}

console.log(getFixedCouter(10));

/*Each message object has two properties;
property level having an inteager value
property text a string value

For example:
msg = { level: 2, text: 'foo'}

There is an implementation of a simple logger function provided that:
takes a message object as an argument.
writes the text of the message to define output.

Implement a fuction joinedLogger that:
1.takes two argument: integer level and string sepertor.
2.return a new fuction f, such that f takes a variable number of message object

The function f uses the logger to write joined text values of messages that have 
a level value grear than or equal to the level parameter.

The text values must be joined by the seperator string paramer, in the order they 
are passed to fuction.

for example, let's say there are 3 defined messages:

msg1 = { level: 10, text : 'foo'}

sample input
stdin :  10 - 
fuction leve =10, seperator = ' - '


*/

function joinedLogger(level, sep) {
  // write your code here
}

function main() {
  const firstLine = readLine().trim().split(" ");
  const level = parseInt(firstLine[0]);
  const sep = firstLine[1];
  const myLog = joinedLogger(level, sep);

  const n = parseInt(readLine().trim());
  let messages = [];
  for (let i = 0; i < n; ++i) {
    const line = readLine().trim().split(" ");
    const level = parseInt(line[0]);
    const text = line[1];
    messages.push({ level, text });
  }
  myLog(...messages);
  ws.end();
}

/* take task is to create class NoteStore. the class will manage a collection
   of notes, with each note having a state and name. Valid states for notes are
   'completed,','active' and 'otheres' All otheer states are invalid.

   The class must have following methods:

   1. addNote(state, name): adds a note with the given name and state to the 
   collection. In addition to that:
   = if the passed name is empty, then it throws an Error with the message
   'Name cannot be empty'
   = if the passed name is non-empty but the given state is not a valid state
   for a note, then it throws an Error with the message 'Invalid state'
  

   2.getNotes(state):returns an array of names of notes with the given state 
   added so far. The names are returned in the order the corresponding note were
   added. In addition to that:
   =if the given state is not a valid note state, then it throws an Error with 
   the message 'Invalid State{state}'
   =if no note is found in this state, it returns an empty array. 


   Note: The state names are case-sensitive.

   your implementation of the function will be tessted by stubbed code on severl
   input files. Each input file contains par

   6
   addNote active DrinkTea

   sample output
   DrinkTea, DrinkCoffee
   Study
   Error: Invalid state foo
    


  */
