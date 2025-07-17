const outer = document.querySelector('.outer');
const inner = document.querySelector('.inner');
const InBetween = document.querySelector('.InBetween');


outer.addEventListener('click', () =>{
    console.log('outer');
});

inner.addEventListener('click', (Tanya) =>{
    console.log('inner');
    Tanya.stopPropagation();
});

InBetween.addEventListener('click', (tanya) => {
    console.log('InBwteen');
    //tanya.stopPropagation();

},true);// Inbetween inner outer

//we can alter the order of event propagation by passing a third argument (true) to the addEventListener , that is called capturing.

