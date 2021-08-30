//TASK 1
const nodeList = document.querySelectorAll('ul#list>li');
console.log('OUTPUT FROM NODELIST')
const outputFromNode = [nodeList[0].innerHTML,nodeList[nodeList.length-1].innerHTML,nodeList[1].innerHTML, nodeList[3].innerHTML, nodeList[2].innerHTML];
console.log(outputFromNode);
const ul = document.getElementById('list');
console.log('OUTPUT FROM HTMLCollection')
const outputFromCol = [
    ul.firstElementChild.innerHTML,
    ul.lastElementChild.innerHTML,
    ul.children[1].innerHTML,
    ul.children[3].innerHTML,
    ul.children[2].innerHTML
];
console.log(outputFromCol)
//TASK 2
const bigHeader = document.querySelector('#task2>h1');
bigHeader.style.cssText = `
    margin: 0px 10px;
    background-color: lightgreen;
    font-size: 2em;
    font-weight: 600;
`;

const paragraphs = document.querySelectorAll('div#myDiv>p');
paragraphs[0].style.fontWeight = '600';
paragraphs[1].style.color = 'red';
paragraphs[2].style.textDecoration = 'underline';
paragraphs[3].style.fontStyle = 'italic';

const ulList = document.querySelector('ul#myList');
ulList.style.cssText = `
    display:flex;
    flex-direction:row;
    margin-left:50px;
`;

const span = document.querySelector('#task2>span');
span.hidden = true;
//TASK 3
const liveBut = document.querySelector('button#live-button');
const messageBox = document.querySelector('div.mes');

liveBut.addEventListener("mouseover", function(){
    messageBox.insertAdjacentHTML('afterbegin', `<p>"Mouse on me!"</p>`);
});

liveBut.addEventListener("mouseout", function(){
    messageBox.insertAdjacentHTML('afterbegin', `<p>"Mouse is not on me!"</p>`);
});

liveBut.addEventListener("click", function(){
    messageBox.insertAdjacentHTML('afterbegin', `<p>"I was pressed!"</p>`);
});

//TASK 4
const articles = document.querySelector('div.articles');
const appeal = document.querySelector('.text-area textarea');
const sendButton = document.querySelector('.button-send button');

function insertPattern(newChild, parent, clas){
    newChild.classList.add(clas);
    parent.append(newChild);
}

sendButton.addEventListener("click", function() {
    if(appeal.value){
        const newAppeal = document.createElement(`div`);
        insertPattern(newAppeal, articles, 'article');
        const p = document.createElement(`p`);
        insertPattern(p, newAppeal, 'p')
        const bottomEl = document.createElement(`div`);
        insertPattern(bottomEl, newAppeal, 'bottom-el');
        const date = document.createElement(`div`);
        insertPattern(date, bottomEl, 'date');
        const nick = document.createElement(`div`);
        insertPattern(nick, bottomEl, 'nick');

        const dt = new Date()
        const curDate = `${dt.getDate() + '.' + (dt.getMonth()+1) + '.' + dt.getFullYear()+ ', ' + dt.getHours() + ':' + dt.getMinutes()}`;
        console.log(curDate)

        date.innerHTML = curDate;
        nick.innerHTML = "newUser";
        p.textContent = appeal.value;
    }
    appeal.value = "";
});

//BUTTONS
const t1Button = document.querySelector('button#t1');
const t2Button = document.querySelector('button#t2');
const t3Button = document.querySelector('button#t3');
const t4Button = document.querySelector('button#t4');

const task1 = document.querySelector('div#task1');
const task2 = document.querySelector('div#task2');
const task3 = document.querySelector('div#task3');
const task4 = document.querySelector('div#task4');

t4Button.addEventListener("click", function() {
    t4Button.classList.toggle('t-pressed');
    task4.classList.toggle('task');
    task4.classList.toggle('task-hide');
});

t3Button.addEventListener("click", function() {
    t3Button.classList.toggle('t-pressed');
    task3.classList.toggle('task');
    task3.classList.toggle('task-hide');
});

t2Button.addEventListener("click", function() {
    t2Button.classList.toggle('t-pressed');
    task2.classList.toggle('task');
    task2.classList.toggle('task-hide');
});

t1Button.addEventListener("click", function() {
    t1Button.classList.toggle('t-pressed');
    task1.classList.toggle('task');
    task1.classList.toggle('task-hide');
});
