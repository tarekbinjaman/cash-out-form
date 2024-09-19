document.getElementById('btn-cash-out').addEventListener('click', function(event) {
    event.preventDefault();
    const cashOutfield = document.getElementById('input-cash-out').value;
    const cashOutPin   = document.getElementById('input-cash-out-pin-number').value;
    const cashOutNumber = parseFloat(cashOutfield);

    if(cashOutPin === '1234') {
        const balance = document.getElementById('current-value').innerText;
        const balanceNumber = parseFloat(balance);
        const newBalance = balanceNumber - cashOutNumber;
        document.getElementById('current-value').innerText = newBalance;
    }

    else{
        alert('please try again')
    }

})
