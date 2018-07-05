// const data = ["aku","ingin","dapat"];
const dataU = `Aku ingin begini
Aku ingin begitu
Ingin ini itu banyak sekali

Semua semua semua
Dapat dikabulkan
Dapat dikabulkan
Dengan kantong ajaib

Aku ingin terbang bebas
Di angkasa
Hei… baling baling bambu

La... la... la...
Aku sayang sekali
Doraemon

La... la... la...
Aku sayang sekali
`;
let arrayCount = [];
//function WordCount(str) {
//    str =  yourString.match(/\bare\b/g); 
//    str = str? str.length : 0; 
//console.log(count);
//}
arrayCount = dataU.toLowerCase().split(/[\W]/g);
function countword(str) {
    count = 0;
    arrayCount.forEach((arrayCountIndex) => {
        if (arrayCountIndex === str) {
            count++;
        }
    });
//    for (let arrayCountIndex = 0; arrayCountIndex < arrayCount.length; arrayCountIndex++) {
//        if (arrayCount === str) {
//            count++
//        }
//    }
    return count;
}
//for (let dataUIndex = 0; dataUIndex < dataU.length; dataUIndex++) {
//    for (let dataIndex = 0; dataIndex < data.length; dataIndex++) {
//       if (data[dataIndex] === dataU[dataUIndex]) {
//            console.log();
//        }
//    }
//}
console.log(countword('aku'));
console.log(countword('ingin'));
console.log(countword('begini'));
// console.log(arrayCount);
