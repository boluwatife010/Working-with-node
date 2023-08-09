const goToSite = (address: string) : Promise<string> => {
    return new Promise((resolve, reject) => {
        console.log('I am the website homepage.');
        setTimeout(() => {
           try{
            console.log('I am at the website homepage.');
            if (!address) {
                reject(new Error('This is the wrong address'));
            }
            resolve (address);
           } 
           catch (error) {
            reject(error);
           }
        }, 2000);
    })
}
const navigatePayment = (payment: string) : Promise<string> => {
    return new Promise((resolve, reject) => {
        console.log('I am at the payment page.');
        setTimeout ( () => {
            try {
                console.log('I am trying to pay for my school fees.');
                if (!payment) {
                    reject(new Error('This is a wrong payment page.'));
                }
                resolve(payment);
            }
            catch (error) {
                reject (error);
            }
        }, 1500);
    })
}  