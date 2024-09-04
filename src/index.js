import foodImage from './food-pic01.jpg';
import styles from './style-home.css';

import {aboutContent} from './about.js';
import {menuContent} from './menu.js';

const fixedContent = (function(){
    const navBar = document.querySelector('nav');
    const headerEle = document.querySelector('header')
    const restaurantName = document.createElement('div');

    restaurantName.textContent = "Odin's Feast Fiasco";
    headerEle.insertBefore(restaurantName, navBar);
    const homeBtn = document.createElement('button');
    homeBtn.classList.add('home-page');
    homeBtn.textContent = 'ODIN SYNTAX';
    const menuBtn = document.createElement('button');
    menuBtn.classList.add('menu-page');
    menuBtn.textContent = 'MENU';
    const aboutBtn = document.createElement('button');
    aboutBtn.classList.add('about-page');
    aboutBtn.textContent = 'ABOUT';

    navBar.appendChild(homeBtn);
    navBar.appendChild(menuBtn);
    navBar.appendChild(aboutBtn);

    //footer 
    const footerEle = document.querySelector('footer');
    const copyright = document.createElement('div');
    const copyIcon = document.createElement('i');
    const normalDiv = document.createElement('div');
    copyIcon.classList.add('&copy');
    copyright.textContent = 'copyright 2024';
    copyright.appendChild(copyIcon);
    normalDiv.textContent = 'done by The Saint @Michael';

    footerEle.append(copyright, normalDiv);
})()


const mainContent = (function(){
    const restaurantContent = document.querySelector('#content');

    const mainPage = ()=>{
        restaurantContent.textContent = '';
        const contentHeading = document.createElement('div');
        contentHeading.textContent = "The Odin's Diner: Where Coding Meets Culinary!";
        const imageTag = document.createElement('img');
        const contentPara = document.createElement('p');
        contentPara.textContent = "Odin's Code & Crunch: Debug Your Hunger";
        const contentSubPara = document.createElement('p');
        contentSubPara.textContent = "Unleash your inner coder with Odin's Code & Crunch! Dive into “Syntax-Savvy Sandwiches” and “Algorithmic Appetizers,” but watch out for our “Syntax Error Sliders”—they're so hilariously addictive, they might throw your diet into an infinite loop!";
        imageTag.src = foodImage;

        restaurantContent.append(contentHeading, imageTag, contentPara, contentSubPara);
        const homeBtn = document.querySelector('.home-page');
        homeBtn.style = "padding-top: 0px; padding-bottom: 14px; color: #b91c1c";
    }

    const homeBtn = document.querySelector('.home-page');
    const menuBtn = document.querySelector('.menu-page');
    const aboutBtn = document.querySelector('.about-page');

    homeBtn.addEventListener('click', ()=>{
        mainPage();
    })
    menuBtn.addEventListener('click', ()=>{
        menuContent();
    })

    aboutBtn.addEventListener('click', ()=>{
        aboutContent();
    })

    addEventListener('load', ()=>{
       mainPage();
    });

})()


const navBarButtons = (function(){
    const navBar = document.querySelector('nav');
    const buttonList = document.querySelectorAll('button');

    navBar.addEventListener('click', (e)=>{
        if(!e.target.classList) return;
        e.target.style = "padding-top: 0; padding-bottom: 14px ; color: #b91c1c";
        buttonList.forEach((btn)=>{
            if(btn === e.target) return;
            btn.style = "padding:7px; color: white";
        })
    })
})()