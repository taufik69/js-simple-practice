
 const payment = true;
 const mark = 70;
 function enroll() {
     console.log(`Enroll in process...`);    
     const mypromise = new promise((resolve ,reject)=>{
        setTimeout(()=>{
            if(payment) {
                resolve();
            }
            else {
                reject(`payment failed`);
            }    
        },2000);        
    });       
    return mypromise;
}
function course() {
    console.log(`course are progress...`);
    const mypromise = new promise((resolve,reject)=>{
        setTimeout(()=>{
            if(marks>=80) {
                resolve();
            }
            else {
                reject('You are not eligible for certificate');
            }
        },3000);
    });
    return mypromise;
}
function certificate() {
    console.log(`certificate are process....`)
    const mypromise = new promise((resolve)=>{
       setTimeout(()=>{
        resolve(`congrats! you get a certificate`);
       },1000);
    });
    return mypromise; 
}


    async function fullcourse() {

        try{
            await enroll();
            await course(); 
            const message = await certificate();
            console.log(message);
        }
        catch(err) {
            console.log(err);
        }
    }
    // fullcourse();

    // enroll()
    //     .then(course)
    //     .then(certificate)
    //     .then((value)=>{
    //         console.log(value);
    //     })
    //     .catch((err)=>{
    //         console.log(err);
    //     });
    
    
