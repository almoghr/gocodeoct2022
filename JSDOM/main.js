// const header = document.querySelector('h5')
// const block = document.querySelector('.test')
// const span = document.querySelector('#wow')
// console.log(header)

// // header.style.fontSize = '35px'
// // header.style.background = 'yellow'
// const headers = document.querySelectorAll('h5')
// const blocks = document.querySelectorAll('.test')
// const spans = document.querySelectorAll('#wow')

// console.log(headers)

// headers.forEach(element => {
//     element.style.fontSize = '35px'
//     element.style.background = 'yellow'
// })

// spans.forEach(element => console.log(element.innerText))


// blocks.forEach(el => {
//     const newBtn = document.createElement('button')
//     newBtn.innerText='click me'
//     newBtn.addEventListener('click', function(event){
//         spans.forEach(function(element){
//             if(element.style.background === 'red'){
//                 element.style.background = 'blue'
//                 element.style.fontSize = ''
//             } else{
//                 element.style.background = 'red'
//                 element.style.fontSize = '35px'
//             }
//         })
//     })
    
//     el.appendChild(newBtn)
// })

// // block.append(newBtn)




// const divCheck = document.createElement("div")
// const spanCheck = document.createElement("span")
// const buttonCheck = document.createElement("button")
// const strongCheck = document.createElement("strong")

// strongCheck.innerText = 'wow'
// buttonCheck.append(strongCheck)
// spanCheck.append(buttonCheck)
// divCheck.append(spanCheck)
// document.body.append(divCheck)

// const divCheck2 = document.createElement("div")

// divCheck2.innerHTML = `<span><button><strong>wow</strong></button></span>`
// document.body.append(divCheck2)

// const circles = document.querySelectorAll('.circle')
// const circle = document.querySelector('.circle')

// console.log(circles)
// console.log(circle)

// circles.forEach(function(element){
//     element.addEventListener('click', function(event){
//         element.style.backgroundColor = 'blue'
//     })
// })

// const coloredButtons= [
//     {color: 'red'},
//     {color: 'yellow'},
//     {color: 'blue'},
//     {color: 'pink'},
// ]

// coloredButtons.forEach(function(btn){
//     const btnEl = document.createElement(btn.tag);
//     btnEl.innerText = btn.color;
//     btnEl.style.backgroundColor = btn.color;
//     btnEl.addEventListener('click', function(){document.body.style.backgroundColor = btn.color})
//     document.body.appendChild(btnEl)
// })

const inputList = document.querySelectorAll('input')
const submitBtn = document.querySelector('.submit')
const formObj = {}

inputList.forEach(function(inp){
    inp.addEventListener('keypress', function(e){

        // if(e.target.name === 'email'){
        //     //enter your regex here
        // }
        // if(!e.target.value.includes('ap')){
        //     inp.value = ''
        //     return
        // }
        console.log(e)
        formObj[e.target.name] = e.target.value

        if(e.charCode === 13){
            submitBtn.click()
        }
    })
});


submitBtn.addEventListener('click', function(){
    if(!formObj.fullname || !formObj.email || !formObj.password){
        console.log('error')
        return
    }
    console.log(formObj)
})