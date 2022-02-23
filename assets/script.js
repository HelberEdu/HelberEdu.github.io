var button0 = document.querySelector('button#zero')
var button1 = document.querySelector('button#um')
var button2 = document.querySelector('button#dois')
var button3 = document.querySelector('button#tres')
var button4 = document.querySelector('button#quatro')
var button5 = document.querySelector('button#cinco')
var button6 = document.querySelector('button#seis')
var button7 = document.querySelector('button#sete')
var button8 = document.querySelector('button#oito')
var button9 = document.querySelector('button#nove')
var igual = document.querySelector('button#igual')
var display = document.querySelector('h1#display')
var backspace = document.querySelector('button#backspace')
var clearBtn = document.querySelector('button#clear-btn') 
var soma = document.querySelector('button#soma')
var subtracao = document.querySelector('button#subtracao')
var produto = document.querySelector('button#produto')
var divisao = document.querySelector('button#divisao')
var decimal = document.querySelector('button#decimal')
var porcentagem = document.querySelector('button#porcentagem')
var audio = document.querySelector('audio#som')
var advbtn = document.querySelector('button#adv-btn')

function app (){
    resultado = ''
        
    const som = new Audio();
    som.src = './assets/files/songs/Stardew_Valley_OST.mp3'

        advbtn.addEventListener('click', function(){
            // som.play();
            window.location.href = 'https://youtu.be/dQw4w9WgXcQ'
        })

        soma.addEventListener('click', function(){
            resultado = resultado + soma.value
            display.innerText = resultado;
            return resultado
        })

        subtracao.addEventListener('click', function(){
            resultado = resultado + subtracao.value
            display.innerText = resultado;
            return resultado
        })

        produto.addEventListener('click', function(){
            resultado = resultado + produto.value
            display.innerText = resultado;
            return resultado
        })

        divisao.addEventListener('click', function(){
            resultado = resultado + divisao.value
            display.innerText = resultado;
            return resultado
        })

        decimal.addEventListener('click', function(){
            resultado = resultado + decimal.value
            display.innerText = resultado;
            return resultado
        })

        porcentagem.addEventListener('click', function(){
            resultado = resultado / 100
            display.innerText = resultado;
            return resultado
        })

        clearBtn.addEventListener('click', function(){
            resultado = '0'
            display.innerText = resultado;
            return resultado
        })

        backspace.addEventListener('click', function(){
            resultado = resultado.substring(0, resultado.length-1);
            display.innerText = resultado;
            return resultado
        })

        igual.addEventListener('click', function(){
            resultado = display.innerText = eval(resultado)
            return resultado
        })

        button0.addEventListener('click', function(){
            resultado = resultado + '0';
            display.innerText = resultado;
            return resultado;
        })
        button1.addEventListener('click', function(){
            resultado = resultado + '1';
            display.innerText = resultado;
            return resultado;
        })
        button2.addEventListener('click', function(){
            resultado = resultado + '2';
            display.innerText = resultado;
            return resultado;
        })
        button3.addEventListener('click', function(){
            resultado = resultado + '3';
            display.innerText = resultado;
            return resultado;
        })
        button4.addEventListener('click', function(){
            resultado = resultado + '4';
            display.innerText = resultado;
            return resultado;
        })
        button5.addEventListener('click', function(){
            resultado = resultado + '5';
            display.innerText = resultado;
            return resultado;
        })
        button6.addEventListener('click', function(){
            resultado = resultado + '6';
            display.innerText = resultado;
            return resultado;
        })
        button7.addEventListener('click', function(){
            resultado = resultado + '7';
            display.innerText = resultado;
            return resultado;
        })
        button8.addEventListener('click', function(){
            resultado = resultado + '8';
            display.innerText = resultado;
            return resultado;
        })
        button9.addEventListener('click', function(){
            resultado = resultado + '9';
            display.innerText = resultado;
            return resultado;
        })
}
app()