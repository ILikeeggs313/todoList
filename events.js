

// makeTeal.onclick = function(){
//     h1.style.color = 'cyan';
// }
// document.addEventListener("DOMContentLoaded", function(){
//     console.log('Dom contend loaded');
// //     const h1 = document.querySelector('h1');
// // function makeBody(color){
// //     document.body.style.background = color;
// // }
// // const makeViolet = document.querySelector('#violet');
// // makeViolet.addEventListener("dblclick", function(){
// //     makeBody('violet');
// // });
// // makeViolet.addEventListener('click', function(){
// //     h1.style.color = 'cyan';
// // });
// })
// window.addEventListener('load', function(){
//     console.log('fully loaded');
// })

// const p = document.querySelector('p');
// p.addEventListener('click', function(event){
//     console.log(event.type);
// })
// p.addEventListener('mousedown', function(event){
//     console.log(event.type);
// })
// p.addEventListener('mouseover', function(event){
//     console.log(event.type);
// })
// document.addEventListener('mousemove', function(e){
//     // console.log(event);
//     const r = Math.round(e.pageX * 255 / window.innerWidth);
//     const b = Math.round(e.pageY * 255 /  window.innerHeight);
//     const color = `rgb(0, ${r}, ${b})`;
//     document.body.style.backgroundColor = color;
//     return color;
// });
// window.innerHeight 
// window.innerWidth   

// e.x 
//  ----
//  innerW 
// const body = document.querySelector('body');
// body.addEventListener('mousemove', function(e){
//     x = e.offsetX;
//     y = e.offsetY;
//     let color = `rgb(${x}, ${y}, ${x - y})`;
//     body.style.backgroundColor = color;
//     return color;
// });

// const form = document.querySelector('#monkeyform');
// form.addEventListener('submit', function(e){
//     e.preventDefault();
//     alert("You submitted it the form");
// })

// document.querySelector('a').addEventListener('click',function(evt){
//     evt.preventDefault();
//     alert('No google for you');
// });

// document.querySelector('input[type = checkbox]').addEventListener('click',
// function(event){
//     event.preventDefault();
//     alert('No checking that box');
// });

// const form = document.querySelector('#logocreator');
// const brandInput = document.querySelector('input[name = "Brandname"]');
// const colorInput = document.querySelector('input[name = "Brandcolor"]');
// const fontInput = document.querySelector('input[name = "Brandsize"]');
// const results = document.querySelector('#result');
// form.addEventListener('submit', function(e){
//     e.preventDefault();
//     const newLogo = 
//     makeLogo(brandInput.value, 
//         colorInput.value, 
//         fontInput.value);
//     results.appendChild(newLogo);
// });

// function makeLogo(text, color, size){
//    const logo = document.createElement('h2');
//    logo.innerText = text;
//    logo.style.color = color;
//    logo.style.fontSize = size + 'px'; //font size will not work since we put fontsize as the number.

//    return logo;
// }
// document.addEventListener('keydown', function(e){
//     // console.log("Key pressed!");
//     console.log(e.key);
// })

// const removeFriend = document.querySelectorAll('li button');
// for(let btn of removeFriend){
//     btn.addEventListener('click', function(e){
//         e.target.parentElement.remove();
//     })
// };
// const form = document.querySelector('#add-friend');
// const input = document.querySelector('#first-name');
// const friendList = document.querySelector('#friend-list');
// form.addEventListener('submit', function(e){
//     e.preventDefault();
//     console.log(input.value);
//     const newFriend = document.createElement('li');
//     const removeBtn = document.createElement('button');
//     removeBtn.innerText = 'Unfriend';
//     // removeBtn.addEventListener('click', function(e){
//     //     e.target.parentElement.remove();
//     // })

//     newFriend.innerText = input.value;
//     newFriend.appendChild(removeBtn);
//     input.value = '';
//     friendList.appendChild(newFriend);

    // select the input and append it
// });





//add, remove buttons on friends
// const form = document.querySelector('#add-friend');
// const input = document.querySelector('#first-name');
// const friendList = document.querySelector('#friend-list');
// friendList.addEventListener('click', function(e){
//     if(e.target.tagName === 'BUTTON'){
//         e.target.parentElement.remove();
//     }
//     else if(e.target.tagName === "LI"){
//         e.target.classList.add('best-friend');
//         const heart = document.createElement('span');
//         heart.innerHTML = '&hearts;';
//         e.target.prepend(heart);
//     }
// });


// form.addEventListener('submit', function(e){
//     e.preventDefault();
//     console.log(input.value);
//     const newFriend = document.createElement('li');
//     const removeBtn = document.createElement('button');
//     removeBtn.innerText = 'Unfriend';
//     newFriend.innerText = input.value;
//     newFriend.appendChild(removeBtn);
//     input.value = '';
//     friendList.appendChild(newFriend);

//     //select the input and append it
// });

//whichever one we click on is our best friend
const ul = document.querySelector("#cars");
ul.addEventListener('click', function(e){
    console.log(e.target.getAttribute('data-year'));
    console.log(e.target.dataset);
    e.target.dataset.sold = 'true';
})