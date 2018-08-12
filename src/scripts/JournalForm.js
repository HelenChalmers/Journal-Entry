"use strict"

//this created an object with 2 functions.  Each function name is the key of that object and the vlue is the actual function.

const FormManager = Object.create(null, {

    //this function clears the form by using (.value ="") of each sections setting it as a blank string
    clearForm: {
        value: () => {
            document.querySelector("#entryTitle").value = ""
            document.querySelector("#entryContent").value = ""
        }
    },

    //this is the html version of the form creation.
    renderEntryForm: {
        value: () => {
            return `<div class = "wrapperInputDOM">
                <fieldset id="EntryFormWrapper">
                    <label for="entryTitle" id="formTitle">Title:</label>
                    <input required type="text" id="entryTitle">
                </fieldset>
                <fieldset id="formContentWrapper">
                    <label for="entryContent" id="formContent">Where is your heart?</label>
                    <textarea id="entryContent"></textarea>
                </fieldset>
                <button id="saveEntryButton">Save Entry</button>
                </div>
            `
        }
    }

})


module.exports = FormManager