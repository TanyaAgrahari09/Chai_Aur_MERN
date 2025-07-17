(() =>{
    let counter = 0;
    console.log('Start');
    
    let increment = (head) =>console.log(head,++counter);
    increment('first');
    increment('second');

    //SetTimeout And clearTimeout
    let timerId = setTimeout(() => increment('timer'),1000);
    console.log('timerId', timerId);

    setTimeout(() => {clearTimeout(timerId)},1000);

    //SetInterval And clearInterval
    let intervalID = setInterval(() => increment('interval'),1000);
    console.log('intervalID', intervalID);


    setTimeout(() => {clearInterval(intervalID)},10000);


    console.log('End');
    // console.log('End');
    // console.log('End');
    // console.log('End');
    // console.log('End');
})();
