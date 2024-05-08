const dummyData = [
    { 
        material: "Tanks",
        dimensions: "10,000l",
        quantity: "2Pcs(P)",
        primaryUnit: "300",
        
    },
    { 
        material: "Tanks",
        dimensions: "50,000l",
        quantity: "2Pcs(P)",
        primaryUnit: "200",
        
    },
    { 
        material: "Meters",
        dimensions: " ",
        quantity: "2Pcs(P)",
        primaryUnit: "1000",
    },
    { 
        material: "Pipes",
        dimensions: "6 in",
        quantity: "2Pcs(P)",
        primaryUnit: "700",
    },
    { 
        material: "Pipes",
        dimensions: "18 in",
        quantity: "2Pcs(P)",
        primaryUnit: "600",
    },
    { 
        material: "Pumps",
        dimensions: "5g/m",
        quantity: "2Pcs(P)",
        primaryUnit: "500",
    },
    { 
        material: "Boreholes",
        dimensions: "6 in",
        quantity: "2Pcs(P)",
        primaryUnit: " ",
    },
    
];

document.addEventListener("DOMContentLoaded", () => {
    const tableBody = document.querySelector("#inventoryTable tbody");

    // Loop through the dummy data array and create table rows
    dummyData.forEach((entry, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${entry.material}</td>
            <td>${entry.dimensions}</td>
            <td>${entry.quantity}</td>
            <td >${entry.primaryUnit}</td>
            <td>
                <div class="actions-container">
                    <button class="actions1">
                        View
                    </button>
                    <button class="actions2">
                        Edit
                    </button>
                    <button class="actions3">
                        Reorder
                    </button>
                    <button class="actions4">
                        Delete
                    </button>
                </div>
            </td>
        `;
        tableBody.appendChild(row);
    });
});