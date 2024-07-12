////1
// function sumAsync(a, b, callback) {
//     setTimeout(() => {
//         const sum = a + b;
//         callback(sum);
//     }, 1000);
// }

// // Example usage:
// sumAsync(3, 4, (result) => {
//     console.log(`The sum is: ${result}`);
// });


////2
// function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Data fetched successfully.");
//         }, 2000);
//     });
// }

// // Example usage
// getData().then((message) => {
//     console.log(message); // "Data fetched successfully."
// });

////3,4
 //async function fetchData(url){
//  try{const data = await fetch(url)
   
//   if(!data.ok){
//     throw new Error(`HTTP error! status: ${response.status}`);
//    }

//    const ans = await data.json();
//    return data;
//    }
//   catch(error){
//     console.error('Error fetching data:', error);
//      throw error;
//   }
// }

// fetchData('https://jsonplaceholder.typicode.com/todos/1')
//     .then(data => console.log(data))
//     .catch(error => console.error('Fetch error:', error));


//6
// function fetchUserDataAndPosts(userId){
//     return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`) 
//     .then((response) =>{
//         return response.json();
//     })
//     .then((user) =>{
//       return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
//     .then((response)=>{
//        return response.json();
//     })
//     .then((post)=>{
//         return {
//            user: user,
//            post: post
//         };
//     });
// })
//     .catch((error)=>{
//       console.error(`Error fetching data ${error}`)
//     });
// }

// fetchUserDataAndPosts(1).then((data)=>{
//     console.log('User Details:', data.user);//  can't get desired write answer using backticks
//     console.log('User Posts:', data.post);//
// });


////7
// const arr1 = [
//     'https://jsonplaceholder.typicode.com/todos/1',
//     'https://jsonplaceholder.typicode.com/todos/2'
//   ];
  
//   function fetchMultipleData(arr) {
//     // Use Promise.all with the array of fetch promises
//     return Promise.all(arr.map((url)=>{return fetch(url).then((response)=> response.json())}));
//   }
  
//   // Example usage
//   fetchMultipleData(arr1).then((contents) => {
//     // contents will be an array of the fetched JSON data
//     console.log(contents);
//   })
  

//8
// function racePromises(promises) {
//     // Use Promise.race to return the result of the first promise that resolves or rejects
//     return Promise.race(promises);
// }

// // Example usage
// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 100, 'First promise resolved');
// });
// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(reject, 200, 'Second promise rejected');
// });
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 300, 'Third promise resolved');
// });

// racePromises([promise1, promise2, promise3])
//     .then((result) => {
//         console.log('Race resolved with:', result);
//     })
//     .catch((error) => {
//         console.error('Race rejected with:', error);
//     });
