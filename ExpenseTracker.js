let expenses = [];
let totalAmount = 0;

const categorySelect = document.getElementById('category-sel');
const amountInput = document.getElementById('Amount');
const dateInput = document.getElementById('date');
const addBtn = document.getElementById('add-btn');
const expensesTableBody = document.getElementById('expense-table-body');
const totalAmountCell = document.getElementById('total-amount');


addBtn.addEventListener('click',function(){
    const category = categorySelect.value;
    const amount = Number(amountInput.value);
    const date = dateInput.value;

    if(category === ''){
        alert('Plz Select Category');
        return;
    }
    if(isNaN(amount) || amount <= 0){
        alert('Enter a valid num');
        return;
    }
    if(date === ''){
        alert('Plz select a date');
        return;
    }

    const expense = { category, amount, date };
    expenses.push(expense);
    totalAmount += amount;
    totalAmountCell.textContent = totalAmount;

    const newRow = expensesTableBody.insertRow();
    const categoryCell = newRow.insertCell();
    const amountCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();
    const deleteBtn = document.createElement('button');

    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click',function(){

const index = expenses.indexOf(expense);

          if(index > -1 ){

        expenses.splice(index, 1);
        totalAmount -= expense.amount;
        totalAmountCell.textContent = totalAmount;

        expensesTableBody.deleteRow(newRow.rowIndex);
}
    });

   

    categoryCell.textContent = expense.category;
    amountCell.textContent = expense.amount;
    dateCell.textContent = expense.date;
    deleteCell.appendChild(deleteBtn);

});

for(const expense of expenses){
    totalAmount += expense.amount;
    totalAmountCell.textContent = totalAmount;

    const newRow = expensesTableBody.insertRow();
    const categoryCell = newRow.insertCell();
    const totalAmountCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();
    const deleteBtn = document.createElement('button');

    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click',function(){
        expenses.splice.indexOf((expense),1);

        totalAmount -= expense.amount;
        totalAmountCell.textContent = totalAmount;

        expensesTableBody.removeChild(newRow);

        categoryCell.textContent = expense.category;
    amountCell.textContent = expense.amount;
    dateCell.textContent = expense.date;
    deleteCell.appendChiild(deleteBtn);
    });
    


}