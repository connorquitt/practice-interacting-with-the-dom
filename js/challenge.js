//document consts
let timer = document.querySelector("#counter")
const plusOne = document.querySelector("#plus")
const minusOne = document.querySelector("#minus")
const likeNum = document.querySelector("#heart")
const pauseNum = document.querySelector("#pause")
const commentBar = document.querySelector("#comment-input")
const submitBtn = document.querySelector("#submit")
let comments = document.createElement("div")
let isCount = true
let count = 1

//counter up every second
setInterval(() => {
    if(isCount === true){timer.textContent++}
}, 1000)


//make + and - work
plusOne.addEventListener("click", () => {
    if(isCount === true){timer.textContent++}
})
minusOne.addEventListener("click", () => {
    if(isCount === true){timer.textContent--}
})


//make heart like
likeNum.addEventListener("click", () => {
    if(isCount === true){
    let likes = document.createElement("li")
    likes.textContent = `you have liked ${timer.textContent}`
    document.querySelector("h3").appendChild(comments).appendChild(likes)
}})


//comment
submitBtn.addEventListener("click", () => {
    event.preventDefault()
    if(isCount === true){
    let text = document.createElement('li')
    text.textContent = commentBar.value
    document.querySelector("h3").appendChild(comments).appendChild(text)
    commentBar.value = ""
    }
    
})


//make pause
pauseNum.addEventListener("click", () => {
    if(isCount === true){
        isCount = false
        
    }else if(isCount === false){
        isCount = true
    }
})