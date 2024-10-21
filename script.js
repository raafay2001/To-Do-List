document.querySelector('#add').onclick = function() {
    // validation for empty input
    if(document.querySelector('#newTask input').
    value.length == 0) {
        alert("Please Neter a task")
    }
    else {
        document.querySelector('#tasks').innerHTML
        += `
        <div class="task">
        <span id="taskname">
        ${document.querySelector('#newTask input').value}
        </span>
        <button class="delete">
        <i class="fas fa-trash"></i>
    </button>
    </div>
    
        `;

        // deleting a task
        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function() {
                this.parentNode.remove();
            }
        }

        //underline the task
        var tasks = document.querySelectorAll(".task");
        for(var i=0; i<tasks.length; i++){
            tasks[i].onclick = function() {
                this.classList.toggle('Completed');
            }
        }

        // clearing input field
        document.querySelector("#newTask input").value = "";
    }
}