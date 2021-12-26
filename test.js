const sumAll = (num)=>{
  num.sort()
  let sum = 0
  for(let i=num[0]; i<=num[1]; i++){
    sum += i
  }
 console.log(sum);
}
sumAll([1,4])

// first num + 1 

// Pre + 1 < b