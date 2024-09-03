import './style-menu.css';


function menuContent(){
    const mainContent = document.querySelector('#content');
    const foodItem1 = document.createElement('div');
    const foodItem2 = document.createElement('div');
    const foodItem3 = document.createElement('div');
    const foodItem4 = document.createElement('div');
    const foodItem5 = document.createElement('div');
    const foodItem6 = document.createElement('div');

    const foodName1 = document.createElement('div');
    const foodName2 = document.createElement('div');
    const foodName3 = document.createElement('div');
    const foodName4 = document.createElement('div');
    const foodName5 = document.createElement('div');
    const foodName6 = document.createElement('div');
    
    const foodInfo1 = document.createElement('p');
    const foodInfo2 = document.createElement('p');
    const foodInfo3 = document.createElement('p');
    const foodInfo4 = document.createElement('p');
    const foodInfo5 = document.createElement('p');
    const foodInfo6 = document.createElement('p');

    const foodPrice1 = document.createElement('div');
    const foodPrice2 = document.createElement('div');
    const foodPrice3 = document.createElement('div');
    const foodPrice4 = document.createElement('div');
    const foodPrice5 = document.createElement('div');
    const foodPrice6 = document.createElement('div');

    //content to fill each foodItem
    foodName1.textContent = 'HTML Hamburger';
    foodName2.textContent = `CSS Salad`;
    foodName3.textContent = `JavaScript Jambalaya`;
    foodName4.textcontent = `Git Burger`;
    foodName5.textContent = `Ruby on Rails Ravioli`;
    foodName6.textContent = `React Ramen`;

    foodInfo1.textContent = `A perfectly layered burger that's as "classy" as a well-structured HTML page!`;
    foodInfo2.textContent = `A salad dressed to impress with "media queries" and "pseudo-elements"—style your greens!`;
    foodInfo3.textContent = `A spicy mix of rice, seafood, and sausage that'll have you "callback-ing" for more!`;
    foodInfo4.textContent = `Layered with bacon, cheese, and special sauce, this burger is "committed" to delivering satisfaction!`;
    foodInfo5.textContent = `Elegant ravioli with a rich filling, topped with a “gem” of marinara—perfectly “orchestrated”!`;
    foodInfo6.textContent = `Ramen with a dynamic “state” and broth that's “in sync”—you'll be “hooked” with every slurp!`;

    foodPrice1.textContent = `$8.88: “Chip Overload”`;
    foodPrice2.textContent = `$9.99: “Priced to Debug”`;
    foodPrice3.textContent = `$7.77: “Logic's Luxury”`;
    foodPrice4.textContent = `$11.11: “Chaotic Value”`;
    foodPrice5.textContent = `$10.10: “Stew-riffic Deal”`;
    foodPrice6.textContent = `$6.66: “Endless Temptation”`;


    foodItem1.append(foodName1, foodInfo1, foodPrice1);
    foodItem2.append(foodName2, foodInfo2, foodPrice2);
    foodItem3.append(foodName3, foodInfo3, foodPrice3);
    foodItem4.append(foodName4, foodInfo4, foodPrice4);
    foodItem5.append(foodName5, foodInfo5, foodPrice5);
    foodItem6.append(foodName6, foodInfo6, foodPrice6);


    mainContent.append(foodItem1, foodItem2, foodItem3, foodItem4, foodItem5, foodItem6);
}


export{menuContent};