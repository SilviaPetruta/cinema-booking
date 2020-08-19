const screenChoice = document.getElementById('screenChoice');
const hotdogRadioBtns = document.getElementsByName('hotdog');
const popcornRadioBtns = document.getElementsByName('popcorn');
const drinkRadioBtns = document.getElementsByName('drink');
const submitBtn = document.getElementById('submitBtn');

let screenType = '';
let priceForHotdog = 0, priceForPopcorn = 0, priceForDrink = 0;

screenChoice.addEventListener('change', () => {
     checkScreenType(screenChoice.value);
});

for (let i = 0; i < hotdogRadioBtns.length; i++) {
    hotdogRadioBtns[i].addEventListener('change', (event) => {
        console.log("hotdog selection changed");  
        priceForHotdog = parseFloat(event.target.value);
        console.log(priceForHotdog);
    });
} 

for (let i = 0; i < popcornRadioBtns.length; i++) {
    popcornRadioBtns[i].addEventListener('change', (event) => {
        console.log("popcorn selection changed");
        priceForPopcorn = parseFloat(event.target.value);
        console.log(priceForPopcorn);
    });
} 

for (let i = 0; i < drinkRadioBtns.length; i++) {
    drinkRadioBtns[i].addEventListener('change', (event) => {
        console.log("drink selection changed");                priceForDrink = parseFloat(event.target.value);
        console.log(priceForDrink);
    });
} 

checkScreenType = (screen) => {
    if (screen == 'screen1-2d') {
        screenType = '2d';
    } else if (screen == 'screen2-3d') {
        screenType = '3d';
    } else if (screen == 'screen3-2d') {
        screenType = '2d';
    } else if (screen == 'screen3-3d') {
        screenType = '3d';
    }
};


/**
 * Second version for checkScreenType function:
checkScreenType = (screen) => {
    if (screen.includes('2d')) {
        screenType = '2d';
    } else if (screen.includes('3d')) {
        screenType = '3d';
    } else {
        screenType = undefined;
    }
};
 */