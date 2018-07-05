function leapyear(year) {
    x = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
    // console.log(x);
    if (x === true) {
        console.log('Leap Year!');
    } else {
        console.log('not');
    }
}
leapyear(2004);