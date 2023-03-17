/*let ad = "Eva Gençarov";
let ogrencino = "9999999";        Bilgileri kendimiz girer isek.
let cinsiyet = true;                           
let ders = "Mesleki ingilizce";
let not1 = 85;
let not2 = 90;*/

let ad = prompt("Adınızı Giriniz : ");
let ogrencino = prompt("Öğrenci Numarası Giriniz: ");
let cinsiyet = prompt("Cinsiyeti Giriniz : ")                 //Bilgileri kullanıcıdan alır isek.
let ders = prompt("Ders Adı Giriniz : ")
let not1 = prompt("İlk Notu Giriniz : ")
let not2 = prompt("İkinci Notu Giriniz : ")


let ortalama = (Number(not1) + Number(not2)) / 2;

console.log(ogrencino + ' No lu ' + ad + "(" + cinsiyet + ")" + ' isimli öğrencinin ' + ders + ' dersinden aldığı ortalama not : ' + ortalama);
