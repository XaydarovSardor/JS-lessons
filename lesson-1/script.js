//1-mashq
// console.log("10"==10)
//2-mashq
// let son = +prompt("Son kiriting:")
// if(son%2===0 && son>0){
//     alert(`${son} musbat va juft son`)
// }else if(son%2!==0 && son>0){
//     alert(`${son} musbat toq son`)
// }
// else if(son<0 && son%2===0){
//     alert(`${son} manfiy juft son`)
// }
// else if(son<0 && son%2!==0){
//     alert(`${son} manfiy toq son`)
// }
// else if(son===0){
//     alert(`${son} juft son ham emas toq son ham emas`)
// }else{
//     alert(`Siz son kiritishingiz kerak!`)
// }


//3-mashq
// Switch case
// let weekNumber = +prompt("Hafta kuni sonini kiriting:")
// switch(weekNumber){
//     case 1:
//         alert(`${weekNumber}-kun DUSHANBA`)
//         break
//     case 2:
//         alert(`${weekNumber}-kun SESHANBA`)
//         break
//     case 3:
//         alert(`${weekNumber}-kun CHORSHANBA`)
//         break
//     case 4:
//         alert(`${weekNumber}-kun PAYSHANBA`)
//         break
//     case 5:
//         alert(`${weekNumber}-kun JUMA`)
//         break
//     case 6:
//         alert(`${weekNumber}-kun SHANBA`)
//         break
//     case 7:
//         alert(`${weekNumber}-kun YAKSHANBA`)
//         break
//     default:
//         alert(`hafta kunining raqamini kiritishingiz kerak`)
// }



//4-mashq
// let number = +prompt("Son kiriting:")
// if(number>0){
//     let positive = number+3
//     alert(`${number}+3=${positive}`)
// }else if(number<0){
//     let negative = number-2
//     alert(`${number}-2=${negative}`)
// }else if(number===0){
//     alert(`${number}`)
// }
// else{
//     alert("Son kiritishingiz kerak")
// }

// 5-mashq

// alert(`Hurmatli abuturiyent bizning imtihonimizda maksimal 219 ball to'plash mumkin`)
// let ism = prompt("Ismingizni kiriting:").toUpperCase()
// let familiya = prompt("Familiyangizni kiriting:").toUpperCase()
// let umumiyMaksBall = 219;
// alert(`${ism} Majburiy fanlardan to'plagan ballaringizni ayting:
//     Maksimal ball 50`)
// let matematika = +prompt("Matematikadan olgan ball:")
// let onatili = +prompt("Ona tilidan olgan ball:")
// let tarix = +prompt("Tarixdan olgan ball:")
// let majburiyMaskBall = 50
// let majburiyFanlar = matematika + onatili + tarix;

// if (majburiyFanlar != NaN) {
//     if (majburiyFanlar >= 30 && majburiyFanlar <= majburiyMaskBall) {
//         alert(`Tabriklayman ${ism}! Siz majburiy fanlardan ${majburiyFanlar} ball to'plab keyingi boshqichga chiqdingiz`)
//         alert(`${ism} endi Asosiy fanlardan to'plagan ballaringizni ayting:
//             Asosiy fanlarda maksimal 169 ball`)
//         let fizika = +prompt("Fizikadan olgan ball:")
//         let ingliz = +prompt("Inglizdan olgan ball:")
//         let informatika = +prompt("Informatikadan olgan ball:");
//         let asosiyFanlar = ingliz + informatika + fizika;
//         let asosiyMaksBall = 169;
//         let umumiyBall = majburiyFanlar + asosiyFanlar;
//         if (umumiyBall >= 170 && umumiyBall <= umumiyMaksBall && asosiyFanlar <= asosiyMaksBall) {
//             alert(`${ism} TABRIKLAYMIZ! Siz ${umumiyBall} ball to'plab Byudjetga kirdingiz!
//                 ${familiya} ${ism}:
//                 Majburiy fanlardan ${majburiyFanlar} ball va asosiy fanlardan ${asosiyFanlar} ball to'pladingiz`)
//         } else if (umumiyBall < 170 && umumiyBall >= 120) {
//             alert(`${ism} Tabriklaymiz! Siz ${umumiyBall} ball to'plab kontrakga kirdingiz!
//                 ${familiya} ${ism}:
//                 Majburiy fanlardan ${majburiyFanlar} ball va asosiy fanlardan ${asosiyFanlar} ball to'pladingiz`)
//         } else if (umumiyBall < 120 && umumiyBall >= 70) {
//             alert(`${ism}! Siz ${umumiyBall} ball to'plab SUPERKontraktga kirdingiz!
//                 ${familiya} ${ism}:
//                 Majburiy fanlardan ${majburiyFanlar} ball va asosiy fanlardan ${asosiyFanlar} ball to'pladingiz`)
//         } else if (umumiyBall > umumiyMaksBall) {
//             alert(`Hurmatli ${ism} asosiy fanlardan maksimal 169 ball olish mumkin`)
//         }
//         else {
//             alert(`${ism} AFSUS... Siz ${umumiyBall} ball to'plab SuperKontraktga ham kiraolmadingiz...
//                 ${familiya} ${ism}:
//                 Majburiy fanlardan ${majburiyFanlar} ball va asosiy fanlardan ${asosiyFanlar} ball to'pladingiz`)
//         }
//     } else if (majburiyFanlar > majburiyMaskBall) {
//         alert(`${ism} Majburiy fanlardan ${majburiyFanlar} ball to'plab bo'lmaydi, Maksimal 50 ball`)
//     }
//     else if (majburiyFanlar < 30) {
//         alert(`${ism} Majburiy fanlardan ${majburiyFanlar} ball to'pladingiz, asosiy fanlarga o'tish uchun 30 va undan yuqori ball olishiz kerak`)
//     } else {
//         alert("Nimadir xato ketdi...")
//     }
// } else {
//     alert("Siz ballarni harflarda kiritishingiz kerak")
// }


// 6 - mashq

// let name = prompt("Ismingizni kiriting:")
// let surname = prompt("Familiyangizni kiriting:")
// if(name.length>surname.length){
//     alert("Ismingiz familiyangizdan uzun")
// }else{
//     alert("Familiyangiz ismingizdan uzun ekan")
// }
