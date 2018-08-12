
//I created an object.create to export both functions.  
const ApiObject = Object.create(null, {
//this saves the content to the API Database once entered in the form.  
    saveJournalEntry: {
        value: (entry) => {
            //puts the entries to the API Database
            return fetch("http://localhost:8088/entries", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(entry)
            })
            .then(response => response.json())
        }
    },
    //this retrieves the information from the API Database for the funtion to put it on the DOM 
    getEntries: {
        value: () => {
            return fetch("http://localhost:8088/entries?_order=desc&_sort=id")
            .then(response => response.json());
        }
    },
// this deletes the entries in the API
    deleteEntries: {
        value: (ID) => {
            return fetch(`http://localhost:8088/entries/${ID}`,{
            method: "DELETE"
            
            })

        }

    },
    //this allows you to edit the journal entry in the API.
    replaceEntry: {
        value: (ID) => {
            
            return fetch(`http://localhost:8088/entries/${ID}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(ID)
            })
            .then(response => response.json())
        }
    },


});

module.exports = ApiObject;
