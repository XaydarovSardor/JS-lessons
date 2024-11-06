const student = {
    name: "Sardor",
    age:17,
    hobbies:{
        sport:"football",
        music:"rap"
    }
}

for(let item in student){
    console.log(`Property ${item} value ${student[item]}`)
}

if(student.hobbies){
    for(let hobbi in student.hobbies){
        console.log(`Property ${hobbi} value ${hobbies[hobbi]}`)
    }
}
for(let item in student.hobbies){
    console.log(`${item} value ${hobbies[item]}`);
}