const userData = [
    {
        firstName: "Imagine",
        lastName: "Dragons",
        email: "im@example.com",
        address: "0718453678",
        phoneNumber: "Accountant",
        role: "2022-08-24",
        dateCreated: "2022-08-02 08:43:51",
        lastLogin: "at 197.232.61.232"
    },
    {
        firstName: "Calvin",
        lastName: "Tender",
        email: "CalTee2@ya.com",
        address: "0725647329",
        phoneNumber: "Admin",
        role: "2022-08-23",
        dateCreated: "2022-08-02 08:31:44",
        lastLogin: "at 105.163.0.5"
    },
    {
        firstName: "Mercy",
        lastName: "Me",
        email: "mercyme@gmail.com",
        address: "0712690275",
        phoneNumber: "System Admin",
        role: "2022-08-20",
        dateCreated: "2022-08-02 08:31:44",
        lastLogin: "at 105.163.0.5"
    },
    {
        firstName: "Owen",
        lastName: "Rick",
        email: "Ricken25@example.com",
        address: "0127276747",
        phoneNumber: "System Admin",
        role: "2022-08-24",
        dateCreated: "2022-08-02 08:43:51",
        lastLogin: "at 197.232.61.232"
    },
    {
        firstName: "Gladys",
        lastName: "Rush",
        email: "gladys@outlook.com",
        address: "0713786819",
        phoneNumber: "Sales Executive",
        role: "2022-08-15",
        dateCreated: "2022-08-02 08:43:51",
        lastLogin: "at 197.232.61.232"
    }
];


document.addEventListener("DOMContentLoaded", () => {
    const tableBody = document.querySelector("#usersTable tbody");

    // Loop through the dummy data array and create table rows
    userData.forEach((entry, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${entry.firstName}</td>
            <td>${entry.lastName}</td>
            <td>${entry.email}</td>
            <td>${entry.address}</td>
            <td>${entry.phoneNumber}</td>
            <td>${entry.role}</td>
            <td>${entry.dateCreated}</td>
        `;
        tableBody.appendChild(row);
    });
});

document.getElementById("saveBtn").addEventListener("click", () => {
    const formInputs = document.querySelectorAll("#userForm input");

    const newUser = {};
    formInputs.forEach(input => {
        newUser[input.name] = input.value;
    });

    const currentDate = new Date();
    const formattedDateCreated = currentDate.toISOString().split('T')[0];
    newUser.dateCreated = formattedDateCreated;

    const formattedLastLogin = currentDate.toLocaleString('en-US', { timeZone: 'UTC' });
    newUser.lastLogin = formattedLastLogin;

    userData.push(newUser);
    console.log("User added:", newUser);
    console.log("Updated userData array:", userData);
});