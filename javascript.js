


function calcular(){
    var txtv = document.querySelector('.txtv')
    var res = document.querySelector('.res')
    var vel = Number(txtv.value)
    res.innerHTML = `A sua velocidade é de ${vel} Km </br>`
    if (vel > 60) {
       res.innerHTML += 'Você foi multado</br>'
       res.innerHTML += 'Preencha os campos abaixo'
    }else if (vel < 60){
        res.innerHTML += 'Não preencha os campos abaixo'
    }
  
}

function carregamento(){
    var msg = document.querySelector('.mensagem')
    var dta = document.querySelector('.dta')
    var data = new Date()
    var dia = data.getDay()
    var mes = data.getMonth()
    var ano = data.getUTCFullYear()
    var hora = data.getHours()
    var min = data.getMinutes()
    dta.innerHTML = `São Bernardo do Campo  Dia/${dia}/${mes}/${ano} ${hora}:${min}`
    msg.innerHTML = 'Seja Bem Vindo'
}

function procurar(){
   var data = new Date
   var ano = data.getFullYear()
   var fano = document.querySelector('.txt2')
   var ida = document.querySelector('.ida')
   if ( fano.value.length == 0 || Number(fano.value) > ano ) {
     window.alert('[erro] verificar os dados e tente novamente')  
   } else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var genero = ''  
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       if (fsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src' , 'fotobbmasc1.jpg')
    
            }else if(idade < 21){
                img.setAttribute('src' , 'jovemhom1.jpg')
            }
             else if(idade < 50){
                img.setAttribute('src' , 'adultohom1.jpg')
            }else{
                img.setAttribute('src' , 'vovohom1.jpg')
            }
        
        } else if (fsex[1].checked){
                genero = 'mulher' 
                if (idade >= 0 && idade < 10){
                    img.setAttribute('src' , 'fotobbfem1.jpg')
                }else if (idade < 21 ) {
                    img.setAttribute('src' , 'jovemfem2.jpg' )
                }else if (idade < 50) {
                    img.setAttribute('src' , 'adultofem2.jpg')
                }else{
                    img.setAttribute('src' , 'vovofem2.jpg')
                }
            

        }
        ida.innerHTML = `Detectamos ${genero} com ${idade} anos`
        ida.appendChild(img)

   }


}
