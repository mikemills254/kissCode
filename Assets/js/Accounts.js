const dummyData = [
    { 
        invoiceNumber: "INV001",
        customer: "John Doe",
        date: "2024-05-08",
        type: "mpesa",
        status: "ACTIVE",
        amount: "KES 100.00",
    },
    { 
        invoiceNumber: "INV002",
        customer: "Jane Smith",
        date: "2024-05-07",
        type: "tkash",
        status: "DISCONNECTED",
        amount: "KES 150.00",
    },
    { 
        invoiceNumber: "INV003",
        customer: "Michael Johnson",
        date: "2024-05-06",
        type: "mpesa",
        status: "PENDING CONNECTION",
        amount: "KES 200.00",
    },
    { 
        invoiceNumber: "INV004",
        customer: "Alice Brown",
        date: "2024-05-05",
        type: "mpesa",
        status: "ACTIVE",
        amount: "KES 120.00",
    },
    { 
        invoiceNumber: "INV005",
        customer: "Bob Wilson",
        date: "2024-05-04",
        type: "mpesa",
        status: "ACTIVE",
        amount: "KES 180.00",
    },
    { 
        invoiceNumber: "INV006",
        customer: "Emily Garcia",
        date: "2024-05-03",
        type: "mpesa",
        status: "ACTIVE",
        amount: "KES 220.00",
    },
    { 
        invoiceNumber: "INV007",
        customer: "David Martinez",
        date: "2024-05-02",
        type: "tkash",
        status: "ACTIVE",
        amount: "KES 130.00",
    },
    { 
        invoiceNumber: "INV008",
        customer: "Sarah Miller",
        date: "2024-05-01",
        type: "tkash",
        status: "ACTIVE",
        amount: "KES 160.00",
    },
    { 
        invoiceNumber: "INV009",
        customer: "Daniel Taylor",
        date: "2024-04-30",
        type: "mpesa",
        status: "ACTIVE",
        amount: "KES 250.00",
    },
    { 
        invoiceNumber: "INV010",
        customer: "Jessica Thompson",
        date: "2024-04-29",
        type: "mastercard",
        status: "ACTIVE",
        amount: "KES 140.00",
    }
];

const paymentsData = [
    { 
        customerID: "INV002",
        date: "2024-05-08",
        type: "mpesa",
        status: "ACTIVE",
        amount: "KES 100.00",
    },
    { 
        customerID: "INV003",
        date: "2024-05-07",
        type: "tkash",
        status: "DISCONNECTED",
        amount: "KES 150.00",
    },
    { 
        customerID: "INV003",
        date: "2024-05-06",
        type: "mpesa",
        status: "PENDING CONNECTION",
        amount: "KES 200.00",
    },
    { 
        customerID: "INV004",
        date: "2024-05-05",
        type: "mpesa",
        status: "ACTIVE",
        amount: "KES 120.00",
    },
    { 
        customerID: "INV005",
        date: "2024-05-04",
        type: "mpesa",
        status: "ACTIVE",
        amount: "KES 180.00",
    },
    { 
        customerID: "INV006",
        date: "2024-05-03",
        type: "mpesa",
        status: "ACTIVE",
        amount: "KES 220.00",
    },
    { 
        customerID: "INV007",
        date: "2024-05-02",
        type: "tkash",
        status: "ACTIVE",
        amount: "KES 130.00",
    }
];

const expensesData = [
    { 
        item: "Repairs",
        date: "2024-05-08",
        paidby: "mpesa",
        amount: "KES 100.00",
    },
    { 
        item: "Payroll",
        date: "2024-05-08",
        paidby: "mastercard",
        amount: "KES 150.00",
    },
    { 
        item: "Advertisment",
        date: "2024-05-08",
        paidby: "tkash",
        amount: "KES 200.00",
    },
    { 
        item: "Material Cost",
        date: "2024-05-08",
        paidby: "mpesa",
        amount: "KES 120.00",
    },
    { 
        item: "Furniture",
        date: "2024-05-08",
        paidby: "mpesa",
        amount: "KES 180.00",
    }
];


document.addEventListener("DOMContentLoaded", () => {
    const tableBody = document.querySelector("#invoiceTable tbody");

    // Loop through the dummy data array and create table rows
    dummyData.forEach((entry, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${entry.invoiceNumber}</td>
            <td>${entry.customer}</td>
            <td>${entry.date}</td>
            <td>
                ${entry.type === "mpesa" ? `<img class="typeimages" src="/Images/mpesa.png" />` : (entry.type === "mastercard" ? `<img class="typeimages" src="/Images/debit.png" />` : `<img class="typeimages" src="/Images/tkash.png" size="10" />`)}
            </td>
            <td >${entry.status}</td>
            <td>${entry.amount}</td>
            <td>
                <div class="actions-container">
                    <button class="actions">
                        <i class="bi bi-envelope"></i>
                    </button>
                    <button class="actions">
                        <i class="bi bi-printer"></i>
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

document.addEventListener("DOMContentLoaded", () => {
    const tableBody = document.querySelector("#paymentTable tbody");

    // Loop through the dummy data array and create table rows
    paymentsData.forEach((entry, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${entry.customerID}</td>
            <td>${entry.date}</td>
            <td>
                ${entry.type === "mpesa" ? `<img class="typeimages" src="/Images/mpesa.png" />` : (entry.type === "mastercard" ? `<img class="typeimages" src="/Images/debit.png" />` : `<img class="typeimages" src="/Images/tkash.png" size="10" />`)}
            </td>
            <td >${entry.status}</td>
            <td>${entry.amount}</td>
            <td>
                <div class="actions-container">
                    <button class="actions">
                        <i class="bi bi-envelope"></i>
                    </button>
                    <button class="actions">
                        <i class="bi bi-printer"></i>
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

document.addEventListener("DOMContentLoaded", () => {
    const tableBody = document.querySelector("#expensesTable tbody");

    // Loop through the dummy data array and create table rows
    expensesData.forEach((entry, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${entry.item}</td>
            <td>${entry.date}</td>
            <td>
                ${entry.paidby === "mpesa" ? `<img class="typeimages" src="/Images/mpesa.png" />` : (entry.paidby === "mastercard" ? `<img class="typeimages" src="/Images/debit.png" />` : `<img class="typeimages" src="/Images/tkash.png" size="10" />`)}
            </td>
            <td>${entry.amount}</td>
        `;
        tableBody.appendChild(row);
    });
});
