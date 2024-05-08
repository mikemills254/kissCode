const dummyData = [
    { 
        name: "INV001",
        date: "2024-05-08",
        meterno: "265492649",
        previousReading: "309",
        currentReading: "345",
        consumption: "36",
        amount: "KES 4680",
        status: "Paid"
    },
    { 
        name: "INV002",
        date: "2024-05-07",
        meterno: "456983978",
        previousReading: "48",
        currentReading: "53",
        consumption: "5",
        amount: "KES 750",
        status: "Overdue"
    },
    { 
        name: "INV003",
        date: "2024-05-06",
        meterno: "982310865",
        previousReading: "101",
        currentReading: "107",
        consumption: "6",
        amount: "KES 780",
        status: "Pending"
    },
    { 
        name: "INV004",
        date: "2024-05-05",
        meterno: "628741897",
        previousReading: "316",
        currentReading: "325",
        consumption: "9",
        amount: "KES 1170",
        status: "Paid"

    },
    { 
        name: "INV005",
        date: "2024-05-04",
        meterno: "752876419",
        previousReading: "56",
        currentReading: "67",
        consumption: "11",
        amount: "KES 1430",
        status: "Paid"
    }
];


document.addEventListener("DOMContentLoaded", () => {
    const tableBody = document.querySelector("#waterTable tbody");

    // Loop through the dummy data array and create table rows
    dummyData.forEach((entry, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${entry.name}</td>
            <td>${entry.date}</td>
            <td>${entry.meterno}</td>
            <td >${entry.previousReading}</td>
            <td>${entry.currentReading}</td>
            <td>${entry.consumption}m&sup3;</td>
            <td>${entry.amount}</td>
            <td>${entry.status}</td>
            <td>
                <div class="actions-container">
                    <button class="actions">
                        <i class="bi bi-envelope"></i>
                    </button>
                    <button class="actions">
                        <i class="bi bi-trash"></i>
                    </button>
                </div>
            </td>
        `;
        tableBody.appendChild(row);
    });
});