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
        displayUsers(randomUsers);
        sortByRank(randomUsers);
        calculateWealth(randomUsers);
        showUsersDetails(randomUsers);

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
        showUsersDetails(sortedUsers);
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
        sortByRank(users);
        calculateWealth(users);
        showUsersDetails(users);
    });
}
// richestByTechnology
const richestByTechnology = (users) => {
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
        sortByRank(users);
        calculateWealth(users);
        showUsersDetails(users);
    });
}
// Citizenship: United States
// State: Washington
// City: Medina
// Birthday: January 12, 1964
// Gender: M
// Financial Information
// Exchange: NASDAQ
// Ticker: AMZN-IJS
// Total Shares: 992634000
// Share Price: $99.7
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
            finalWorth,

        } = user;

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td class="p-4 flex items-center">
               ${person.name}                 
               <i id="eye-icon-${rank}" class="fas fa-eye ml-2 text-blue-600 cursor-pointer"></i>
            </td>
            <td class="p-4">${countryOfCitizenship}</td>
            <td class="p-4">${industries[0]}</td>
            <td class="p-4">${rank}</td>
            <td class="p-4">$${finalWorth}</td>
        `;
        userDataContainer.append(tr);
    });

}


// make pop up every users when click eye icon
const showUsersDetails = (users) => {
    const userDetailsModal = document.getElementById('user-details-modal');
    
    users.forEach(user => {
        const div = document.createElement('div');
        document.getElementById(`eye-icon-${user.rank}`).addEventListener('click', () => {
            userDetailsModal.classList.remove('hidden');
            div.innerHTML = `
                <div class="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
            <button id="close-modal" onclick="closeModal()" class="absolute top-2 right-2 text-black text-xl">
                <i class="fas fa-times text-red-600">
                </i>
            </button>
            <h1 class="text-3xl font-bold text-center text-blue-700">
                ${user.person.name}
            </h1>
            <h2 class="text-xl font-semibold text-center text-gray-600">
                Biography
            </h2>
            <p class="mt-4 text-gray-700 text-justify">
                Jeff Bezos founded e-com... chairman in July 2021. He now owns a bit less than 10 % of the company. He and
                his wife MacKenzi...6% Amazon stake to her. Bezos has donated more t... received those shares. Bezos owns
                The Washington...ce in one in July 2021. Bezos said in a November...sing specific details.
            </p>
            <div class="flex mt-4">
                <img alt="Portrait of Jeff Bezos" class="w-32 h-48 object-cover mr-4" height="150"
                    src=${user.squareImage}
                    width="100" />
                <div>
                    <p class="text-sm text-gray-500">
                        Source: Amazon
                    </p>
                    <div class="mt-4">
                        <h3 class="text-lg font-semibold text-gray-800">
                            General Information
                        </h3>
                        <p class="text-gray-700">
                            <strong>
                                Citizenship:
                            </strong>
                            United States
                        </p>
                        <p class="text-gray-700">
                            <strong>
                                State:
                            </strong>
                            Washington
                        </p>
                        <p class="text-gray-700">
                            <strong>
                                City:
                            </strong>
                            Medina
                        </p>
                        <p class="text-gray-700">
                            <strong>
                                Birthday:
                            </strong>
                            January 12, 1964
                        </p>
                        <p class="text-gray-700">
                            <strong>
                                Gender:
                            </strong>
                            M
                        </p>
                    </div>
                    <div class="mt-4">
                        <h3 class="text-lg font-semibold text-gray-800">
                            Financial Information
                        </h3>
                        <p class="text-gray-700">
                            <strong>
                                Exchange:
                            </strong>
                            NASDAQ
                        </p>
                        <p class="text-gray-700">
                            <strong>
                                Ticker:
                            </strong>
                            AMZN-US
                        </p>
                        <p class="text-gray-700">
                            <strong>
                                Total Shares:
                            </strong>
                            992634000
                        </p>
                        <p class="text-gray-700">
                            <strong>
                                Share Price:
                            </strong>
                            $99.7
                        </p>
                    </div>
                </div>
            </div>
        </div>
          `;
  
          userDetailsModal.appendChild(div);
        })

    })
}
const closeModal = () => {
    const userDetailsModal = document.getElementById('user-details-modal');
    userDetailsModal.innerHTML = "";
    userDetailsModal.classList.add('hidden');
}