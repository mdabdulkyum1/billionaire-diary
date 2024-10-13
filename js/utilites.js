let randomUsers = [];
const renderRandomUsers = (users) => {
    document.getElementById('add-user-randomly').addEventListener('click', () => {
        const totalWorthCon = document.getElementById('totalWorth');
        const randomValue = getRandomValue(users.length);
        let randomUser = users[randomValue]

        const existsUsers = randomUsers.find(user => user.person.name === randomUser.person.name);
        existsUsers ? `${showExistsSms()}` : randomUsers.push(randomUser);

        totalWorthCon.innerHTML = "$0.00";
        // call functions
        displayUsers(randomUsers)
        sortByRank(randomUsers)
        calculateWealth(randomUsers)
    });
}
// generate random number array
const getRandomValue = (length) => {
    return Math.floor(Math.random() * length)
}
// Calculate Entire Wealth

const calculateWealth = (users) => {
    const totalWorthCon = document.getElementById('totalWorth');
    const totalWorth = users.reduce((acc, curr) => acc + curr.finalWorth, 0)
    const finalWorth = totalWorth.toFixed(3)
    document.getElementById('calculateWealth').addEventListener('click', () => {
        totalWorthCon.innerText = `$${finalWorth}`;
    })
}

// existsSms
const showExistsSms = () => {
    const message = document.getElementById('existsSms');
    message.classList.remove('hidden')
    setTimeout(() => {
        message.classList.add("hidden");
    }, 2000);
}

// Sort By Rank (Descending)
const sortByRank = (users) => {
    document.getElementById('sort-by-rank').addEventListener('click', () => {
        showLoading();
        const sortedUsers = users.sort((a, b) => b.rank - a.rank);
        displayUsers(sortedUsers);
    });
}
// Show All Billionaires
const showAllB = (users) => {
    const totalWorthCon = document.getElementById('totalWorth');
    const userDataContainer = document.getElementById('user-data-container');
    document.getElementById('show-all-b').addEventListener('click', () => {
        showLoading();
        userDataContainer.classList.remove('hidden');
        totalWorthCon.innerHTML = `$0.00`;
        displayUsers(users);
        sortByRank(users)
        calculateWealth(users)
    });
}
// richestByTechnology
const richestByTechnology = (users) => {
    console.log(users)
    const totalWorthCon = document.getElementById('totalWorth');
    totalWorthCon.innerHTML = "$0.00";
    displayUsers(users);
    sortByRank(users)
    calculateWealth(users)
}
// richestByStatesTexas
const richestByStatesTexas = (users) => {
    const totalWorthCon = document.getElementById('totalWorth');

    document.getElementById('richestByStatesTexas').addEventListener('click', () => {
        totalWorthCon.innerHTML = "$0.00";
        showLoading();
        displayUsers(users);
        sortByRank(users)
        calculateWealth(users)
    });
}
/// display users
const displayUsers = (users) => {

    const userDataContainer = document.getElementById('user-data-container');
    userDataContainer.innerHTML = "";
    users.forEach(user => {
        const {
            person,
            countryOfCitizenship,
            industries,
            rank,
            finalWorth
        } = user;
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

}