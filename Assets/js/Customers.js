const dummyData = [
    { name: "John Doe", address: "123 Main St, Cityville", phone: "555-1234", meterNo: "ABC123456" },
    { name: "Jane Smith", address: "456 Elm St, Townville", phone: "555-5678", meterNo: "DEF987654" },
    { name: "Michael Johnson", address: "789 Oak St, Villageton", phone: "555-2468", meterNo: "GHI654321" },
    { name: "Alice Brown", address: "321 Pine St, Forestville", phone: "555-7890", meterNo: "JKL789012" },
    { name: "Bob Wilson", address: "654 Maple St, Hilltown", phone: "555-1357", meterNo: "MNO012345" },
    { name: "Emily Garcia", address: "987 Cedar St, Lakeside", phone: "555-8024", meterNo: "PQR345678" },
    { name: "David Martinez", address: "246 Birch St, Riverside", phone: "555-3690", meterNo: "STU567890" },
    { name: "Sarah Miller", address: "135 Oak St, Sunnyside", phone: "555-4862", meterNo: "VWX789012" },
    { name: "Daniel Taylor", address: "468 Elm St, Meadowview", phone: "555-9753", meterNo: "YZA123456" },
    { name: "Jessica Thompson", address: "789 Cedar St, Hillcrest", phone: "555-6420", meterNo: "BCD234567" },
    { name: "Andrew Anderson", address: "357 Pine St, Riverdale", phone: "555-8036", meterNo: "EFG456789" },
    { name: "Olivia White", address: "582 Maple St, Greenwood", phone: "555-2379", meterNo: "HIJ678901" },
    { name: "James Lee", address: "963 Birch St, Lakeshore", phone: "555-5148", meterNo: "KLM890123" },
    { name: "Sophia Scott", address: "246 Cedar St, Brookside", phone: "555-9713", meterNo: "NOP012345" },
    { name: "William Clark", address: "357 Elm St, Oakwood", phone: "555-6582", meterNo: "QRS234567" },
    { name: "Mia Rodriguez", address: "468 Pine St, Hillcrest", phone: "555-2097", meterNo: "TUV456789" },
    { name: "Ethan Hall", address: "579 Oak St, Sunnyside", phone: "555-3840", meterNo: "WXY567890" },
    { name: "Isabella Young", address: "690 Maple St, Meadowview", phone: "555-7465", meterNo: "ZAB678901" },
    { name: "Aiden King", address: "701 Cedar St, Riverside", phone: "555-8324", meterNo: "BCD789012" },
    { name: "Chloe Adams", address: "802 Birch St, Lakeside", phone: "555-1709", meterNo: "EFG890123" }
];

document.addEventListener("DOMContentLoaded", () => {
    const tableBody = document.querySelector("#table tbody");

    // Loop through the dummy data array and create table rows
    dummyData.forEach(entry => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${entry.name}</td>
            <td>${entry.address}</td>
            <td>${entry.phone}</td>
            <td>${entry.meterNo}</td>
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
