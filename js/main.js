var botaoCadastrarEmpresa = document.getElementById('botao-empresa');
var botao1 = document.getElementById('botao1')

const container = document.querySelector('.div-escondida')

botaoCadastrarEmpresa.addEventListener('click', () =>{
    if(container.style.display === 'flex'){
        container.style.display = 'none';
    }else {
        container.style.display = 'flex';
    }
    console.log('clicou')
})

botao1.addEventListener('click', () =>{
    if(container.style.display === 'flex'){
        container.style.display = 'none';
    }else {
        container.style.display = 'flex';
    }
    console.log('clicou')
})