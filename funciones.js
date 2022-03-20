function textoContado() {
    var texto1 = prompt('Ingrese un texto: ')
    alert('El texto: ' + texto1 + ' tiene '+ texto1.length + ' caracteres')
}

function textoRecortado(){
    var texto2 = prompt('Ingrese un texto: ')
    texto2 = texto2.substring(0,5)
    alert(texto2)
}

function textoSeparado(){
    var texto3 = prompt('Ingrese un texto: ')
    texto3 = texto3.split(" ")
    alert(texto3)
}

function textoRepetido(){
    var texto4 = prompt('Ingrese un texto: ')
    texto4 = texto4.repeat(4)
    alert(texto4)
}