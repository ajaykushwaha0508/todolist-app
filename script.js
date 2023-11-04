let input = document.getElementById("input-todo");
let addItem = document.getElementById("add-todo");
let listStart = document.getElementById("list-start");
let remove = document.getElementsByClassName("remove"); 

let x = 1;
addItem.addEventListener('click',()=>{
    const  newtodo = input.value;
     var addthis = `<div class="list-item"><p>${newtodo}</p><img class="remove" id=${"r"+ x++} src="./media/remove.png"></div>` 
     input.value = "";
     if(Number(newtodo)!= 0){ 
    listStart.insertAdjacentHTML('afterbegin',addthis);
    for(let x of remove){
        x.addEventListener('click' , ()=>{
            console.log('Ajay');
            listStart.removeChild(document.getElementById( x.getAttribute("id")).parentElement , "");
        })}
    }else{
        alert("The input field is blank.");
    } 
})


 