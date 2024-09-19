import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getDatabase, 
    ref,
    push,
    onValue,
    remove } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-database.js";

const firebaseConfig = {
   databaseURL: "https://lead-tracker-app-8ec04-default-rtdb.firebaseio.com/"
}

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const referenceInDB = ref(database, "leads");

const inputBtn = document.getElementById('input-btn');
const deleteBtn = document.getElementById('delete-btn');
const inputEl = document.getElementById('input-el');  
const ulLi = document.getElementById('ul-el');

function render(leads){
    let listItems = "";
    for(let i = 0; i < leads.length; i++){
        listItems += `
        <li>
        <a target='_blank' href='${leads[i]}'>
        ${leads[i]}
        </a>
        </li>`
}
    ulLi.innerHTML = listItems;
}

onValue(referenceInDB, function(snapshot){
    const snapshotDoesExist = snapshot.exists();
    if (snapshotDoesExist){
    const snapshotValues =snapshot.val();
    const leads = Object.values(snapshotValues);
    render(leads);
    }

})

deleteBtn.addEventListener("dblclick", function(){
    remove(referenceInDB);
    ulLi.innerHTML = ""
});

inputBtn.addEventListener("click", function(){
    push(referenceInDB, inputEl.value);
    console.log(inputEl.value); 
    inputEl.value = "";
   
});
 