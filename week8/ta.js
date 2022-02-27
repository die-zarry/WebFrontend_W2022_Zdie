const output = document.getElementById("outputData");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

fetch('https://swapi.dev/api/people')
    .then((response) => {
        if (response.ok) {
            return response;
        }
        throw Error();
        (response.statusText)
    })
    .then(response => response.json())
    .then(data => {

        const table = `<table>
                    <tr>
                    <th>Name</th>
                    <th>Height</th>
                    <th>Skin Color</th>
                    <th>Eye Color</th>
                    <th>Gender</th>
                    </tr>
                    <tr>`
        let results = data.results;

        let p = results.map(people =>
            `<td>${people.name}</td><td>${people.height}</td><td>${people.skin_color}</td>
        <td>${people.eye_color}</td><td>${people.gender}</td></tr>`);
        output.innerHTML = table + p + `</table>`;

        // let next = data.next;
        // let count = data.count;

        // nextButton.addEventListener("click", () => {nextUp(next)});
    })
    .catch(error => console.log('There is error', error));