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