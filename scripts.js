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
        time = new Date();
        // quero o dia e a hora
        time = time.toLocaleString();

        section = `
        <section class="task-section">
            <p class="text-task">${text}</p>
            <div class="time-task">${time}</div>
        </section>
        
        `;
        
        $('article').children().first().after(section);
    }
    
})