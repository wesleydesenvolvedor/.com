
    $(document).ready(function () { 
        var $cep = $("#cep");
        $cep.mask('00000-000', {reverse: true});
    });

    $("#Telefone").mask("(999) 99999-9999");



    $(document).ready(function() {
        $("#resposta").ajaxStart(function() {
            $(this).html("Mensagem sendo enviada, por favor aguarde...");
        });
        $("#form").submit(function() {
            var nome = $("#nome").val();
            var email = $("#email").val();
            var assunto = $("#assunto").val();
            var mensagem = $("#mensagem").val();
            $.post('enviar.php', {
                nome: nome,
                email: email,
                assunto: assunto,
                mensagem: mensagem,
                contato: true
            }, function(data) {
    
                if (data !== false) {
                    $("#resposta").html(data);
                    $("#form input").val(""); //limpa todos inputs do formulário
                    $("#form input[type = submit]").val("Enviar"); //redefine botão submit
                } else {
                    $("#nome").val("");
                    $("#email").val("");
                    $("#assunto").val("");
                    $("#mensagem").val("");
    
                }
    
            });
            return false;
        });
    });