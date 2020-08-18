const screenChoise = document.getElementById('screenChoice');

let screenType = '';

screenChoise.addEventListener('change', () => {
    console.log(screenChoise.value);
    if (screenChoise.value == 'screen1-2d') {
        screenType = '2d';
    } else if (screenChoise.value == 'screen2-3d') {
        screenType = '3d';
    } else if (screenChoise.value == 'screen3-2d') {
        screenType = '2d';
    } else if (screenChoise.value == 'screen3-3d') {
        screenType = '3d';
    }
});