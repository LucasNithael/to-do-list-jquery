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
    
})