// add money to the account

document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();

    const addMOneyInput = document.getElementById('input-add-money').value;
    const addPinnumber = document.getElementById('input-pin-number').value;

    if(addPinnumber === '1234') {
        const balance = document.getElementById('current-value').innerText
        const addInput = parseFloat(addMOneyInput);
        const balanceNumber = parseFloat(balance);
        const updatedBalance = addInput + balanceNumber;
        console.log(updatedBalance)
        document.getElementById('current-value').innerText = updatedBalance;
    }
    else {
        alert('please try again')
    }

})