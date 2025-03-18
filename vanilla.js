        document.addEventListener("DOMContentLoaded", () => {
            const taskInput = document.getElementById("taskInput");
            const addTaskBtn = document.getElementById("addTaskBtn");
            const taskList = document.getElementById("taskList");

            function addTask() {
                const taskText = taskInput.value.trim();
                if (taskText === "") return;

                const li = document.createElement("li");
                li.textContent = taskText;
                li.addEventListener("click", () => {
                    li.classList.toggle("completed");
                });

                const deleteBtn = document.createElement("button");
                deleteBtn.textContent = "X";
                deleteBtn.classList.add("delete");
                deleteBtn.addEventListener("click", () => {
                    li.remove();
                });
                li.appendChild(deleteBtn);
                taskList.appendChild(li);
                taskInput.value = "";
            }

            addTaskBtn.addEventListener("click", addTask);
            taskInput.addEventListener("keypress", (event) => {
                if (event.key === "Enter") addTask();
            });
        });