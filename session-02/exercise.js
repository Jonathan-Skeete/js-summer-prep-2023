/*
  Transform the input array of strings into uppercase strings
  For example, for the input ["cat", "hat"], return ["CAT", "HAT"]
*/
function transformArrayToUpper(listOfStrings) {
  let uppercaseStrings = [];
  for (let i = 0; i < listOfStrings.length; i++) {
    uppercaseStrings.push(listOfStrings[i].toUpperCase());
  }
  return uppercaseStrings;
  // return listOfStrings.map((word) => word.toUpperCase());
}


/*
  Write a function that returns the sum of all student ages.
  The function will be passed an array of objects and the result
  will be the sum of all ages.
  - Note, not all objects will contain an age. Omit these objects.
  For example, for the input:
    [{ name: 'Sandra', age: 31 }, {}, { name: 'Didi', age: 20}]
    the function should return 51
*/
function sumOfAllAges(listOfStudentObjects) {
  let sum = 0;
  // for (let i = 0; i < listOfStudentObjects.length; i++){
  //   if (listOfStudentObjects[i].age) {
  //     sum += listOfStudentObjects[i].age;
  //   }
  // }
  
  for (let studentObject of listOfStudentObjects) {
    sum += studentObject.age ? studentObject.age : 0
  }
  return sum;
}


module.exports = { transformArrayToUpper, sumOfAllAges };
