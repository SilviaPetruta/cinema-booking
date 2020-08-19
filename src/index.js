const screenChoise = document.getElementById('screenChoice');

let screenType = '';

screenChoise.addEventListener('change', () => {
     checkScreenType(screenChoise.value);
});

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