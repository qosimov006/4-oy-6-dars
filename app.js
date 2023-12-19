//1-Misol
//Savol : 3 ta sondan kattasini funksiya yozing.
//Javob

/*

function uchtaSoNdanTeskari(dizi) {
 
    if (dizi.length <= 3) {
        return dizi;
    }

    
    var uchtaSoNdanTeskari = dizi.slice(-3);

    return uchtaSoNdanTeskari;
}

var sonlar = [10, 20, 30, 40, 50, 60, 70, 80, 90];
var natija = uchtaSoNdanTeskari(sonlar);

console.log(natija); 
*/






//2-misol
//Savol : Raqamlar bilan berilgan ixtioriy 2 xonali sonni so'zlari bilan ifodalab beruvchi funksiya yozing. (switch...case)
//Javob

/*
function ifodalabBeruvchi(son) {
    if (son < 10 || son > 99) {
        return "Ixtiyoriy 2 xonali son kiritilishi kerak.";
    }

    var birliklar = son % 10;
    var onliklar = Math.floor(son / 10);

    var birlikSozleri, onlikSozleri;

    switch (birliklar) {
        case 1:
            birlikSozleri = "bir";
            break;
        case 2:
            birlikSozleri = "ikki";
            break;
        case 3:
            birlikSozleri = "uch";
            break;
        default:
            birlikSozleri = "";
    }

    switch (onliklar) {
        case 1:
            onlikSozleri = "o'n";
            break;
        case 2:
            onlikSozleri = "yigirma";
            break;
        default:
            onlikSozleri = "";
    }

    if (birlikSozleri !== "") {
        return onlikSozleri + " " + birlikSozleri;
    } else {
        return onlikSozleri;
    }
}


var son = 42;
var ifoda = ifodalabBeruvchi(son);
console.log(ifoda); 
*/





//3-misol
//Savol : Ixtioriy sonning bo'luvchilar sonini topuvchi funksiya yozing.
//Javob
/*
function boluvchilar(son) {
    if (son <= 0) {
        return "Ixtiyoriy musbat son kiritilishi kerak.";
    }

    var boluvchilar = [];

    for (var i = 1; i <= son; i++) {
        if (son % i === 0) {
            boluvchilar.push(i);
        }
    }

    return boluvchilar;
}

var son = 12;
var natija = boluvchilar(son);
console.log(natija); // [1, 2, 3, 4, 6, 12]
*/



//4-misol
//Savol :Ixtioriy sonning bo'luvchilar sonini topuvchi funksiya yozing.
//Javob

/*
function boluvchilarSoniniTop(son) {
    if (son <= 0) {
        return "Ixtiyoriy musbat son kiritilishi kerak.";
    }

    var boluvchilar = [];

    for (var i = 1; i <= son; i++) {
        if (son % i === 0) {
            boluvchilar.push(i);
        }
    }

    var boluvchiSon = boluvchilar.length;

    return boluvchiSon;
}

var son = 24;
var natija = boluvchilarSoniniTop(son);
console.log(natija); 
*/


//5-misol
//Savol : Agar berilgan son 3 ga ham 5 ga karrali bolsa uning kvadratini aks holda kubini qaytaruvchi funksiya yozing.
//Javob

/*
function kvadratYokiKub(son) {
    if (son % 3 === 0 && son % 5 === 0) {
        return son * son;
    } else {
        return son * son * son;
    }
}

var testSon = 15;
var natija = kvadratYokiKub(testSon);
console.log(natija); 
*/


//7-misol
//Savol : Ixtiyoriy sonning tub yoki tub emasligini aniqlovchi funksiya yozing.
//Javol
/*
function kvadratYokiKub(son) {
    if (son % 3 === 0 && son % 5 === 0) {
        return son * son;
    } else {
        return son * son * son;
    }
}

var testSon = 15;
var natija = kvadratYokiKub(testSon);
console.log(natija); 

*/