function calculate(){
  var response = document.querySelector('.response')
  var speed = Number(document.querySelector('.speed').value)

  response.innerHTML = `A sua velocidade é de ${speed} Km </br>`

  if (speed > 60) {
    response.innerHTML += 'Você foi multado </br></br> Preencha os campos abaixo'
  }
  if (speed < 60) {
    response.innerHTML += 'Não preencha os campos abaixo'
  }
}

function loading(){
  var message = document.querySelector('.message')
  var dateField = document.querySelector('.dateField')
  var date = new Date()
  var day = date.getDay()
  var month = date.getMonth()
  var year = date.getUTCFullYear()
  var hour = date.getHours()
  var minutes = date.getMinutes()

  dateField.innerHTML = `São Bernardo do Campo, ${day}/${month}/${year} ${hour}:${minutes.length === 1 ? '0' + minutes : minutes }`
  message.innerHTML = 'Seja Bem Vindo'
}

function search(){
  var date = new Date
  var year = date.getFullYear()
  var ageField = document.querySelector('.ageField')
  var ida = document.querySelector('.ida')

  if ( ageField.value.length == 0 || Number(ageField.value) > year ) {
    window.alert('[erro] verificar os dados e tente novamente')  
  } else {
    var radioSex = document.getElementsByName('radioSex')
    var age = year - Number(ageField.value)
    var gender = ''  
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (radioSex[0].checked) {
      gender = 'homem'
      if (age >= 0 && age < 10) {
        img.setAttribute('src' , 'fotobbmasc1.jpg')
      } else if(age < 21) {
        img.setAttribute('src' , 'jovemhom1.jpg')
      } else if(age < 50) {
        img.setAttribute('src' , 'adultohom1.jpg')
      } else {
        img.setAttribute('src' , 'vovohom1.jpg')
      }
    } else if (radioSex[1].checked){
      gender = 'mulher' 

      if (age >= 0 && age < 10){
        img.setAttribute('src' , 'fotobbfem1.jpg')
      } else if (age < 21 ) {
        img.setAttribute('src' , 'jovemfem2.jpg' )
      } else if (age < 50) {
        img.setAttribute('src' , 'adulto.fem2.jpg')
      } else {
        img.setAttribute('src' , 'vovofem2.jpg')
      }
    }

    ida.innerHTML = `Detectamos ${gender} com ${age} anos`
    ida.appendChild(img)
  }
}
