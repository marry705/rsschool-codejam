const sumOfOther = (arr = [])=>{
    const rez = [];
    let sum = 0;
    arr.forEach((element) => sum = sum+element); 
    arr.forEach((element) => rez.push(sum-element));
return rez;
}