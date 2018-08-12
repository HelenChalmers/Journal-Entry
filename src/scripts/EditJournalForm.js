
//grabs the new value of the entry and stores it into a variable.
function editedJournal () {
    let editedContent = {
               title: document.querySelector("#entryTitle").value,
                content: document.querySelector("#entryContent").value
            };
            return editedContent
        };


        



// ------------Ricky's Solution to Edit the 

// let editJournal = Object.create(null, {
//     saveEditedEntry: {
//         value: () => {
//             let editedEntry = {
//                 title: document.querySelector("#editedTitle").value,
//                 content: document.querySelector("#editedContent").value,
//                 date: `edited on: ${getDate()}`
//             }
//             return editedEntry;
//         }
//     },
//     transformEntry: {
//         value: (event) => {
//             let entryCard = event.target.parentElement.parentElement;
//             let title = document.querySelector(`#title--${event.target.id.split("--")[1]}`);
//             let content = document.querySelector(`#content--${event.target.id.split("--")[1]}`)
//             titleText = title.textContent;
//             contentText = content.textContent;
//             entryCard.innerHTML =
//                 `<input type="text" value="${titleText}" id="editedTitle">
//                 <textarea id="editedContent">${contentText}</textarea>
//                 <div class="button-container">
//                     <button class="save-btn" id="save--${event.target.id.split("--")[1]}">Save Your Changes!</button>
//                     <button class="delete-btn" id="delete--${event.target.id.split("--")[1]}">Remove This Entry</button>
//                 </div>`
//         }
//     }
// });

// module.exports = editJournal;