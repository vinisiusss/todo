let inputs = document.getElementById("inp");
let text = document.querySelector(".text");

let dat = new Date();
let date = dat.toLocaleDateString("de-RU");

function Add(){
    if(inputs.value == ""){
        alert("Задача не написана")
    }else{
        let newEle = document.createElement("ul");
        newEle.innerHTML=`${inputs.value} <i class="x">X</i>`;
        text.appendChild(newEle);
        inputs.value="";
        newEle.querySelector("i").addEventListener("click" , remove);
        function remove(){
            newEle.remove()
        }
    }
}








document.getElementById("button-o").onclick = function ss(){
    
    document.getElementById("spisok").textContent = "";
    document.getElementById("spisok").innerHTML = "<p>Список пуст</p>"
}   