const links = [{
    label: "Week 01 Notes",
    url: "W01/"
},
{
    label: "Quiz Ninja Project",
    url: "coding-exercises/quizninja/"
}, 
{
    label: "Local Storage Exercise",
    url: "coding-exercises/local-storage/"
},
{
    label: "Week 02 Notes",
    url: "W02/"
}, 
{
    label: "Week 2 Team Activity",
    url: "W02/w02-team-activity.html"
},
{
    label: "Drum Kit Exercises from JavaScript30",
    url: "coding-exercises/javascript-30/javascript-drumkit/"
},
{
    label: "Week 03 Notes",
    url: "W03/"
},
{
    label: "JavaScript Calculator using 'this'",
    url: "W03/calculator.html"
},
{
    label: "Week 3 Team Actvity",
    url: "coding-exercises/javascript-30/array-cardio-day1"
},
{
    label: "Dice Roller App",
    url: 'coding-exercises/dnd-dice-roller'
},
{
    label: "Mortgage Calculator Form",
    url: "coding-exercises/forms/index.html"
},
{
    label: "Week 04 Notes",
    url: "W04/"
}
];

const list = document.querySelector("ol");

for (const item of links) {
    // Create list element
    const li = document.createElement('li');
    // Create list item
    const a = document.createElement('a');
    // Set the Contents
    a.setAttribute('href', item.url);
    a.textContent = item.label;
    // Add to the list
    li.appendChild(a);

    // Add item to the ol list
    list.appendChild(li);
}

// I like the way this function works but I am going to be working on this and making work better
// with what I am doing as we continue on in the course

// function createOL(array) {
//     // Create list element
//     var list = document.getElementById("list");

//     for (var i = 0; i < array.length; i++) {
//         // Create list item
//         var li = document.createElement("li");
//         // Set the Contents
//         li.appendChild(document.createTextNode(array[i]));
//         // Add to the list
//         list.appendChild(li);
//     }

//     return list;
// }

// document.getElementById('list').appendChild(createOL(links));

// createOL(links);