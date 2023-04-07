let marka = 'Bmw';
let model = '2022';
let otomatik = 'yes';

/* if / else  statement */


if (otomatik == 'yes') {
    console.log("Araç Otomatiktir.");
}
else {
    console.log("Araç Otomatik Değildir.");
}

otomatik = true;

if (otomatik) {
    console.log(marka + ' ' + model + ' otomatiktir ');
}

if (10 === '10') {
    console.log('sayılar eşit');
}

/*switch statement */

// 1 : manuel
// 2 : otomatik

let vites = '5';

if (vites == '1') {
    console.log("Araç Manueldir");
}
else if (vites == '2') {
    console.log("Araç Otomatiktir");
}
else {
    console.log("Yanlış Bir Dğer Girdiniz");
}