
let dtTag = document.createElement('p')
    
let divTag = document.getElementById('header')
divTag.style.textAlign = 'center'
divTag.style.fontFamily = 'arial'
    
//datetime function and color
let dateTimefun = () =>{
    let now = new Date()

          let month = now.toLocaleString('default', {month:'long'})
          let day = now.getDate()
          let hour = now.getHours()
          let min = now.getMinutes()
          let sec = now.getSeconds()
          let year = now.getFullYear()

          dtTag.textContent = `${month } ${day}, ${year} ${hour}:${min}:${sec}`

          
          let red = Math.floor(Math.random()*255)
          let green = Math.floor(Math.random()*255)
          let blue = Math.floor(Math.random()*255)
          dtTag.style.backgroundColor = `rgb(${red},${green},${blue})`
          dtTag.style.display = 'inline-block'
          dtTag.style.padding = '10px'
          dtTag.style.marginTop = '0'
          dtTag.style.fontSize = '15px'

          //Year color
          let redYear = Math.floor(Math.random()*255)
          let greenYear = Math.floor(Math.random()*255)
          let blueYear = Math.floor(Math.random()*255)
          let yearTag = document.getElementById('year')
          yearTag.style.fontSize = '70px'
          yearTag.style.color = `rgb(${redYear},${greenYear},${blueYear})`
          divTag.appendChild(dtTag)

    }
  
setInterval(dateTimefun,1000)

let buttomText = document.getElementById('buttom-text')
buttomText.style.fontSize = '15px'
buttomText.style.textDecoration = 'underline'

let headText = document.getElementById('head-text')
headText.style.fontSize = '30px'


//challenges part div
let bodTag = document.createElement('div')
bodTag.style.display = 'flex'
bodTag.style.flexDirection = 'column'
bodTag.style.justifyContent = 'center'
bodTag.style.alignItems = 'center'

//challenges data 
let challenges = asabenehChallenges2020['challenges']

for (let i of challenges){
  chlgitLink = i['githubUrl']

  chlname = document.createElement('a')
  chlname.style.display = 'inline-block'
  chlname.textContent = i['name']
  chlname.href =i['githubUrl']

  let statusTag = document.createElement('p')
  statusTag.textContent = i['status']

  

  let dividedDiv = document.createElement('div')
  dividedDiv.style.display = 'flex'
  dividedDiv.style.justifyContent = 'space-between'
  dividedDiv.style.alignItems = 'center'
  dividedDiv.style.padding = '10px'
  dividedDiv.style.textAlign = 'center'
  dividedDiv.style.border = '1px solid' 
  dividedDiv.style.marginBottom = '5px'
  dividedDiv.style.width = '650px'

  if (i['status'] == 'Done') {

    dividedDiv.style.backgroundColor = '#3BB01F'
    
  } else if(i['status'] == 'Ongoing'){
    dividedDiv.style.backgroundColor = '#BCD80C'

  } else if (i['status'] == 'Coming'){
    dividedDiv.style.backgroundColor = '#F03E0A'
  }

  detailTag = document.createElement('details')
  detailTag.style.display = 'inline-block'
  summaryTag = document.createElement('summary')
  summaryTag.textContent = i['lan']

  
  ulTag = document.createElement('ul')
  ulTag.style.listStyle = 'none'
  ulTag.style.textAlign = 'start'

  dividedDiv.appendChild(chlname)
      for (let j of i['topics']){
        liTag = document.createElement('li')
        liTag.textContent = j
        ulTag.appendChild(liTag)
        detailTag.appendChild(summaryTag)
        detailTag.appendChild(ulTag)
      }

  
  dividedDiv.appendChild(detailTag)
  
  dividedDiv.appendChild(statusTag)

  bodTag.appendChild(dividedDiv)
}

document.body.appendChild(bodTag)

//name and social media

