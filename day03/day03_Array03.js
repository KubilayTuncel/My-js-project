//8)splice(): yeni data ekleyebiliyoruz, kaldirabiliyoruz
//mevcut datayi degistirebiliyoruz

const months = ["Jan", "March", "April", "June"];
console.log(months);

months.splice(1, 0, "Feb");
//1: birinci index e ekle
//0: herhangi birseyi silme
//Feb'i ekle
console.log(months);

months.splice(4, 1, "May");
//4: dördüncü index e ekle
//1: ekledikten sonra 1 tane sil
//May'i ekle
console.log(months);

months.splice(5, 0, "June", "July", "August");
//5: besinci indey e ekle
//0: herhangi birsey silme
//'June','July','August' ekle
console.log(months);
months.splice(5, 3);
console.log(months);

//-1 son index i kasdetiyoruz
//-2 son 2 index i

months.splice(-1);
console.log(months);
months.splice(-2);
console.log(months);
months.splice(2, 0, "March", "April", "May", "June", "July", "August");
console.log(months);
//9)slice(startIndex(dahil),endIndex(haric)):

console.log(months.slice(2));
//ilk iki index ten sonrasini getir

console.log(months.slice(-3));
//son 3 datayi getir

console.log(months.slice(2, 5));
//2: index i 2 dahil
//5: index 5 haric
