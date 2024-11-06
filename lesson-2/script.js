for (let i = 0; i <= 10; i++) {
    let answer = 1*i;
    console.log(`1*${i}=${answer}`)
}

const btn = document.querySelector(".btn")
const body = document.querySelector("body")
btn.addEventListener("click", () => {
    body.classList.toggle("dark")
})