
// => enroll
// => course process
// => get certificate
const  payment = false;
const marks = 70;
 function enroll (callback) {
    console.log(`course enrolled .....`);
    setTimeout( function(){
        if(payment){            
          callback();            
        }
        else{
            console.log(`Please ensure the payment`);
        }
    },1000);
     
 }

function courseprogress(callback) {

    console.log(`course continue....`);

    setTimeout(function(){
        if(marks >= 80) {
            callback();
        }
        else {
            console.log(`you are not eligle for certifiacate`);
        }

    },4000);
}

function certificate() {
    console.log(`your certificate are process..`);
    setTimeout(function(){
        console.log(`congrats! you are get certificate`);
    },1000)

}

// now call the every fumctrion

enroll(function(){
    courseprogress(certificate);
})



















