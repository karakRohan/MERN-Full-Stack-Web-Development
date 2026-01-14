// console.log(document.getElementsByTagName("p"));
// document.getElementsByTagName("p")[1].innerText="lorem";


// console.log(document.getElementById("mainImg"));
// console.log(document.getElementById("mainImg").id);
// console.log(document.getElementById("mainImg").tagName);
// console.log(document.getElementById("mainImg").src);


// console.log(document.getElementsByClassName("oldImg"));
// let smallImages=document.getElementsByClassName("oldImg");
// for(let i=0;i<smallImages.length;i++){
//     smallImages[i].src="Assets/Spider-Man.png";
//     console.log(`value of image no${i} is changed`);
// };


// console.dir(document.querySelector("p"));//seelect first p element
// console.dir(document.querySelector("#description"));//select first element with id= description
// console.dir(document.querySelector(".oldImg"));//select first element with class= oldImg
// console.dir(document.querySelector("div a"));//select first div with first a tag
// console.dir(document.querySelectorAll("p"));//select all p elements


// console.log(document.querySelector("p").innerText);//shows the visible text contained in a node
// console.log(document.querySelector("p").textContent);//shows all full text,also hiddens
// console.log(document.querySelector("p").innerHTML);//shows the full markup code

// let para=document.querySelector("p");
// // para.innerText="I am Peter Parker";
// para.innerHTML=`<b> ${para.innerText} </b>`;


// let img=document.querySelector("img");
// console.log(img.getAttribute("id"));
// img.setAttribute("id","spiderImg");
// console.log(img.getAttribute("id"));
// img.setAttribute("src","Assets/Amazing-spiderman.jpg");


// let haeding=document.querySelector("h1");
// haeding.style.color="red";
// haeding.style.backgroundColor="purple";


// let heading = document.querySelector("h1");
// heading.classList.add("green");
// heading.classList.add("wavy");
// heading.classList.remove("green");
// console.log(heading.classList.contains("green"));//check if the classexists or not
// console.log(heading.classList.contains("wavy"));
// console.log(heading.classList);
// console.log(heading.classList.toggle("green"));//add or remove a certain class
// console.log(heading.classList);
 

// let h4=document.querySelector("h4");
// console.log(h4.parentElement);
// console.log(h4.children);
// let ul=document.querySelector("ul");
// console.log(ul.children);
// console.log(ul.children[0]);
// console.log(ul.children[1]);
// console.log(ul.children[2]);
// let image=document.querySelector("img");
// console.log(image.previousElementSibling);
// console.log(image.nextElementSibling);
// image.nextElementSibling.style.color="red";


// let btn=document.createElement("button");
// console.dir(btn);
// btn.innerText="click me";
// let pubInfo=document.querySelector(".pubInfo");
// pubInfo.appendChild(btn);//add a child node to the end of a parent node
// pubInfo.append("Hello there")//insert element or string at the end of the node
// pubInfo.prepend("Hello World");//insert element or string at the beginning of the node


// let btn=document.createElement("button");
// btn.innerHTML="click me";
// let para=document.querySelector("p");
// para.insertAdjacentElement("beforebegin",btn);//add before the beginning of the node
// para.insertAdjacentElement("afterbegin",btn);//add at the beginning of the node
// para.insertAdjacentElement("beforeend",btn);//add at the end of the node
// para.insertAdjacentElement("afterend",btn);//add after the end of the node

// Practice Qs :-
// 1)
// let para=document.querySelector("p");
// para.remove();
// let para1=document.createElement("p");
// para1.innerText="Hey I am Red";
// para1.style.color="red";
// document.querySelector("body").append(para1);

// 2)
// let header3=document.createElement("h3");
// header3.innerText="I am Blue h3";
// header3.style.color="blue";
// document.querySelector("body").append(header3);

// 3)
// let box=document.createElement("div");
// box.style.backgroundColor="pink";
// box.style.border="2px solid black";
// let header1=document.createElement("h1");
// header1.innerText="I am in a div";
// let para2=document.createElement("p");
// para2.innerText="ME Too";
// box.append(header1);
// box.append(para2);
// document.querySelector("body").append(box); 