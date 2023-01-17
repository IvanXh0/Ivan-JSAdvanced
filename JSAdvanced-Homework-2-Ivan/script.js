// ## Reminder App
// * Create a reminder app
// * There should be:
//     * An input for entering the title
//     * An input for entering priority
//     * An input for color
//     * A textarea for adding a description
//     * A button for adding the reminder
//     * A button for showing all reminders
// * When the button for adding is clicked an object needs to be created with the properties from the inputs ( title, priority, color, and description )
// * The object should then be added to an array of reminders
// * When the button for showing all reminders is clicked it should show a table with title, priority, and description columns
// * The title should be the color of the "color" property

let titleElem = document.getElementById("title");
let priorityElem = document.getElementById("priority");
let colorElem = document.getElementById("color");
let description = document.getElementById("description");
let createReminderBtn = document.getElementById("createRemainderButton");
let showReminderBtn = document.getElementById("showRemainderButton");
let reminders = [];

function Reminder(title, priority, color, description) {
  this.title = title;
  this.priority = priority;
  this.color = color;
  this.description = description;
}

createReminderBtn.addEventListener("click", () => {
  if (
    !titleElem.value ||
    !priorityElem.value ||
    !colorElem.value ||
    !description.value
  ) {
    alert("Please fill in ALL the fields before submitting!");
  } else {
    let reminder = {
      title: titleElem.value,
      priority: priorityElem.value,
      color: colorElem.value,
      description: description.value,
    };
    reminders.push(reminder);

    titleElem.value = "";
    priorityElem.value = "";
    colorElem.value = "";
    description.value = "";
  }
});

showReminderBtn.addEventListener("click", () => {
  reminders.sort(function (a, b) {
    return a.priority - b.priority;
  });

  let table = document.createElement("table");

  let headerRow = document.createElement("tr");
  let titleHeader = document.createElement("th");
  titleHeader.innerHTML = "Title";
  let priorityHeader = document.createElement("th");
  priorityHeader.innerHTML = "Priority";
  let descriptionHeader = document.createElement("th");
  descriptionHeader.innerHTML = "Description";
  headerRow.appendChild(titleHeader);
  headerRow.appendChild(priorityHeader);
  headerRow.appendChild(descriptionHeader);
  table.appendChild(headerRow);

  for (const reminder of reminders) {
    let row = document.createElement("tr");
    let title = document.createElement("td");
    title.innerHTML = reminder.title;
    title.style.color = reminder.color;
    let priority = document.createElement("td");
    priority.innerHTML = reminder.priority;
    let description = document.createElement("td");
    description.innerHTML = reminder.description;
    row.appendChild(title);
    row.appendChild(priority);
    row.appendChild(description);
    table.appendChild(row);
  }
  document.body.appendChild(table);
});
