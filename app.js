const input=document.getElementById("input")
const output=document.getElementById("output")
function capital(){
    output.innerHTML=''
    let paragraph=document.createElement('p')
    paragraph.innerHTML=input.value 
    paragraph.classList.add('capital')
    output.appendChild(paragraph)

}
function lower(){
    output.innerHTML=''
    let paragraph=document.createElement('p')
    paragraph.innerHTML=input.value 
    paragraph.classList.add('lower')
    output.appendChild(paragraph)

}
function firstcap(){
    output.innerHTML=''
    let paragraph=document.createElement('p')
    paragraph.innerHTML=input.value 
    paragraph.classList.add('firstcap')
    output.appendChild(paragraph)

}
function bolder(){
    output.innerHTML=''
    let paragraph=document.createElement('p')
    paragraph.innerHTML=input.value 
    paragraph.classList.add('bolder')
    output.appendChild(paragraph)

}
function underline(){
    output.innerHTML=''
    let paragraph=document.createElement('p')
    paragraph.innerHTML=input.value 
    paragraph.classList.add('underline')
    output.appendChild(paragraph)

}
function italic(){
    output.innerHTML=''
    let paragraph=document.createElement('p')
    paragraph.innerHTML=input.value 
    paragraph.classList.add('italic')
    output.appendChild(paragraph)

}