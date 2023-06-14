
document.body.style.backgroundImage = "url('images/galaxy.gif')"
document.body.style.color = 'white'

//head container
const headContainer = document.querySelector('.head-container')
headContainer.style.textAlign = 'center'

//button
let btn = document.querySelector('button')

btn.style.height = '33px'
btn.style.backgroundColor = 'gray'
btn.style.color = 'white'
btn.style.borderStyle = 'none'
btn.style.borderRadius = '3px'

//images 
let imgTag = document.createElement('img')
imgTag.style.padding = '30px'

//options
let optiontag = document.querySelector('select')

optiontag.style.height = '33px'

//input
let inputTag = document.querySelector('#mass')
inputTag.style.height = '27px'


//main content
const mainTag = document.querySelector('.flex-container')

mainTag.style.marginTop = '25px'
mainTag.style.backgroundColor = 'rgba(20,20,20,0.5)'
mainTag.style.display = 'flex'
mainTag.style.justifyContent = 'center'
mainTag.style.alignItems = 'center'
mainTag.style.marginLeft = '200px'
mainTag.style.marginRight = '200px'


//mass-rquired
let infoTag = document.createElement('p')

let divofInfo = document.querySelector('#test')
divofInfo.style.display = 'flex'

let discription = document.querySelector('.flex-item-description')

massTag = document.createElement('p')
required = document.querySelector('.mass-Required')

let calulatedData = document.createElement('p')
calulatedData.style.display = 'block'

let calMain = document.querySelector('.calulation')
let cal = document.createElement('div')

cal.style.backgroundColor ='rgba(25,25,25,0.9)'
cal.style.width = '100px'
cal.style.height = '100px'
cal.style.borderRadius = '50%'
cal.style.display = 'flex'
cal.style.justifyContent = 'center'
cal.style.alignItems = 'center'

let calDis = document.querySelector('.dis-cal')

btn.addEventListener('click',() => {
  required.innerHTML =''
  divofInfo.innerHTML = ''
  discription.innerHTML=''
  calMain.innerHTML = ''
  calDis.style.backgroundColor = ''
  calDis.style.display = ''
  calDis.style.flexDirection = ''
  calDis.style.justifyContent = ''
  calDis.style.alignItems = ''
  calDis.style.padding = ''
  calDis.style.width = ''
  calulatedData.textContent = ''
})
//event lister
btn.addEventListener('click',() => {

  inputValue = inputTag.value
  
if (inputValue =='' || optiontag.value == 'none'  ){
  massTag.textContent ='Mass is Required'
  massTag.style.padding = '20px'
  massTag.style.width = '400px'
  massTag.style.backgroundColor = 'rgba(35,35,35,0.9)'
  massTag.style.textAlign = 'center'

  required.appendChild(massTag)
} else {
  
  imgTag.src = `images/${optiontag.value}.png`
  imgTag.style.height = '300px'

  infoTag.textContent = 'The weight of the object on '

  infoTag.innerHTML += `<span>${optiontag.value.toUpperCase()}</span>`

  if (optiontag.value == 'earth'){
    weight = inputValue * 9.8
  calulatedData.textContent = weight.toFixed(2) + ' N'
  }else if (optiontag.value == 'jupiter'){
    weight = inputValue * 24.79
  calulatedData.textContent = weight.toFixed(2) + ' N'
  }else if (optiontag.value == 'mars'){
    weight = inputValue * 3.71
  calulatedData.textContent = weight.toFixed(2) + ' N'
  }else if (optiontag.value == 'mercury'){
    weight = inputValue * 3.7
  calulatedData.textContent = weight.toFixed(2) + ' N'
  }else if (optiontag.value == 'moon'){
    weight = inputValue * 1.6
  calulatedData.textContent = weight.toFixed(2) + ' N'
  }else if (optiontag.value == 'neptune'){
    weight = inputValue * 11.15
  calulatedData.textContent = weight.toFixed(2) + ' N'
  }else if (optiontag.value == 'pluto'){
    weight = inputValue * 0.62
  calulatedData.textContent = weight.toFixed(2) + ' N'
  }else if (optiontag.value == 'saturn'){
    weight = inputValue * 10.44
  calulatedData.textContent = weight.toFixed(2) + ' N'
  }else if (optiontag.value == 'uranus'){
    weight = inputValue * 8.87
  calulatedData.textContent = weight.toFixed(2) + ' N'
  }else if (optiontag.value == 'venus'){
    weight = inputValue * 8.87
  calulatedData.textContent = weight.toFixed(2) + ' N'
  }

  
  calDis.style.backgroundColor = 'rgba(35,35,35,0.9)'
  calDis.style.display = 'flex'
  calDis.style.flexDirection = 'column'
  calDis.style.justifyContent = 'center'
  calDis.style.alignItems = 'center'
  calDis.style.padding = '30px'
  calDis.style.width = '300px'

  divofInfo.appendChild(imgTag)
  discription.appendChild(infoTag)
  calMain.appendChild(cal)
  cal.appendChild(calulatedData)

}
})

