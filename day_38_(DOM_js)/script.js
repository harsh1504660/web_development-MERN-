console.log('hello world')
console.log(document.body.childNodes[1].childNodes)

let cont = document.body.childNodes[1]
console.log(cont.firstChild)
console.log(cont.lastChild)
console.log(cont.firstElementChild)
console.log(cont.lastElementChild)
cont.lastElementChild.style.backgroundColor="red";