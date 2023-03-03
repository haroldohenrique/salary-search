// var botaoCadastrarEmpresa = document.getElementById('botao-empresa');
// var botao1 = document.getElementById('botao1')

// const container = document.querySelector('.div-escondida')

// botaoCadastrarEmpresa.addEventListener('click', () =>{
//     if(container.style.display === 'flex'){
//         container.style.display = 'none';
//     }else {
//         container.style.display = 'flex';
//     }

// })

// botao1.addEventListener('click', () =>{
//     if(container.style.display === 'flex'){
//         container.style.display = 'none';
//     }else {
//         container.style.display = 'flex';
//     }
// })


// ABRIR ------------------------------------------

function modal_show() {
    document.getElementById("div-escondida").style.display = 'flex';
    document.getElementById("empresa-cadastro").setAttribute("required", "required");

}

function modal_show1() {
    document.getElementById("div-escondida1").style.display = 'flex';
    document.getElementById("profissao-cadastro").setAttribute("required", "required");

}

function modal_show2() {
    document.getElementById("div-botao-escondido").style.display = 'flex';

}

function modal_show3() {
    document.getElementById('resultado-escondido').style.display = 'block';

}




// FECHAR ------------------------------------


function modal_close() {
    document.getElementById("div-escondida").style.display = 'none'
    document.getElementById("empresa-cadastro").removeAttribute("required");
}

function modal_close1() {
    document.getElementById("div-escondida1").style.display = 'none'
    document.getElementById("profissao-cadastro").removeAttribute("required");
}