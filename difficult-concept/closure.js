

function counter(number) {
    let solution = 0;
    const add=(num)=>{
        if(!num) return
        solution++
        console.log(`I add numbers ${solution}`);
        add(num-1)
    }
    add(number)
    return solution
}

counter(5)


// 위에랑 똑깥은 거 ======================>

function counter2 (number) {
    return add(number,0)
}

function add(num, solution){
    if(!num)return;
    solution ++
    console.log(`I add ${solution}`);
    add(num-1, solution)
}
counter2(5)