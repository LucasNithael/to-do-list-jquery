$(document).ready(function(){
    // load task local
    var sectionsArray = [];
    loadTasks();
    //localStorage.clear();

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
            saveTasks();
        }

    })
    
    function makeTask(text){
        debugger;
        time = new Date();
        // quero o dia e a hora
        time = time.toLocaleString();

        section = `
        <section class="task-section">
            <p class="text-task">${text}</p>
            <div class="time-task">${time}</div>
            <div class="trash-task"><img src="svg/trash.svg" alt="trash" title="delete task"></div>
            <div class="edit-task"><img src="svg/pencil.svg" alt="edit" title="edit task"></div>
        </section>
        
        `;

        sectionsArray.push(section);
        $('article').children().first().after(section);
    }

    function saveTasks(){
        localStorage.setItem('tasks', JSON.stringify(sectionsArray));

    }

    function loadTasks(){
        var tasks = localStorage.getItem('tasks');
        if (tasks) {
            sectionsArray = JSON.parse(tasks);
            sectionsArray.reverse();
            $('article').children().first().after(sectionsArray.join(''));
        }
    }


    $('article').on('click', '.trash-task', function() {
        var section = $(this).closest('.task-section');
        var index = $('.task-section').index(section);

        // Remove a seção do array
        sectionsArray.splice(index, 1);

        // Atualiza o conteúdo do elemento article
        $('article').html(sectionsArray.reverse().join(''));

        // Salva as tarefas atualizadas
        saveTasks();
    });
    
})