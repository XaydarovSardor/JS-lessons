//  1
// for(let i=0; i<4; i++){
//     const paragraf = document.createElement("p")
//     document.body.appendChild(paragraf)
//     paragraf.innerText= "Paragraph"       
// }
// const paragraph = document.querySelectorAll("p")
// paragraph[0].style.color ="green"
// paragraph[1].style.color ="red"
// paragraph[2].style.color ="green"
// paragraph[3].style.color ="red"


//  2
// paragraph.forEach(item =>{
//     item.style.color="#fff"
//     item.style.padding="10px"
//     item.style.backgroundColor="red"
//     item.style.fontSize="32px"
//     item.style.fontFamily="sans-serif"
//     item.style.borderRadius="5px"
// })

const container = document.querySelector(".container")
container.style.display="flex"
container.style.flexWrap="wrap"
document.body.style.padding="30px"
document.body.style.display="flex"
document.body.style.overflowX="hidden"
document.body.style.justifyContent="center"
for (let i = 1; i <= 100; i++) {
    const span = document.createElement("span")
    span.textContent=i
    container.appendChild(span)
    span.style.padding="50px"
    span.style.fontSize="30px"
    span.style.fontFamily="sans-serif"
    span.style.width="50px"
    span.style.borderBottom="3px solid #000"
    span.style.borderLeft="3px solid #000"
    span.style.textAlign="center"
    if(i%2===0){
        span.style.backgroundColor="green"
    }else{
        span.style.backgroundColor="yellow"
    }
}
