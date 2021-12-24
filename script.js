
window.addEventListener('keyup' , keyboard)
  
   // to display the number in the blank field

function insert(num){
    let numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

  // to erase the blank field
function clean(){
    document.getElementById('resultado').innerHTML = ''
}

  // to delete one number at a time

function back(){
    let resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0,resultado.length -1)
}

 // function to sum the result

function calc(event){
    let resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado)
    }else if (event.keyCode == 13){
        calc(tecla)
    }else if (event.keyCode == 8){
        back(tecla)
    }else if (event.keyCode == 46){
        clean(tecla)
    }

}

  // Using the calculator on the keyboard


function keyboard(event){
    const number = '0123456789/*-+.'
    let tecla = event.key
    if(number.includes(tecla)){
        insert(tecla)
    }else if (event.keyCode == 13){
        calc(tecla)
    }else if (event.keyCode == 8){
        back(tecla)
    }else if (event.keyCode == 46){
        clean(tecla)
    }
    
    
}