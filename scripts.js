$(document).ready(function(){

    $('#add-task svg').mouseenter(function(){
        
        $(this).css({
            'cursor': 'pointer',
            'background': 'lightgray'
        });


    });


    $('#add-task svg').mouseout(function(){
        
        $(this).css({
            'cursor': 'pointer',
            'background': 'white'
        });


    });

    $('#add-task svg').click(function(){    
        $('.form').toggle('slow');
    });


    $('#open-close img').click(function(){    
        $('#form-add-task').toggle('slow');
        var $formAddTask = $('#form-add-task');
        var $img = $(this);

        // Verifica o atributo src atual
        if ($img.attr('src') === 'svg/open.svg') {
            // Se for o SVG 'open.svg', altera para 'close.svg'
            $img.attr('src', 'svg/close.svg');
            $formAddTask.slideDown('slow');  // Ou use toggle se preferir
        } else {
            // Se for o SVG 'close.svg', altera para 'open.svg'
            $img.attr('src', 'svg/open.svg');
            $formAddTask.slideUp('slow');  // Ou use toggle se preferir
        }
    })
    
})