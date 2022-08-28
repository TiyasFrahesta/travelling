let LastImage = document.getElementsByClassName("last-img")[0];
let MidImage = document.getElementsByClassName("mid-img")[0];
let BirdImage = document.getElementsByClassName("bird-img")[0];
let FocusImage = document.getElementsByClassName("focus-img")[0];
let Leaf = document.getElementsByClassName("leaf-img")[0];
let Travelling = document.querySelector("#landing h1");
let Button = document.querySelector(".btn");

window.addEventListener('scroll', function () {
    let value = window.scrollY;
    BirdImage.style.left = value * 0.9 + 'px';
    BirdImage.style.top = value * 0.7 + 'px';
    LastImage.style.top = value * 0.7 + 'px';
    MidImage.style.top = value * 0.3 + 'px';
    FocusImage.style.top = value * 0 + 'px';
    Leaf.style.right = value * 1 + 'px';
    Travelling.style.right = value * 0,5 + 'px';
    Button.style.margintop = value * 0,1 + 'px';
});
