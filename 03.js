const data = `NAME, CATEGORY, PRICE
Xiaomi Redmi 5A, Smartphone, 1199000
Macbook Air, Laptop, 13775000
Samsung Galaxy J7, Smartphone, 3549000
DELL XPS 13, Laptop, 26799000
Xiaomi Mi 6, Smartphone, 5399000
LG V30 Plus, Smartphone, 10499000`


function csvData(str) {
    let firstArray = [];
    let objName = [];
    let objArray = [];

    firstArray = str.split("\n");
    
    objName = firstArray[0].split(",");
    let deleteElement = firstArray.shift();

    firstArray.forEach((x) => {
        let temp = x.split(",");
        let obj = {};
        
        temp.forEach((y,z) => {
            obj[objName[z].trim()] = y.trim();
        });
        objArray.push(obj);
    });
    objArray.sort((x, y) => {
        if (parseInt(x.PRICE) < parseInt(y.PRICE)) return -1
        if (parseInt(x.PRICE) > parseInt(y.PRICE)) return 1
        return 0;
    });
    objArray.forEach((x) => {
        x.PRICE = ("Rp" + parseInt(x.PRICE).toString().replace(/\d(?=(\d{3})+$)/g, '$&.'));
    });
    return JSON.stringify(objArray);
}

console.log(csvData(data));
