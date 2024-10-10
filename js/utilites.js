let randomUsers = [];
const renderRandomUsers = (users) => {
    document.getElementById('add-user-randomly').addEventListener('click', () => {

        const randomValue = getRandomValue(users.length);

        const existsUsers = randomUsers.find(user => user.person.name === users[randomValue].person.name);
        existsUsers ? alert("no") : randomUsers.push(users[randomValue]) ;
        
        displayUsers(randomUsers)
        showLoading();
    });



}

// generate random number array
const getRandomValue = (length) => {
    return Math.floor(Math.random() * length)
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