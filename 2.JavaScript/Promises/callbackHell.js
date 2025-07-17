//console.log('Callback Hell');

function getDatafromInternet(successCallback){
    console.log('Getting data from the internet!')
    setTimeout(() => {
    //    console.log('Got data from internet');
       successCallback('KG Coding');
    },2000);
}



function setDataToDB(successCallback){
    console.log('sending data to databse');
    setTimeout(() => {
       
       successCallback('db_row_25');
    },2000);
}


   
function sendResponseToUSer(successCallback){
    console.log('sending response to user');
    setTimeout(() => {  
        successCallback('');
    },2000);    
}



getDatafromInternet((data) => {
    console.log(`Data  is fetched: ${data}`);
    setDataToDB((id) => {
        console.log(`Data is saved to the dB with id ${id}`);
        sendResponseToUSer(()=> {
            console.log('Response is send to user.');
        })
    })
});
