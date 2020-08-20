//! CREATE NECESSARY VARIABLES
    //CUSTOMER VARIABLE
const newCustomer = document.getElementById('customerName').value;

    //CREATE TICKET PRICES
const juniorTicketPrice = 4
const adultTicketPrice = 8
const seniorTicketPrice = 6
const studentTicketPrice = 5

    //CREATE TICKET ORDERING VARIABLES
const ticketsOrdered = document.getElementsByClassName("ticketOrdering");
        //?TURN NUMBER FROM STRING TO AN INTEGER USING 'parseInt'
const juniorTickets = parseInt(ticketsOrdered[0].value);
const adultTickets = parseInt(ticketsOrdered[1].value);
const seniorTickets = parseInt(ticketsOrdered[2].value);
const studentTickets = parseInt(ticketsOrdered[3].value);

// ON SUBMIT - GET CUSTOMER NAME
submitButton.addEventListener("click",()=> {
    alert(`Hello ${newCustomer}, thank you for sucessfully booking your cinema experience`);
})

// CHECK SUM OF ALL TICKETS IS LESS THAN FIVE
submitButton.addEventListener("click",()=> {
        // GET SUM OF ALL TICKETS
        const totalTickets = juniorTickets + adultTickets + seniorTickets + studentTickets;

        if (totalTickets <= 5){
            alert(`Congratulations ${totalTickets} have been ordered!`)
        }
        else {
            alert(`Unfortunately you have tried to order ${totalTickets} tickets!\nThis is above the maximum of five!`)
        }
})

// GIVE CUSTOMER PRICE OF TICKETS
submitButton.addEventListener("click",()=> {
    const totalTicketPrice = (juniorTickets * juniorTicketPrice) + (adultTickets * adultTicketPrice) + (seniorTickets * seniorTicketPrice) + (studentTickets * studentTicketPrice);
    if (screentype === '2d') {
        let screenChoicePrice = totaltickets * price2D
        let ticketsAndScreenTotal = screenChoicePrice + totalTicketPrice
        alert(`The total price of your cinema tickets is £${ticketsAndScreenTotal}`)
    }
    else if (screentype === '3d') {
        let screenChoicePrice = totaltickets * price3D
        let ticketsAndScreenTotal = screenChoicePrice + totalTicketPrice
        alert(`The total price of your cinema tickets is £${ticketsAndScreenTotal}`)
    }
    else {
        alert(`There has been a problem!`)
    }
    const screenChoicePrice = 
    ticketAndScreenPrice = totalTicketPrice + screenChoicePrice;
}) 

//! SILVIA BELOW

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