let fruits = ['Apple', 'Banana']


fruits.pop()
console.log(fruits);


const num = [1, 2, 3, 4, 5, 6, 7, 8];

function multiArr(arr){
    let newArray = Array.from(arr, x=>x*x)
    console.log(newArray);
     
}

multiArr(num)