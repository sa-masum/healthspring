//-------------------------------------------------------------
//-------------index
//-------------------------------------------------------------
let menu = document.querySelector('#menu_btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

//-------------------------------------------------------------
//-------------sign
//-------------------------------------------------------------
let box1 = document.querySelector('#box1');
let box2 = document.querySelector('#box2');
let signup = document.querySelector('#signup');
let login = document.querySelector('#login');
let display = document.querySelector('.dnone');
let forgot = document.querySelector('#forgot');
let forgotbox = document.querySelector('#forgotbox');

signup.onclick = () => {
    signup.style.opacity = 0.5;
    login.style.opacity = 1;
    box1.style.display = 'none';
    box2.style.display = 'block';
    forgotbox.style.display = 'none';
}
login.onclick = () => {
    signup.style.opacity = 1;
    login.style.opacity = 0.5;
    box1.style.display = 'block';
    box2.style.display = 'none';
    forgotbox.style.display = 'none';
}

forgot.onclick = () => {
    forgotbox.style.display = 'block';
    box1.style.display = 'none';
    box2.style.display = 'none';
}

//-------------------------------------------------------------
//-------------loggedin
//-------------------------------------------------------------

let dash = document.querySelector('#dashboard');
let prof = document.querySelector('#profile');
let doc = document.querySelector('#doctors');
let pat = document.querySelector('#patient');
let sched = document.querySelector('#schedule');

dash.onclick = () => {
    dash.style.opacity = 0.5;
    prof.style.opacity = 1;
    doc.style.opacity = 1;
    pat.style.opacity = 1;
    sched.style.opacity = 1;
}

prof.onclick = () => {
    dash.style.opacity = 1;
    prof.style.opacity = 0.5;
    doc.style.opacity = 1;
    pat.style.opacity = 1;
    sched.style.opacity = 1;
}

doc.onclick = () => {
    dash.style.opacity = 1;
    prof.style.opacity = 1;
    doc.style.opacity = 0.5;
    pat.style.opacity = 1;
    sched.style.opacity = 1;
}

pat.onclick = () => {
    dash.style.opacity = 1;
    prof.style.opacity = 1;
    doc.style.opacity = 1;
    pat.style.opacity = 0.5;
    sched.style.opacity = 1;
}

sched.onclick = () => {
    dash.style.opacity = 1;
    prof.style.opacity = 1;
    doc.style.opacity = 1;
    pat.style.opacity = 1;
    sched.style.opacity = 0.5;
}

//-------------------------------------------------------------
//-------------
//-------------------------------------------------------------