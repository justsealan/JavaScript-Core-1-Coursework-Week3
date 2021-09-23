/*
  Only students who have attended enough classes are eligible to sit an exam.

  Create a function which:
  - Accepts an array which contains all the students' names and their attendance counts
    (see tests to confirm how this data will be structured)
  - Returns an array containing only the names of the who have attended AT LEAST 8 classes
*/

function getEligibleStudents(arr) {
  const eligibleStudents = [];
    for (let i = 0; i < arr.length; i++) {        // i=0            i=0
       for (let j = 0; j < arr[i].length; j++) {  // j=0            j=1
           if (arr[i][j] >= 8) {                  // arr[0][0] = 8  
             eligibleStudents.push(arr[i][0]);    //Ahmed    
           }
       }

    }
     return eligibleStudents;
}
  


/* ======= TESTS - DO NOT MODIFY ===== */

test("getEligibleStudents function works", () => {
  const attendance = [
    ["Ahmed", 8],
    ["Clement", 10],
    ["Elamin", 6],
    ["Adam", 7],
    ["Tayoa", 11],
    ["Nina", 10],
  ];
  expect(getEligibleStudents(attendance)).toEqual([
    "Ahmed",
    "Clement",
    "Tayoa",
    "Nina",
  ]);
});

test("getEligibleStudents function can return empty array", () => {
  const attendance = [["Jacob", 7]];
  expect(getEligibleStudents(attendance)).toEqual([]);
});
