console.log("You Rock");

//these pulls the functions from these various pages.
const $ = require("jquery")
const FormManager = require("./JournalForm")
const  ApiObject = require("./DataManager")
const renderContent = require("./JournalContentDom")



// Render the journal entry form, telling it where to place it on the DOM
document.querySelector("#journalForm").innerHTML = FormManager.renderEntryForm()

// Add an event listener for the save button - The goal is for when the save button is clicked a new entry is created.
document.querySelector("#saveEntryButton").addEventListener("click", () => {
    // Get form field values
    // Create object from them
    // Add timestamp
    //this is getting the values and saving it in an object "newEntry" so we can use it in other places. It targets the ids in the form so that the content entered in the form can be used elsewhere.   
    const newEntry = {
        title: document.querySelector("#entryTitle").value,
        content: document.querySelector("#entryContent").value,
        //this adds the time stamp (in milliseconds)
        date: Date.now()
    }
        // POST to API
        //using function in DataManager (APIObject.saveJournalEntry) passing the new entry through it and saving to database - and then clearing the form (FormManager) and then storing it to the DOM
          ApiObject.saveJournalEntry(newEntry).then(() => {
            // Clears the form by calling the clearForm function located on the JournalForm.js tab.
            FormManager.clearForm()  
            //this clears the DOM         
            document.querySelector("#journalEntryDom").innerHTML = "";
            //this retrieves the entries in the database by calling the getEntries function written.  Once retrieved then uses a forEach loop to run through all entries in the database 
            ApiObject.getEntries().then(result => {
                result.forEach(entry => {
                //document.queryselector tells it where in the html to put it and renderContent tells it what to look like.  (as stated in JournalContentDom) ultimately putting it to the DOM
                document.querySelector("#journalEntryDom").innerHTML += renderContent(entry)     
            })
        })
    })
})

//alllll things in the database - APIOBject accesses what is being exported and getEntries is the function that we want to use.  That gets the information and uses a promise to tell it what to do next. 
//then we use a For Each loop to go through the array and writing it to HTML 
function listEntries() {
    //This clears something **ask what it does**
    document.querySelector("#journalEntryDom").innerHTML = "";
    ApiObject.getEntries().then(result => {
    result.forEach(entry => {
        //document.queryselector tells it where in the html to put it and renderContent tells it what to look like.  (as stated in JournalContentDom) ultimately putting it to the dom.
        document.querySelector("#journalEntryDom").innerHTML += renderContent(entry)
    })

})
}
listEntries()

//THis makes the delete button work.   

//
document.querySelector("#journalEntryDom").addEventListener("click", (event) => {
    console.log(event);
    if(event.target.id.split("--")[0] === "delete"){
        console.log("Hey!", event.target.id);
        let id = event.target.id.split("--")[1]
        console.log(id);
        //calls the deleteEntries function so that the entry is deleted on the Database.
        ApiObject.deleteEntries(id).then(()=> {
            listEntries()
        }) 

    }
        
})

//------------------Alejandro's version ------------------------------------
// document.body.addEventListener("click", () => {
//     if (event.target.className === "delete-button") {
//         event.target.parentElement.remove();
//         dbCalls.deleteJournalEntry(event.target.id)
//     }
// })





