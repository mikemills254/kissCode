const dummyData = [
    { 
        name: "Repairs",
        date: "2024-05-08",
        customer: "Daily Pop Co",
        meterno: "265492649",
        status: "SENT"
    },
    { 
        name: "Leaks",
        date: "2024-05-07",
        customer: "Ove Grump",
        meterno: "456983978",
        status: "SENDING"
    },
    { 
        name: "Interruption",
        date: "2024-05-06",
        customer: "Anna Anderson",
        meterno: "982310865",
        status: "FAIL"
    },
    { 
        name: "Contamination",
        date: "2024-05-05",
        customer: "Kygo Boost",
        meterno: "628741897",
        status: "SENT"

    },
    { 
        name: "Boil water",
        date: "2024-05-04",
        customer: "Britney Trump",
        meterno: "752876419",
        status: "SENT"
    }
];


document.addEventListener("DOMContentLoaded", () => {
    const tableBody = document.querySelector("#alertsTable tbody");

    // Loop through the dummy data array and create table rows
    dummyData.forEach((entry, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${entry.name}</td>
            <td>${entry.date}</td>
            <td>${entry.customer}</td>
            <td>${entry.meterno}</td>
            <td>${entry.status}</td>
            <td>
                <div class="actions-container">
                    ${entry.status === 'FAIL' ?
                        `<button class="actions">
                            <i class="bi bi-envelope"></i>
                        </button>` :
                        ''
                    }
                </div>
            </td>
        `;
        tableBody.appendChild(row);
    });
});