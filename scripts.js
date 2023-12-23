$(document).ready(function(){
    // load task local
    //loadTasks();

    $('#btn-add-task').click(function(){
        text = $('#input-task-text input').val();

        var sections = $('section');

        for (const section of sections) {
            var sectionText = $(section).find('.text-task').text();

            if (sectionText == text) {
                alert('Task already exists');
                return false;
            }
        }

        if (text == '') {
            alert('taks is empty');
        } 
        else {
            makeTask(text);
        }

    })
    
    function makeTask(text){
        section = `
        <section>
            <div class="text-task">${text}</div>
        </section>
        
        `;
        
        $('article').children().first().after(section);
    }
    
})