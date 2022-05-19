const symOfTwo = (arr1,arr2) => {
  
  const output = []
  
  for(const el of arr1) {
    el
    if(!output.includes(el) && !arr2.includes(el)){
     output.push(el)
    }
  for(const el of arr2) {
    el
    if(!output.includes(el) && !arr1.includes(el)){
     output.push(el)
    }
  }
  console.log(output);
}

function sym(args) {
 const arrofArray = [...arguments]
 console.log(arrofArray);
 for(let i=1; i<arrofArray.length; i++){
  console.log(arguments[i+1]);
   symOfTwo(arguments[i-1],arguments[i])
 }
}
sym([1,1,2,5],[2,2,3,5],[3,4,5,5])

// compare arg[0] arg[1] 
// if there's nothing common store in result array.
// compare arg[3] result array 
// store numbers not occur both