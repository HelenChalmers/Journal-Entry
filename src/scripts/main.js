console.log("You Rock");

//these pulls the functions from these various pages.

const $ = require("jquery")
const FormManager = require("./JournalForm")
const  ApiObject = require("./DataManager")
const renderContent = require("./JournalContentDom")



// Render the journal entry form
document.querySelector("#journalForm").innerHTML = FormManager.renderEntryForm()

// Add an event listener for the save button - when the save button is clicked a new entry is created.
document.querySelector("#saveEntryButton").addEventListener("click", () => {
    // Get form field values
    // Create object from them
    // Add timestamp
    //this is getting the values and saving it in an object "newEntry" so we can use it in other places.  
    const newEntry = {
        title: document.querySelector("#entryTitle").value,
        content: document.querySelector("#entryContent").value,
        //this adds the time stamp
        date: Date.now()
    }
        // POST to API
        //pulling function from DataManager (APIObject.saveJournalEntry) passing the new entry through it - and then clearing the form (FormManager) and then storing it to the DOM
          ApiObject.saveJournalEntry(newEntry).then(() => {
            // Clear the form fields
            FormManager.clearForm()  
            //this clears the DOM         
            document.querySelector("#journalEntryDom").innerHTML = "";
            ApiObject.getEntries().then(result => {
                result.forEach(entry => {
                //document.queryselector tells it where in the html to put it and renderContent tells it what to look like.  (as stated in JournalContentDom)
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
        //document.queryselector tells it where in the html to put it and renderContent tells it what to look like.  (as stated in JournalContentDom)
        document.querySelector("#journalEntryDom").innerHTML += renderContent(entry)
    })

})
}
listEntries()

document.querySelector("#journalEntryDom").addEventListener("click", (event) => {
    console.log(event);
    if(event.target.id.split("--")[0] === "delete"){
        console.log("Hey!", event.target.id);
        let id = event.target.id.split("--")[1]
        console.log(id);
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





