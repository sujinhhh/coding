const bob = {
  first: "bob",
  last: "sanders",
  city: "chicago",
  siblings: {
    sister: "jane",
  },
};


// const { first, last, city, siblings:{sister}} = bob

// console.log(sister);

// function name({first}) {
//     console.log(first);
    
// }

// name(bob)


//  ... rest operator .. 오브젝트에 나온 키를 꼭 사용해야함

const {last,...rest} = bob
console.log({last, ...rest});
