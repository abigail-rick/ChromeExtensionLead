let myLeads = []; 

const inputBtn = document.getElementById('input-btn');
const deleteBtn = document.getElementById('delete-btn');
const inputEl = document.getElementById('input-el');  
const ulLi = document.getElementById('ul-el');
const saveBtn = document.getElementById('save-btn');
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if(leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    render(myLeads);
}

saveBtn.addEventListener("click", function(){
chrome.tabs.query({active: true, currentWindow: true,}, function(tabs){
myLeads.push(tabs[0].url);
localStorage.setItem("myLeads", JSON.stringify(myLeads) );
render(myLeads);
})
});



function render(leads){
    let listItems = "";
    for(let i = 0; i < leads.length; i++){
        listItems = `
        <li>
        <a target='_blank' href='${leads[i]}'>
        ${leads[i]}
        </a>
        </li>`
}
    ulLi.innerHTML = listItems;
}

deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear();
    myLeads= [];
    render(myLeads);
});

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value); 
    inputEl.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
});
 