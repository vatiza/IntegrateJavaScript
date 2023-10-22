//! deposit btn
document.getElementById('deposit-btn').addEventListener('click', function () {
    const dFiedAmount = document.getElementById('diposite-field');
    const newDepositAmount_string = dFiedAmount.value;
    const newDepositAmount_num = parseFloat(newDepositAmount_string);
    // console.log(getDepositAmount);
    const totalDepostiAmount = document.getElementById('setDepositAmount');

    const previousDepositAmout_string = totalDepostiAmount.innerText;
    const previousDepositAmout_Numebr = parseFloat(previousDepositAmout_string);
    const SumNewDepositAmount = previousDepositAmout_Numebr + newDepositAmount_num;
    totalDepostiAmount.innerText = SumNewDepositAmount;

    const totalBalanceAmount = document.getElementById('balance-total');
    const previousTotalAmount_string = totalBalanceAmount.innerText;
    const previousTotalAmount_number = parseFloat(previousTotalAmount_string);

    const sumTotalBalance = previousTotalAmount_number + newDepositAmount_num;
    totalBalanceAmount.innerText = sumTotalBalance;
    dFiedAmount.value = '';

})
document.getElementById('withdrow-btn').addEventListener('click', () => {
    const newwithdrowField = document.getElementById('withdrow-field');
    const newwithdrowFieldString = newwithdrowField.value;
    const newWithdrowFieldtoNum = parseFloat(newwithdrowFieldString);

    const totalWithDrowElement = document.getElementById('setWithDrawAmount');
    const totalWithDrowElementString = totalWithDrowElement.innerText;
    const totalWithDrowElementToNumber = parseFloat(totalWithDrowElementString);

    const sumTotalWithDrawAmmount = newWithdrowFieldtoNum + totalWithDrowElementToNumber;
    // console.log(sumTotalWithDrawAmmount);
    totalWithDrowElement.innerText = sumTotalWithDrawAmmount;

    const totalBalanceElement = document.getElementById('balance-total');
    const totalBalanceElementString = totalBalanceElement.innerText;
    const totalPreviousAmountNum = parseFloat(totalBalanceElementString);
    const setNewBalance = totalPreviousAmountNum - newWithdrowFieldtoNum;
    totalBalanceElement.innerText = setNewBalance;

    newwithdrowField.value = '';


})