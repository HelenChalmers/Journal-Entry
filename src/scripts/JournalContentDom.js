"use strict"

//this is what the journal entry looks like on the DOM
function renderContent(data) {
    return `<div class="wrapper">
        <div class="entry-card" id="entry-id--${data.id}">
        <h2 id="title--${data.id}">${data.title}</h2>
        <p id="content--${data.id}">${data.content}</p>
        <footer>
    <time class="entry__timestamp" id="date--${data.id}">${new Date(data.date).toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            hour: "numeric",
            minute: "numeric",
            month: "long",
            day: "numeric"
        })}</time>
</footer>
        <button class="deleteButton" id="delete--${data.id}">Delete</button>
        <button class="editButton" id="edit--${data.id}">Edit</button>
        </div>
        </div>`
}

module.exports = renderContent;