$(function(){
    //validaçao do formulario
    $("#formLogin").validate({
        rules : {
            inputEmail:{
                required:true,
                email:!0
            },
            inputSenha:{
                required:true,
                minlength:3
            }                                
        },
        messages:{
            inputEmail:{
                required:"É necessário informar um email",
                email:"Informe um email válido"
            },   
            inputSenha:{
                required:"Por favor, informe sua senha",
                minlength:"A senha deve ter pelo menos 3 caracteres"
            },
        },
        submitHandler: function(form) {
            window.alert('Enviando form');
            //form.submit();
        }
    });

});