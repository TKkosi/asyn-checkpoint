const myValues = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
//task 1
const iterateWithAsyncAwait = async (values) => {
    values.forEach(async(element) => {
        setInterval(()=>console.log(element), 1000);
    });
}
iterateWithAsyncAwait([12,21,32,43,4])


const delay = (ms) => new Promise(resolve=>setTimeout(resolve, ms))