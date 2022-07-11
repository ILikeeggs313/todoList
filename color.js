// const colorSection = document.querySelector('#colors');

// colorSection.addEventListener('click', function(e){
//     document.body.style.backgroundColor = e.target.dataset.hex;
// })
// const preferences = {
//     fontSize: '18px', 
//     favColor: 'purple'
// };
// localStorage.setItem('preferences', JSON.stringify(preferences));

// localStorage.preferences;
// const {favColor} = JSON.parse(localStorage.preferences);
// document.body.style.backgroundColor = favColor;
if(localStorage.getItem('darkModeEnabled')){
    document.body.className = 'dark';
}
const toggleSwitch = document.querySelector('input[type="checkbox"]');
toggleSwitch.addEventListener('click', function(e){
    const {checked} = toggleSwitch;
    if(checked){
        localStorage.setItem('darkModeEnabled', checked);
    }
    else{
        localStorage.removeItem('darkModeEnabled');
    }
    document.body.className = checked ? 'dark': ''
});
