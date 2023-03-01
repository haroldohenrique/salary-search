$('#form').submit(function(e){ 
        e.preventDefault(); 
    var u_nome = $('#nomeSobrenome').val(); 
    var u_empresa = $('#empresa').val(); 
    var u_profissao = $('#profissao-id').val(); 
    var u_salario = $('#salario').val(); 
    var u_sexo = $('input[name="sexo"]:checked').val();

                 
        $.ajax({ 
            url: 'http://localhost/salary-search/ajax/cadastra.php', 
            method: 'POST', 
            data: {nome:u_nome, empresa: u_empresa, profissao: u_profissao, salario: u_salario, sexo: u_sexo}, 
            dataType: 'json' 
        }).done(function(result){ 
             console.log(result)
            
    
    new swal({
        title: "Obrigado!",
        text: "Dados preenchidos com sucesso!",
        icon: "success",                            
    })

    .then((confirm) => {
    if (confirm) {
        $('#nomeSobrenome').val(""); 
        $('#empresa').val(""); 
        $('#profissao-id').val(""); 
        $('#salario').val(""); 
        $('input[name="sexo"]:checked').val(""); 
        
    } else {
        $('#nomeSobrenome').val(""); 
        $('#empresa').val(""); 
        $('#profissao-id').val(""); 
        $('#salario').val(""); 
        $('input[name="sexo"]:checked').val(""); 
    }
    });


        }); 
    });