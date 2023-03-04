$('#form').submit(function(e){ 
        e.preventDefault(); 
    var u_nome = $('#nomeSobrenome').val(); 
    var u_empresa = $('#empresa-id').val(); 
    var u_profissao = $('#profissao-id').val(); 
    var u_salario = $('#salario').val(); 
    var u_sexo = $('input[name="sexo"]:checked').val();

                 
        $.ajax({ 
            url: 'http://localhost/salary-search/ajax/cadastra.php', 
            method: 'POST', 
            data: {nome:u_nome, empresa: u_empresa, profissao: u_profissao, salario: u_salario, sexo: u_sexo}, 
            dataType: 'json' 
        }).done(function(result){ 
    //          console.log(result)

    // getSalary(u_empresa, u_profissao, u_sexo);

    $.ajax({ 
                url: 'http://localhost/salary-search/ajax/getMediaSalarial.php', 
                method: 'POST', 
                data: {empresa: u_empresa, profissao: u_profissao, sexo: 'homem' }, 
                dataType: 'json' 
            }).done(function(resultado){ 
                 console.log(resultado)
                
        var json = resultado;

        document.getElementById("homens").innerHTML = "Homens: R$"+resultado;

        $.ajax({ 
                    url: 'http://localhost/salary-search/ajax/getMediaSalarial.php', 
                    method: 'POST', 
                    data: {empresa: u_empresa, profissao: u_profissao, sexo: 'mulher' }, 
                    dataType: 'json' 
                }).done(function(resultado){ 
                     console.log(resultado)
                    
            var json = resultado;
    
            document.getElementById("mulheres").innerHTML = "Mulheres: R$"+resultado;
    
            
    
            new swal({
                title: "Obrigado!",
                text: "Dados preenchidos com sucesso!",
                icon: "success",                            
            })
        
            .then((confirm) => {
            if (confirm) {
                $('#nomeSobrenome').val(""); 
                $('#empresa-id').val(""); 
                $('#profissao-id').val(""); 
                $('#salario').val(""); 
                $('input[name="sexo"]:checked').val(""); 
                
            } else {
                $('#nomeSobrenome').val(""); 
                $('#empresa-id').val(""); 
                $('#profissao-id').val(""); 
                $('#salario').val(""); 
                $('input[name="sexo"]:checked').val(""); 
            }
            });
        
                });
    
            }); 
            
    
        }); 
    });


    $('#form-escondido').submit(function(e){ 
            e.preventDefault(); 
        var u_empresa = $('#empresa-cadastro').val(); 

    
                     
            $.ajax({ 
                url: 'http://localhost/salary-search/ajax/novaEmpresa.php', 
                method: 'POST', 
                data: {empresa: u_empresa}, 
                dataType: 'json' 
            }).done(function(result){ 
                 console.log(result)
                
        
        new swal({
            title: "Ok!",
            text: "Cadastrado!",
            icon: "success",                            
        })
    
        .then((confirm) => {
        if (confirm) {
            $('#empresa-cadastro').val(""); 
            empresas();
            
        } else {
            $('#empresa-cadastro').val(""); 
        }
        });
    
    
            }); 
        });


        $('#form-escondido2').submit(function(e){ 
                e.preventDefault(); 
            var u_profissao = $('#profissao-cadastro').val(); 
    
        
                         
                $.ajax({ 
                    url: 'http://localhost/salary-search/ajax/novaProfissao.php', 
                    method: 'POST', 
                    data: {profissao: u_profissao}, 
                    dataType: 'json' 
                }).done(function(result){ 
                     console.log(result)
                    
            
            new swal({
                title: "Ok!",
                text: "Cadastrado!",
                icon: "success",                            
            })
        
            .then((confirm) => {
            if (confirm) {
                $('#profissao-cadastro').val(""); 
                profissao();
                
            } else {
                $('#profissao-cadastro').val(""); 
            }
            });
        
        
                }); 
            });





function starter_pack()
{
    empresas();
    profissao();

}


async function empresas() {
    clearSelect2();
    
                     
        $.ajax({ 
            url: 'http://localhost/salary-search/ajax/getEmpresas.php', 
            method: 'GET', 
            data: {}, 
            dataType: 'json' 
        }).done(function(result){ 
    //          console.log(result)
            
    var json = result;
    // console.log(json)

    for (var i = 0; i < json.length; i++) {
        $('#empresa-id').prepend('<option value="'+ json[i].idtb_empresa + '">'+json[i].nome_empresa+'</option>');
    }

        }); 

}
        

    async function profissao() {
        clearSelect1();
    
                     
            $.ajax({ 
                url: 'http://localhost/salary-search/ajax/getProfissao.php', 
                method: 'GET', 
                data: {}, 
                dataType: 'json' 
            }).done(function(result){ 
        //          console.log(result)
                
        var json = result;

        for (var i = 0; i < json.length; i++) {
            $('#profissao-id').prepend('<option value="'+ json[i].idtb_profissao + '">'+json[i].nome_profissao+'</option>');
        }
    
            }); 
    }

        
function clearSelect1() {
        $('#profissao-id').empty();
        // $('#plano').prepend('<option value="0" selected>Selecione</option>');
    }


function clearSelect2() {
        $('#empresa-id').empty();
        // $('#plano').prepend('<option value="0" selected>Selecione</option>');
    }


function getSalary(empresa_u, profissao_u, sexo) {
    $.ajax({ 
                url: 'http://localhost/salary-search/ajax/getMediaSalarial.php', 
                method: 'POST', 
                data: {empresa: empresa_u, profissao: profissao_u, sexo: 'homem' }, 
                dataType: 'json' 
            }).done(function(resultado){ 
                 console.log(resultado)
                
        var json = result;

    
            }); 
}