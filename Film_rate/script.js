document.addEventListener("DOMContentLoaded", function () {
    const dataTable = document.getElementById("data-table").getElementsByTagName("tbody")[0];
    const dataForm = document.getElementById("data-form");
    const addBtn = document.getElementById("add-btn");

    addBtn.addEventListener("click", function () {
        const name = document.getElementById("name").value;
        const rating = document.getElementById("rating").value;
        const date = document.getElementById("date").value;

       
        if (name && rating && date) {
            const newRow = dataTable.insertRow();
            const cell1 = newRow.insertCell(0);
            const cell2 = newRow.insertCell(1);
            const cell3 = newRow.insertCell(2);
            const cell4 = newRow.insertCell(3);

            cell1.innerText = dataTable.rows.length;
            cell2.innerText = name;
            cell3.innerText = rating;
            cell4.innerText = date;

            
            dataForm.reset();
        } else {
            alert("Please fill out all fields in the form.");
        }
    });
});
