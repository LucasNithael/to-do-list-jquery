$(document).ready(function(){
    // load task local
    //loadTasks();

    // $('#add-task svg').click(function(){    
    //     $('.form').toggle('slow');
    // });


    // $('#open-close img').click(function(){    
    //     $('#form-add-task').toggle('slow');
    //     if ($(this).attr('src') === 'svg/open.svg') {
    //         $(this).attr('src', 'svg/close.svg');
    //     } else {
    //         $(this).attr('src', 'svg/open.svg');
    //     }
    // })

    $('#btn-add-task').click(function(){
        text = $('#input-task-text input').val();
        $('article').append(makeTask(text))

    })

    function makeTask(text){
        section = `
        <section>
            <div class="text-task">${text}</div>
        </section>
        
        `;

        return section;
    }
    
})