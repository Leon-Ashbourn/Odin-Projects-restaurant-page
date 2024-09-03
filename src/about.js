import './style-about.css';


function aboutContent(){
    const mainContent = document.querySelector('#content');
    const aboutUs = document.createElement('div');
    const aboutUsHeading = document.createElement('div');
    const paraInfo = document.createElement('p');


    aboutUsHeading.textContent = 'About Us: Where Culinary Code Meets Gourmet Cuisine';
    paraInfo.textContent = `Welcome to The Odin Project's restaurant, where our food is so good it should come with a “return” statement.
    Our chef has debugged every recipe to perfection, turning “syntax errors” into “sautéed errors” and “404 not found” into “404 flavor not found—until now.” Every dish is served with a side of cleverness, because here, even our menu has a sense of humor.
    Get ready for a meal that's so satisfying, it might just override your expectations!`;

    mainContent.appendChild(aboutUs);
}

export{aboutContent};