//element creation
let socialMedia = document.createElement('div')
let nameAuthor = document.createElement('h2')
let socialLinks = document.createElement('a')
let bioTag = document.createElement('p')
let solinkDiv = document.createElement('div')

//data variables
let authorName = asabenehChallenges2020['author']
let links = asabenehChallenges2020['author']['socialLinks']


nameAuthor.textContent = `${authorName['firstName']} ${authorName['lastName']}`
bioTag.textContent = asabenehChallenges2020['author']['bio']

socialMedia.appendChild(nameAuthor)

for (let i of links){
  let socialLinks = document.createElement('a')
  
  socialLinks.innerHTML += i['fontawesomeIcon']
  
  solinkDiv.appendChild(socialLinks)
  socialLinks.style.margin = '10px'
}



socialMedia.appendChild(solinkDiv)



//stying
nameAuthor.style.textAlign = 'center'
bioTag.style.textAlign = 'center'
bioTag.style.marginLeft = '295px'
bioTag.style.marginRight = '295px'
socialLinks.style.margin = '10px'
solinkDiv.style.textAlign = 'center'




//appending


socialMedia.appendChild(bioTag)

document.body.appendChild(socialMedia)

let logoSize = document.querySelectorAll('.fab')
for (let i =0; i<logoSize.length; i++){
  logoSize[i].style.fontSize = '2em'
}


//titles and eduction
let tdDiv = document.createElement('div')

tdDiv.style.display = 'flex'
tdDiv.style.justifyContent = 'center'

data = ['titles','skills','qualifications']

for (let d of data){
  
  let sepDiv = document.createElement('div')
  sepDiv.style.margin = '40px'
  let h5Tag = document.createElement('h5')
  h5Tag.style.marginBottom = '8px'
  let capiyzstr = d.charAt(0).toUpperCase()+d.slice(1)
  h5Tag.textContent = capiyzstr
  sepDiv.appendChild(h5Tag)

  
  for (let item of asabenehChallenges2020['author'][d]){
    

    if (asabenehChallenges2020['author'][d][0].length ==2){
      
    let pTag = document.createElement('p')
    pTag.style.margin = '0'
    pTag.style.padding = '0'
    pTag.style.paddingBottom = '3px'
    pTag.textContent = `${item[0]} ${item[1]}`
    sepDiv.appendChild(pTag)

    }else{
    let pTag = document.createElement('p')
    pTag.style.margin = '0'
    pTag.style.padding = '0'
    pTag.style.paddingBottom = '3px'
    pTag.textContent = item
    sepDiv.appendChild(pTag)
  }
  }
  
  tdDiv.appendChild(sepDiv)
}

document.body.appendChild(tdDiv)


let keysDiv = document.createElement('div')
keysDiv.style.marginLeft = '295px'
keysDiv.style.marginRight = '295px'


let keysTitle = document.createElement('h5')
keysTitle.textContent = 'Keywords'
keysTitle.style.marginBottom = '10px'
keysTitle.stylepaddingBottom = '0'

keysDiv.appendChild(keysTitle)

let keydev = document.createElement('div')
keydev.style.display = 'flex'
keydev.style.flexWrap = 'wrap'
keydev.style.marginLeft = '35px'
keydev.style.paddingTop = '0'
keydev.style.marginTop = '0'

for (let key of asabenehChallenges2020['keywords']){
  let keys = document.createElement('p')

  keys.textContent = '#'+key
  keys.style.margin = '2px'
  keys.style.border = '5px'
  keys.style.padding = '6px'
  keys.style.borderRadius = '20px'
  keys.style.fontSize = '15px'


  let keyred = Math.floor(Math.random()*255)
  let keygreen = Math.floor(Math.random()*255)
  let keyblue = Math.floor(Math.random()*255)
  keys.style.backgroundColor = `rgb(${keyred},${keygreen},${keyblue})`
          

  keydev.appendChild(keys)
}

keysDiv.appendChild(keydev)
document.body.appendChild(keysDiv)

