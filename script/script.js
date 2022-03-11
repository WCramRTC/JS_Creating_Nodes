let btn = document.getElementById("btn");
let display = document.getElementById("display");
let txt = document.getElementById("txt-user");

btn.addEventListener('click', function() {

    var div = document.createElement("div");
    div.classList.add("blog-post");

    var title = document.createElement("h3");
    var titleNode = document.createTextNode(txt.value);
    title.style.color = "red";
    title.appendChild(titleNode);
    title.classList.add("title");

    

    div.appendChild(title);


    
    // tag.appendChild(text);
    
    var element = document.getElementById("display");
    element.appendChild(div);
})