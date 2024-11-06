let isPublic;
while (isPublic !== "true" && isPublic !== "false") {
    isPublic = prompt("Is public? (true or false)")
}
let numberOfBooks;
do {
    numberOfBooks = +prompt("Nechta kitob o'qidingiz?")
} while (numberOfBooks == 0 || isNaN(numberOfBooks ) || numberOfBooks<0);
isPublic= isPublic==="true"
let booksDB = {
    count: numberOfBooks,
    books: {},
    authors: {},
    genres: [],
    isPublic: isPublic,
}
for (let i = 1; i <= numberOfBooks; i++) {
    let kitobNomi;
    let ball;
    do {
        kitobNomi = prompt(`${i}-qaysi kitobni o'qidingiz?`)
        ball = +prompt(`${i}-o'qigan kitobingizga nechi ball berasiz?`)
    } while (!isNaN(kitobNomi) || kitobNomi==0 || isNaN(ball) || ball==0 || ball<0);
    booksDB.books[kitobNomi] = ball
}
console.log(booksDB);
let kitoblarSoni = booksDB.count
if(kitoblarSoni>5){
    console.log("Siz kitobxon ekansiz");    
}else if(kitoblarSoni<5 && kitoblarSoni>=3){
    console.log("Siz bazida kitob o'qir ekansiz");
}else if(kitoblarSoni<3){
    console.log("Siz kam kitob o'qir ekansiz");
}
