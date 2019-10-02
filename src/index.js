import './styles/main.scss';

$(document).ready(function () {

    console.log('webpack is working!');

    let button = document.getElementById('button');
    // $('body').on('click', '#button', ()=>{
    $(button).on('click', () => {
        console.error("You can't win.  It's pointelss to keep fighting.  Why, Mr. Anderson, why?  Why do you persist?");
        console.log('Because I choose to.');
    })

});