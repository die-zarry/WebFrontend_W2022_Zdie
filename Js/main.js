// function JS(){
//     const links = [
//         {
//           label: "Week1 notes", url: "week1/index.html"
//         }
//       ]

// }
const links = [

  {
    label: 'Week1_Notes',
    url: 'week1.html',
  }, // you can add other tags if you like

  {
    label: 'Week 2 Notes',
    url: 'notes2.html',
  },
  {
    label: 'Week 3 Notes',
    url: 'notes3.html',
  },
  {
    label: 'Week 4 Notes',
    url: 'notes4.html',
  },
  {
    label: 'Week 5 Notes',
    url: 'week5.html',
  },
  {
    label: 'Week 6 Notes',
    url: 'todo_list.html',
  },
  {
    label: 'Week 7 Notes',
    url: 'week7.html',
  },
  {
    label: 'Week 8 Notes',
    url: 'notes8.html',
  },
  {
    label: 'Week 9 Notes',
    url: 'bmi.html',
  },
  {
    label: 'Week 10 project',
    url: 'bmi_ls.html',
  },
  {
    label: 'Week11 Notes',
    url: 'recipe.html',
  },
  {
    label: 'Week12 project',
    url: 'bmi_ls.html',
  },
  {
    label: 'Week13 project',
    url: 'localstorage.html',
  }
];



const ol = document.getElementById('assignments'); // whatever your OL tag ID is

links.forEach(link => {

  let li = document.createElement('li');

  let a = document.createElement('a');

  a.setAttribute('href', link.url);

  a.innerText = link.label;

  // add other tags of interest if you like (date submitted, score)

  li.appendChild(a);

  ol.appendChild(li);

});