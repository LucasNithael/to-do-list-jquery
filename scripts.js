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
        //debugger;
        time = new Date();
        // quero o dia e a hora
        time = time.toLocaleString();

        section = `
        <section class="task-section">
            <p class="text-task">${text}</p>
            <div class="time-task">${time}</div>
            <div class="done-task">
                <input type="checkbox" id="id_done"/>
                <label for="id_done">Done</label>
            </div>
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
    
})