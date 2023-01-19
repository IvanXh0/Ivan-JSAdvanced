$(document).ready(function () {
  let callBtn = document.getElementById("printBtn");
  let result = document.getElementById("result");
  callBtn.addEventListener("click", function () {
    $.ajax({
      url: "https://swapi.dev/api/people/1",
      success: function (response) {
        result.innerHTML =
          "<h1>" +
          response.name +
          "</h1>" +
          "<table id='table' style='border: 1px solid black'>" +
          "<tr>" +
          "<td>Height</td>" +
          "<td>" +
          response.height +
          " cm" +
          "</td>" +
          "</tr>" +
          "<tr>" +
          "<td>Weight</td>" +
          "<td>" +
          response.mass +
          " kg" +
          "</td>" +
          "</tr>" +
          "<tr>" +
          "<td>Eye color</td>" +
          "<td>" +
          response.eye_color +
          "</td>" +
          "</tr>" +
          "<tr>" +
          "<td>Hair color</td>" +
          "<td>" +
          response.hair_color +
          "</td>" +
          "</tr>" +
          "</table>";
      },
      error: function (error) {
        console.log(error);
      },
    });
  });
});
