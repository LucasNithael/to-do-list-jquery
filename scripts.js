$(document).ready(function(){
    // load task local
    //loadTasks();

    $('#add-task svg').click(function(){    
        $('.form').toggle('slow');
    });


    $('#open-close img').click(function(){    
        $('#form-add-task').toggle('slow');
        if ($(this).attr('src') === 'svg/open.svg') {
            $(this).attr('src', 'svg/close.svg');
        } else {
            $(this).attr('src', 'svg/open.svg');
        }
    })

    $('#btn-add-task').click(function(){
        text = $('#input-task-text input').val();
        time = deadlineFn($('#deadline').val())
        priority = $('input[name="prioridad"]:checked').val();

        console.log(time)

    })

    function makeTask(text, time, priority){
        section = `<section></section>`;
    }

    function deadlineFn(time){
        deadline = new Date(time);

        timenow  = new Date();

        differenceMS = deadline - timenow;

        differenceH = differenceMS / (1000 * 60 * 60);

        return Math.floor(differenceH);

        
    }
    
})