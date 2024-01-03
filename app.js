const inputBox = document.querySelector("#input-box")
const listContainer = document.querySelector("#list-container")
const btn = document.querySelector("button")

btn.addEventListener("click",()=>{
    addTask();
})

function addTask(){
    if(inputBox.value === ''){
        alert("Input some text.")
    }else{
        let li = document.createElement("li");
        li.innerText = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    inputBox.value = ""
    saveData()
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        console.dir(e.target)
        console.log(e.target)
        saveData();
    } 
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        // console.dir(e.target)
        // console.dir(e.target.tagName)
        saveData();
    }
},false)

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML)
}

function showData(){
    listContainer.innerHTML = localStorage.getItem("data")
}
showData();