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
const arr1 = [
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/todos/2'
  ];
  
  function fetchMultipleData(arr) {
    // Use Promise.all with the array of fetch promises
    return Promise.all(arr.map((url)=>{return fetch(url).then((response)=> response.json())}));
  }
  
  // Example usage
  fetchMultipleData(arr1).then((contents) => {
    // contents will be an array of the fetched JSON data
    console.log(contents);
  })
  

