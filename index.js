// const myValues = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
// //task 1
// const iterateWithAsyncAwait = async (values) => {
//     values.forEach(async(element) => {
//         setInterval(()=>console.log(element), 1000);
//     });
// }
// iterateWithAsyncAwait([12,21,32,43,4])
// const delay = (ms) => new Promise(resolve=>setTimeout(resolve, ms))

//task 1
// Helper function to create a delay
function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}  
  // Async function to iterate over the array
async function iterateWithAsyncAwait(values) {
    for (const value of values) {
      console.log(value); // Log the current value
      await delay(1000); // Wait for 1 second
    }
}  
  // Example usage
const myValues = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
iterateWithAsyncAwait(myValues);


//task 2
// Simulated fetch function (mocking an API call)
function fetchData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: 'Fetched Data from API' });
      }, 2000); // Simulate a 2-second delay for the API response
    });
  }
  
  // Async function that waits for the API response
  async function awaitCall() {
    console.log('Fetching data from the API...');
  
    try {
      const response = await fetchData();  // Wait for the fetchData function to resolve
      console.log('Data received:', response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  // Call the async function
  awaitCall();
  