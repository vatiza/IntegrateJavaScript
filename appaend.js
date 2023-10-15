// 1 where to add elemnt
// const addelemnt = document.getElementById('bd');
// const lia=document.createElement('li');
// lia.innerText('Indian');
// addelemnt.appendChild(lia);

const mainContainer = document.getElementById('main-content');
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My Bangladesh';
section.appendChild(h1);
const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'ILove bd';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'Add li2';
ul.appendChild(li2);

section.appendChild(ul)
mainContainer.appendChild(h1)


const addDress=document.createElement('section');
addDress.innerHTML=`
<h1>Narail Sadar Narial</h1>
<ul>
<li>Naragati Thana</li>
<li>Jessore</li>
</ul>
`
mainContainer.appendChild(addDress)