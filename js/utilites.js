// const displayUsers = (data) => {
//     addUserRandomly(data)
//     loading();
// }
// // add-user-randomly 
// const addUserRandomly = (data) => {

//     const allUsers = [];

//     document.getElementById('add-user-randomly')
//         .addEventListener('click', () => {


//             const randomDigit = randomValue(data.length)

//             const userExists = allUsers.find((a) => a.person.name === data[randomDigit].person.name);
//             userExists ? `` : allUsers.push(data[randomDigit]);

//             const userDataContainer = document.getElementById('user-data-container');
//             userDataContainer.innerHTML = "";
//             allUsers.forEach(users => {
//                 const {
//                     person,
//                     countryOfCitizenship,
//                     industries,
//                     rank,
//                     finalWorth
//                 } = users;
//                 calculateWealth(finalWorth);
//                 const tr = document.createElement('tr');
//                 tr.innerHTML = `
        
//         <td class="p-4 flex items-center">
//            ${person.name}                 
//            <i class="fas fa-eye ml-2 text-blue-600"></i>
//         </td>
//         <td class="p-4">${countryOfCitizenship}</td>
//         <td class="p-4">${industries[0]}</td>
//         <td class="p-4">${rank}</td>
//         <td class="p-4">$${finalWorth}</td>
//     `;
//                 userDataContainer.append(tr);
//             });


//         });

// }

// //Calculate Entire Wealth
// const arrayWorth = [];
// const calculateWealth = (worth) => {    
//     arrayWorth.push(worth);
//     const totalWorth = arrayWorth.reduce((acc, curr) => acc + curr, 0);
//     console.log(arrayWorth)
//     console.log("totoal is", totalWorth)
// }



// // generate random value
// const randomValue = (length) => {
//     return Math.floor(Math.random() * length);

// }

// // show loading
// const loading = () => {
//     const loading = document.getElementById("loading");
//     loading.classList.remove('hidden');
//     // loading off
//     setTimeout(() => {
//         loading.classList.add('hidden');
//     }, 2000)

// }















































// const displayUsers = (data) => {
//     addUserRandomly(data);
// };

// // Add user randomly
// const addUserRandomly = (data) => {
//   const allUsers = [];

//   document.getElementById('add-user-randomly').addEventListener('click', () => {
//     const randomIndex = randomValue(data.length); // Generate a random index
//     const randomUser = data[randomIndex]; // Select random user

//     // Check if the user is already added by comparing a property (e.g., person.name)
//     const userExists = allUsers.some(user => user.person.name === randomUser.person.name);

//     if (userExists) {
//       alert('User already added, please try another one!');
//     } else {
//       allUsers.push(randomUser); // Add the new random user to the array

//       const userDataContainer = document.getElementById('user-data-container');

//       // Destructure randomUser data
//       const { person, countryOfCitizenship, industries, rank, finalWorth } = randomUser;

//       // Create a new row for the random user
//       const tr = document.createElement('tr');
//       tr.innerHTML = `
//         <td class="p-4 flex items-center">
//           ${person.name}
//           <i class="fas fa-eye ml-2 text-blue-600"></i>
//         </td>
//         <td class="p-4">${countryOfCitizenship}</td>
//         <td class="p-4">${industries[0]}</td>
//         <td class="p-4">${rank}</td>
//         <td class="p-4">$${finalWorth}</td>
//       `;
//       userDataContainer.append(tr);

//       console.log(allUsers); // Log the list of users
//       loading(); // Show loading spinner
//     }
//   });
// };

// // Generate random value
// const randomValue = (length) => {
//   return Math.floor(Math.random() * length); // Use length to generate a valid index
// };

// // Show loading
// const loading = () => {
//   const loading = document.getElementById('loading');
//   loading.classList.remove('hidden');

//   // Hide loading after 2 seconds
//   setTimeout(() => {
//     loading.classList.add('hidden');
//   }, 2000);
// };

















































// Persistent variables to store wealth
let totalWorth = 0;
const allUsers = [];

const displayUsers = (data) => {
    addUserRandomly(data);
    loading();
};

// Add user randomly
const addUserRandomly = (data) => {
    document.getElementById('add-user-randomly')
        .addEventListener('click', () => {
            document.getElementById('totalWorth').innerText = `$${totalWorth.toFixed(3)}`;
            const randomDigit = randomValue(data.length);
            
            // Check if user already exists in the list
            const userExists = allUsers.find((a) => a.person.name === data[randomDigit].person.name);
            if (!userExists) {
                // Add the new user and update total wealth
                allUsers.push(data[randomDigit]);
                calculateWealth(data[randomDigit].finalWorth);
            }

            // Render the updated user list
            renderUsers(allUsers);
        });
};

// Calculate total wealth
const calculateWealth = (worth) => {
    totalWorth += worth; // Add new wealth to total
    console.log("Total wealth is:", totalWorth); // Display updated total
};

// Render users to the table
const renderUsers = (users) => {
    const userDataContainer = document.getElementById('user-data-container');
    userDataContainer.innerHTML = ""; // Clear current users

    users.forEach(user => {
        const { person, countryOfCitizenship, industries, rank, finalWorth } = user;

        // Create table row for user
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td class="p-4 flex items-center">
               ${person.name}                 
               <i class="fas fa-eye ml-2 text-blue-600"></i>
            </td>
            <td class="p-4">${countryOfCitizenship}</td>
            <td class="p-4">${industries[0]}</td>
            <td class="p-4">${rank}</td>
            <td class="p-4">$${finalWorth}</td>
        `;
        userDataContainer.append(tr);
    });
};

// Generate random value
const randomValue = (length) => {
    return Math.floor(Math.random() * length);
};

// Show loading
const loading = () => {
    const loading = document.getElementById("loading");
    loading.classList.remove('hidden');
    // loading off
    setTimeout(() => {
        loading.classList.add('hidden');
    }, 2000);
};
