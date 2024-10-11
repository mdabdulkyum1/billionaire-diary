let randomUsers = [];
// count wealth
let wealths = [];
const renderRandomUsers = (users) => {
    document.getElementById('add-user-randomly').addEventListener('click', () => {
        const showTotalWorth = document.getElementById('totalWorth');

        const randomValue = getRandomValue(users.length);
        let randomUser = users[randomValue]

        const existsUsers = randomUsers.find(user => user.person.name === randomUser.person.name);
        existsUsers ? `${showExistsSms()}` : randomUsers.push(randomUser);

        const existsWealths = wealths.find(wealth => wealth === randomUser.finalWorth)
        existsWealths ? 0 : wealths.push(randomUser.finalWorth);

        let totalWealths = wealths.reduce((acc, curr) => acc + curr, 0);
        showTotalWorth.innerText = `$${totalWealths.toFixed(3)}`

        // call functions
        displayUsers(randomUsers)
        sortByRank(randomUsers)
    });
}
// generate random number array
const getRandomValue = (length) => {
    return Math.floor(Math.random() * length)
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
    const userDataContainer = document.getElementById('user-data-container');
    document.getElementById('show-all-b').addEventListener('click', () => {
        userDataContainer.classList.remove('hidden');
        displayUsers(users);
        sortByRank(users)
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