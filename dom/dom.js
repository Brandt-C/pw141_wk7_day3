//  The DOM -- Document Object Model

/*
By manipulating the dom we can modify HTML using javascript.

We can add, change, hide, remove elements on the page.  Because we're on the client side,
this all happens WITHOUT refreshing the page!
*/

console.log(document);

console.log(document.getElementsByTagName('h2')[0].id);
console.log(typeof document.getElementsByTagName('h2'));
console.log(document.getElementById("one"));
console.log(document.querySelector("#one"));
console.log(document.querySelectorAll('h2'));


setTimeout(() => {document.getElementById('text').innerHTML = "JAVASCRIPT HAS TAKEN OVER!!"}, 6000)

setTimeout(() => {document.getElementById('one').innerHTML = "JAVASCRIPT HAS TAKEN OVER!!"}, 3000)

// eventListeners

// check out the link in our channel to all of the html dom events

//  an event listener is a "trigger" that we can set with JS to do something 
//  once the "trigger" has been activated  we can act

let changeColor = () => {
    let headOne = document.getElementById('text');

    if (!headOne.className) {
        headOne.className = 'color-change';
    } else if (headOne.className === 'color-change'){
        headOne.className = 'color-change1';
    } else if (headOne.className === 'color-change1'){
        headOne.className = 'color-change2';
    } else if (headOne.className === 'color-change2'){
        headOne.className = '';
    };
    console.log(headOne.className);
}

// Ternary operator syntax -->  condition ? action : other action

//select the button

let colorButton =  document.getElementById('color-button');
console.log(colorButton);
colorButton.addEventListener('click', changeColor);

// We can add things to the page with JS

// simple adding method   --->  document.element.append()

let newButton = document.createElement('button');
newButton.innerHTML = 'JAVASCRIPT btn';
document.body.append(newButton);

let addText = () => {
    let newText = document.createElement('h3');
    newText.innerHTML = "Padawans are young Jedi Dylan is trying to turn to the dark side";
    newText.className = 'color-change2';
    document.body.append(newText)
}
newButton.addEventListener('mouseover', addText);

// let's talk about adding a form!

let formSubmit = (event) => {
    event.preventDefault();
    console.log(event);

    let fname = event.target[0].value
    let lname = event.target[1].value


    console.log('our form data:', fname, lname);
    // console.log(document.querySelector('#first-name').value)

    form.reset();
    let newName = document.createElement('h4');
    newName.innerHTML = "One of our great students: " + fname + ' ' + lname;
    form.after(newName);

}

let form = document.getElementById('nameForm');
console.log(form)
form.addEventListener('submit', formSubmit)

//event.target[0].value
