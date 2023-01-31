/* Exercise 1

There is a JSON file with students. Make a call to the file and get the following data from it:

    All students with an average grade higher than 3
    All female student names with an average grade of 5
    All male student full names who live in Skopje and are over 18 years old
    The average grades of all female students over the age of 24
    All male students with a name starting with B and average grade over 2

    */

axios
  .get("students.json")
  .then((response) => {
    console.log("Connection with the JSON data file has been established!");
    let students = response.data;

    // All students with an average grade higher than 3
    let averageGradeHigherThanThree = students.filter(
      (student) => student.averageGrade > 3
    );
    console.log(
      "All students with an average grade higher than 3: ",
      averageGradeHigherThanThree
    );

    // Getting all female student names with an average grade of 5

    let femaleStudentsWithAverageGradeOfFive = students
      .filter(
        (student) => student.gender === "Female" && student.averageGrade === 5
      )
      .map((student) => student.firstName);
    console.log(
      "All female student names with an average grade of 5:",
      femaleStudentsWithAverageGradeOfFive
    );

    // All male student full names who live in Skopje and are over 18 years old

    let maleStudentsInSkopjeAndOverEighteen = students
      .filter((student) => student.city === "Skopje" && student.age >= 18)
      .map((student) => `${student.firstName} ${student.lastName}`);
    console.log(
      "All male student full names who live in Skopje and are over 18 years old",
      maleStudentsInSkopjeAndOverEighteen
    );

    // The average grades of all female students over the age of 24

    let femaleStudentsOverTwentyFour = students.filter(
      (student) => student.gender === "Female" && student.age > 24
    );

    let sumGradesOfFemaleStudentsOverTwentyFour =
      femaleStudentsOverTwentyFour.reduce(
        (accumulator, currentIndex) => accumulator + currentIndex.averageGrade,
        0
      );

    let averageGradesOfFemaleStudentsOverTwentyFour =
      sumGradesOfFemaleStudentsOverTwentyFour /
      femaleStudentsOverTwentyFour.length;

    console.log(
      "The average grades of all female students over the age of 24: ",
      Number(averageGradesOfFemaleStudentsOverTwentyFour.toFixed(3))
    );

    // All male students with a name starting with B and average grade over 2

    let maleStudentsStartingWithBandGradeOverTwo = students.filter(
      (student) => student.firstName.startsWith("B") && student.averageGrade > 2 &&
        student.gender === "Male"
    );
    console.log(
      "All male students with a name starting with B and average grade over 2:",
      maleStudentsStartingWithBandGradeOverTwo
    );
  })

  .catch((error) => {
    console.log("An error occured while fetching data from the JSON. ", error);
    return;
  });
