import './styles/main.scss';

$(document).ready(function () {

    console.log('index.js is being transpiled');

    let button = document.getElementById('button');
    // $('body').on('click', '#button', ()=>{
    $(button).on('click', () => {
        console.error("You can't win.  It's pointelss to keep fighting.  Why, Mr. Anderson, why?  Why do you persist?");
        console.log('Because I choose to.');
    })
    let a = "apple";

    let somefunction = () => {
        let promiseTest = new Promise((resolve, reject) => {
            if (a === "apple") {
                resolve("a is indeed apple");
            } else { reject("an impossiblity has occurred!") };
        });
        return promiseTest;
    }

    somefunction().then((data)=>{
        console.log(data);
        console.log('glad thats over');
    })


});

// export * from index.js;