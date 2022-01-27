jQuery(document).ready(function($){
    
    //FIXED HEADER
    window.onscroll = function (){
        // HEADER
        let alternative = $('#header.nav-alternative')
        if(window.pageYOffset > 100){
            $('#header').removeClass("nav-primary")
            $('#header').removeClass("transparent")
            $('#header').addClass("nav-secondary")
            $('#header').addClass("active")

            $('.navbar').removeClass('navbar-dark')
            $('.navbar').addClass('navbar-light')
        // HEADER

        // SCROLL
        $('#btn-scroll').css("display", "block");
        // SCROLL

        }else{
            // HEADER
            $('#header').addClass("transparent")
            let y = $('#header.transparent')
            if(y.length > 0){
                
                $('#header').removeClass("nav-secondary")
                $('#header').addClass("nav-primary")
                
                let x = $('.navbar-toggle')
                // let z = $('.nav-primary')
                
                if(x.length > 0){
                    if(x[0].attributes['aria-expanded'].value == 'false'){
                        $('#header').removeClass("active")
                        $('#header').removeClass("expandida")
                    }
                    if(x.length != 0 && x[0].attributes['aria-expanded'].value == 'false' && alternative.length == 0){
                        
                        $('.navbar').addClass('navbar-dark')
                        
                        $('.navbar').removeClass('navbar-light')
                        $('#header').removeClass("active")
                    }
                }else{
                    $("#header").removeClass("active")
                }
            }
            // END === HEADER

            //SCROLL
            $('#btn-scroll').css("display", "none");
            // SCROLL
        }
    }
    
    //DEIXANDO NAVBAR ATIVA AO CLICAR NO NAVTOGGLE
    $('#header button').click(function (){
        let x = $('#bs-example-navbar-collapse-1')
        let alternative = $('#header.nav-alternative')
       
        // alert(x[0].attributes['aria-expanded'].value)
       
        if(x[0].attributes['aria-expanded'] == null || x[0].attributes['aria-expanded'].value == 'false'){
            $('#header').addClass("expandida")
            $('#header').addClass('active')
            $('.navbar').removeClass('navbar-dark')
            $('.navbar').addClass('navbar-light')
        }else{

            let y = $('#header.transparent')
            if(y.length > 0){
                if(x[0].attributes['aria-expanded'].value == 'false' && alternative.length == 0){
                    $('.navbar').addClass('navbar-dark')
                    $('.navbar').removeClass('navbar-light')
                }
            }else{
                $('.navbar').addClass('navbar-light')
                $('.navbar').removeClass('navbar-dark')
            }
            if(window.pageYOffset <= 100){
                $('#header').removeClass("expandida")
                $('#header').removeClass("active")
            }
            
            
        }
    });


    // SCROLL CLICK
    $('#btn-scroll').click(function () {
      $(document).scrollTop(0)
    });
    // SCROLL CLICK

    //RECUPERAR SENHA  -- HIDDEN LOGIN FORM -- SHOW RECOVERY PASSWORD FORM
    $('#btn-esqueceusenha').click(function() {
        $('#div-login').hide();
        $('#div-recpassword').show();
    });
    //LOGIN SHOW -- SHOW LOGIN FORM -- HIDDEN RECOVERY PASSWORD FORM
    $('#btn-voltarlogin').click(function() {
        $('#div-login').show();
        $('#div-recpassword').hide();
    });

    //CONTROLANDO FORM DE CADASTRO
    $('#btn-fornecedor').click(function(){
        $('#fornecedor-cliente').hide();
        $('#form-cadastrar').show();
        $('#inp-forn-cli').val('Sou fornecedor');
    });
    $('#btn-cliente').click(function(){
        $('#fornecedor-cliente').hide();
        $('#form-cadastrar').show();
        $('#inp-forn-cli').val('Sou cliente');
    });

    $('#btn-voltarcadastro').click(function(){
        $('#fornecedor-cliente').show();
        $('#form-cadastrar').hide();
        $('#inp-forn-cli').val('');
    });
    
    
});