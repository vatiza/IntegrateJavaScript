document.getElementById('deposit-btn').addEventListener('click',function(){
const dFiedAmount=document.getElementById('diposite-field');
const getDepositAmount=dFiedAmount.value;
// console.log(getDepositAmount);


const depostiAmount=document.getElementById('setDepositAmount');
const setdepositAmount=depostiAmount.innerText;
depostiAmount.innerText=getDepositAmount;
})