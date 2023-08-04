// Function to add monthly savings
function addSavings() {
    const nameInput = document.getElementById('name');
    const monthInput = document.getElementById('month');
    const amountInput = document.getElementById('amount');
    const name = nameInput.value;
    const month = monthInput.value;
    const amount = amountInput.value;

    if (name === '' || month === '' || amount === '') {
        alert('Please enter name, month and amount.');
        return;
    }

    const table = document.querySelector('.savings-history table');
    const newRow = table.insertRow(-1);
    newRow.insertCell(0).textContent = name;
    newRow.insertCell(1).textContent = month;
    newRow.insertCell(2).textContent = amount;

    // Clear input fields after adding savings
    nameInput.value = '';
    monthInput.value = '';
    amountInput.value = '';
}
