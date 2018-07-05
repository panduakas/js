let even = [];
let odd = [];
let nm5 = [];
let prime = [];

for (i=0; i<=100; i++){
    if (i%2 === 0) {
        even.push(i);
    } else {
        odd.push(i);
    }
}

for (i=0; i<=100; i++){
    if (i%5 === 0) {
        nm5.push(i);
    }
}

for (i=0; i<=100; i++){
    if (i%2 === 0){
        break;
    } else if (i%3 === 0){
        break;
    } else if (i%4 === 0){
        break;
    } else if (i%5 === 0){
        break;
    } else if (i%6 === 0){
        break;
    } else if (i%7 === 0){
        break;
    } else if (i%8 === 0){
        break;
    } else if (i%9 === 0){
        break;
    } else if (i%10 === 0){
        break;
    } else if (i%11 === 0){
        break;
    } else if (i%12 === 0){
        break;
    } else {
        return prime.push(i);
    }
}

console.log(nm5);