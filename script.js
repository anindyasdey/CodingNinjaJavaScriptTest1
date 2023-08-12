var toDoList = document.getElementById("theList"); 

            li0 = document.getElementById("num");
            li0.innerHTML = "Total Tasks: " + String(toDoList.childElementCount - 1); //Shows total number of tasks 

            //Function to add new Tasks
            function addItem() 
            {   
                var task = document.getElementById("inputTask");
                if (task.value != "")
                {   
                    var li = document.createElement("li");
                    var check = document.createElement("INPUT");
                    var cross = document.createElement("button");

                    var div1 = document.createElement("div");
                    var div2 = document.createElement("div");
                    var div3 = document.createElement("div");

                    let x ="a" + String(Math.floor((Math.random() * 100000) + 1)); // Creates a random ID for a task

                    li.setAttribute('id', x);
                    li.setAttribute("class","parent");  

                    check.setAttribute('type',"checkbox");
                    cross.setAttribute("class","glyphicon glyphicon-remove");
                    

                    div1.setAttribute("class","float-left");
                    div2.setAttribute("class","float-right");
                    div3.setAttribute("class","float-left");

                    let text = document.createTextNode(task.value);
                    
                    cross.setAttribute("onclick","removeItem(" + x + ")");
                    
                    task.value="";

                    div1.appendChild(check);
                    div2.appendChild(text);
                    div3.appendChild(cross);

                    li.appendChild(div1);
                    li.appendChild(div2);
                    li.appendChild(div3);

                    toDoList.appendChild(li);
                    li0.innerHTML = "Total Tasks: " + String(toDoList.childElementCount - 1);

                }
            
            }

            //Function to delete an existing task
            function removeItem(item)
            {  
               toDoList.removeChild(item);
               li0.innerHTML = "Total Tasks: " + String(toDoList.childElementCount - 1);

            }