const botoes = [
    titular = document.getElementById('botaoTitular'),
    cardNum = document.getElementById('botaoCardNum'),
    dataMes = document.getElementById('botaoMes'),
    dataAno = document.getElementById('botaoAno'),
    cardCVC = document.getElementById('botaoCVC')
]
const paragrafos = [
    textTitular = document.getElementById('textNome'),
    textCardNum = document.getElementById('textNumero'),
    textDataMes = document.getElementById('textMes'),
    textDataAno= document.getElementById('textAno'),
    textCardCVC = document.getElementById('textCVC'),
    erromsg = document.getElementById('erromsg')
]


// Adiciona um eventListener para cada botão
for(let i = 0; i < botoes.length; i++){

    botoes[i].addEventListener('input', function(){

        if(botoes[i] == botoes[0]){// Titular
            textTitular.innerHTML = titular.value.toUpperCase()
        }

        else if (botoes[i] == botoes[1]){// cartao Numero
            //adiciona a cada 4 digitos um espaço
            if(cardNum.value.length == 4 || cardNum.value.length == 9 || cardNum.value.length == 14 || cardNum.value.length == 19){
                cardNum.value = cardNum.value + ' '
            }
            //limita a quantidade de caracteres
            if(cardNum.value.length > 5){
                cardNum.value = cardNum.value.slice(0, 19)
            }
            // remove todos os tipos de letras permitidas
            cardNum.value = cardNum.value.replace(/[^0-9]/g, ' ')
            textCardNum.innerHTML = cardNum.value

        }

        else if (botoes[i] == botoes[2]){// Data Mes
            
            if (dataMes.value > 12 || dataMes.value < 1){//msg de tratamento de erro
                erromsg.style.visibility = 'visible'
                erromsg.innerHTML = 'Mês da validade deve ser entre 1 a 12' 
            }
            else{
                erromsg.style.visibility = 'hidden'
            }
            textDataMes.innerHTML = dataMes.value
        }

        else if (botoes[i] == botoes[3]){// Data Ano
            if(dataAno.value > 50 || dataAno.value < 23){//msg de tratamento de erro
                erromsg.innerHTML = 'Ano da validade deve ser entre 23 e 50'
                erromsg.style.visibility = 'visible'
            }
            else{
                erromsg.style.visibility = 'hidden'
                textDataAno.innerHTML = dataAno.value
            }
        }

        else if (botoes[i] == botoes[4]){// CVC
            if(cardCVC.value.length > 3 || cardCVC.value.length < 3){//msg de tratamento de erro
                erromsg.innerHTML = 'codigo de segurança deve conter até 3 digitos'
                erromsg.style.visibility = 'visible'
            }
            else{
                erromsg.style.visibility = 'hidden'
                textCardCVC.innerHTML = cardCVC.value
            }
        }
    })
}

function confirmar(){  
    // confirmação dos dados]
    const loading = document.getElementById('loading')
    const sectionConfirm = document.getElementById('finalizacaoContainer')
    const dotcontainer = document.getElementById('dotContainer')

    var validador = [
        bt1 = false,
        bt2 = false,
        bt3 = false,
        bt4 = false,
        bt5 = false
    ]

    for(let i = 0; i < botoes.length; i++){

        if(botoes[i] == botoes[0]){
            if(botoes[0].value.length < 5){
                botoes[0].style.borderColor = 'rgba(254, 0, 0, 0.357)'//light red
                validador[0] = false
            }
            else{
                botoes[0].style.borderColor = 'rgba(0, 0, 0, 0.258)'//grey
                validador[0] = true
            }
        }

        if(botoes[i] == botoes[1]){
            if(botoes[1].value.length < 19){
                botoes[1].style.borderColor = 'rgba(254, 0, 0, 0.357)'//light red
                validador[1] = false
            }
            else{
                botoes[1].style.borderColor = 'rgba(0, 0, 0, 0.258)'//grey
                validador[1] = true
            }
        }

        if(botoes[i] == botoes[2]){
            if(botoes[2].value < 1 || botoes[2].value > 12 || botoes[2].value.length < 1 || botoes[2].value.length > 2){
                botoes[2].style.borderColor = 'rgba(254, 0, 0, 0.357)'//light red
                validador[2] = false
            }
            else{
                botoes[2].style.borderColor = 'rgba(0, 0, 0, 0.258)'//grey
                validador[2] = true
            }
        }

        if(botoes[i] == botoes[3]){
            if(botoes[3].value < 23 || botoes[3].value > 50 || botoes[3].value.length < 2 || botoes[3].value.length > 2){
                botoes[3].style.borderColor = 'rgba(254, 0, 0, 0.357)'//light red
                validador[3] = false
            }
            else{
                botoes[3].style.borderColor = 'rgba(0, 0, 0, 0.258)'//grey
                validador[3] = true
            }
        }
        if(botoes[i] == botoes[4]){
            if(botoes[4].value.length < 3 || botoes[3].value.length > 3){
                botoes[4].style.borderColor = 'rgba(254, 0, 0, 0.357)'//light red
                validador[4] = false
            }
            else{
                botoes[4].style.borderColor = 'rgba(0, 0, 0, 0.258)'//grey
                validador[4] = true
            }
        }
    }
    var prosseguir = validador.every( validador => validador == true)
    //tira a os dados do cartão e adciona a tela de confirmação após o botão ser ativado
    if(prosseguir == true){
        dotcontainer.style.visibility = 'visible'
        loading.style.display = 'block'
        setTimeout(function(){
            const sectionRight = document.getElementById('sectionRightHTML')
            sectionRight.parentNode.removeChild(sectionRight)
            dotcontainer.style.visibility = 'hidden'
            loading.style.display = 'none'
            sectionConfirm.style.visibility = 'visible'
        }, 2000)
    }
}




