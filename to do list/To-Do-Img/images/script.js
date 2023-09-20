const inputBox = document.getElementById("input-box")
const listcontainer = document.getElementById("list-container")

function AddTask(){
    if(inputBox.value === '')
    {
        alert("You must write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }
    inputBox.value = "";
    savedata();
}
listcontainer.addEventListener('click',(e)=>{
            if(e.target.tagName === "LI"){
                e.target.classList.toggle("checked");
                savedata();
            } 
            else if(e.target.tagName === "SPAN"){
                e.target.parentElement.remove();
                savedata();
            }  
},false);

function savedata(){
    localStorage.setItem("data",listcontainer.innerHTML);
}
function showList(){
    listcontainer.innerHTML = localStorage.getItem("data")
}
showList();