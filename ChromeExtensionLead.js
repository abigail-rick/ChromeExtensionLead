chrome://extensions/

const inputBtn = document.getElementById('input-btn');
const textInput = document.getElementById('input-el');  
const ulLi = document.getElementById('ul-el');
let myLeads = [];

inputBtn.addEventListener("click", function(){
    myLeads.push(textInput.value);

    renderLeads();
    textInput.value = "";
})
  
function renderLeads(){
    let listItems = "";
    for(let i = 0; i < myLeads.length; i++){
        listItems = `<li>
        <a target='_blank' href='${myLeads[i]}'>
        ${myLeads[i]}
        </a>
        </li>`
}
ulLi.innerHTML += listItems;
}
