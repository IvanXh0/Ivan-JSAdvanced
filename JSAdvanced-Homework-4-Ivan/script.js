//                      Task 1

// Create an html page with a table and a button. When the button is clicked show results for the first 10 planets from the Star Wars api. The information in the table are:

//     Planet Name
//     Population
//     Climate
//     Gravity

// There should be a function that makes the call to the api for the planets ( should have URL for a parameter ) There should be a function that prints planets in to the table **API URL: ** https://swapi.dev/api/planets/?page=1

//                      Task 2

// After the user clicks the button to get the first 10 planets, a button should be shown below the table that says: NEXT 10. When the button is clicked you should make another call and get the next 10 planets and change the table contents with information about the next 10 planets. After the next 10 planets are shown the button NEXT 10 should disapear and a new button PREVIOUS 10 should appear. The previous button should return the first 10 planets in the table and hide the PREVIOUS 10 button and show the NEXT 10 button.

// **API URL: ** https://swapi.dev/api/planets/?page=2

let currentPage = 1;
let nextButton;
let previousButton;

const getPlanets = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    let planets = data.results;
    let table = document.getElementById("planet-table");
    let tableContent = "";
    tableContent += `<tr>
        <th>Planet Name</th>
        <th>Population</th>
        <th>Climate</th>
        <th>Gravity</th>
    </tr>`;

    for (let i = 0; i < planets.length; i++) {
      let planet = planets[i];
      tableContent += `
      <tr>
            <td>${planet.name}</td>
            <td>${planet.population}</td>
            <td>${planet.climate}</td>
            <td>${planet.gravity}</td>
      </tr>`;
    }
    table.innerHTML = tableContent;
    table.setAttribute("border", "2");
    if (currentPage === 1) {
      if (!nextButton) {
        nextButton = document.createElement("button");
        nextButton.innerHTML = "NEXT 10";
        nextButton.addEventListener("click", () => {
          currentPage++;
          let url = `https://swapi.dev/api/planets/?page=${currentPage}`;
          getPlanets(url);
          nextButton.style.display = "none";
        });
        document.getElementById("switching-buttons").appendChild(nextButton);
      } else {
        nextButton.style.display = "block";
      }
    } else {
      if (!previousButton) {
        previousButton = document.createElement("button");
        previousButton.innerHTML = "PREVIOUS 10";
        previousButton.addEventListener("click", () => {
          currentPage--;
          let url = `https://swapi.dev/api/planets/?page=${currentPage}`;
          getPlanets(url);
          previousButton.style.display = "none";
        });
        document
          .getElementById("switching-buttons")
          .appendChild(previousButton);
      } else {
        previousButton.style.display = "block";
      }
    }
  } catch (error) {
    console.log(error);
  }
};

const showPlanets = async () => {
  let url = `https://swapi.dev/api/planets/?page=${currentPage}`;
  await getPlanets(url);
};

const button = document.getElementById("show-planets-button");
button.addEventListener("click", () => {
  showPlanets();
  button.style.display = "none";
});
