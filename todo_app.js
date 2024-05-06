let input=document.querySelector("input");
let ul=document.querySelector("ul");
let btn=document.querySelector("button");


btn.addEventListener("click", function(){
    let li=document.createElement("li");
    let del=document.createElement("button");
    del.innerText="Delete";
    del.classList="delete";
    let val=input.value;
    li.innerText=val;
    input.value="";
    ul.append(li);
    li.append(del);
});

ul.addEventListener("click", function(event){
    if(event.target.nodeName=="BUTTON"){
        let par=event.target.parentElement;
        par.remove();
        console.log("Deleted");
    }
    // console.log("ul was clicked");
});