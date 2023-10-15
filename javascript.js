console.log('hello');
const liCollection = document.getElementsByTagName('li');
// console.log(liCollection);
for (const li of liCollection) {
    console.log(li.innerText)
}
const allHeadingTag = document.getElementsByTagName('h1');

for (const h1 of allHeadingTag) {
    console.log(h1);
}
const liName=document.getElementsByTagName('li');
for (const allLi of liName){
    console.log(allLi.innerText)
}

const getId=document.getElementById('fruits-color')
console.log(getId.innerText)