/*
You are a developer for a university. Your current project is to develop a system for students to find courses they share with friends. The university has a system for querying courses students are enrolled in, returned as a list of (ID, course) pairs.

Write a function that takes in a collection of (student ID number, course name) pairs and returns, for every pair of students, a collection of all courses they share.

//Given a nested array
//return 

Sample Input:

student_course_pairs_1 = [
  ["58", "Linear Algebra"],
  ["94", "Art History"],
  ["94", "Operating Systems"],
  ["17", "Software Design"],
  ["58", "Mechanics"],
  ["58", "Economics"],
  ["17", "Linear Algebra"],
  ["17", "Political Science"],
  ["94", "Economics"],
  ["25", "Economics"],
  ["58", "Software Design"],
]

Sample Output (pseudocode, in any order):

find_pairs(student_course_pairs_1) =>
{
  "58,17": ["Software Design", "Linear Algebra"]
  "58,94": ["Economics"]
  "58,25": ["Economics"]
  "94,25": ["Economics"]
  "17,94": []
  "17,25": []
}



Additional test cases:

Sample Input:

student_course_pairs_2 = [
  ["0", "Advanced Mechanics"],
  ["0", "Art History"],
  ["1", "Course 1"],
  ["1", "Course 2"],
  ["2", "Computer Architecture"],
  ["3", "Course 1"],
  ["3", "Course 2"],
  ["4", "Algorithms"]
]



Sample output:

find_pairs(student_course_pairs_2) =>
{
  "1,0":[]
  "2,0":[]
  "2,1":[]
  "3,0":[]
  "3,1":["Course 1", "Course 2"]
  "3,2":[]
  "4,0":[]
  "4,1":[]
  "4,2":[]
  "4,3":[]
} 

Sample Input:
student_course_pairs_3 = [
  ["23", "Software Design"], 
  ["3", "Advanced Mechanics"], 
  ["2", "Art History"], 
  ["33", "Another"],
]


Sample output:

find_pairs(student_course_pairs_3) =>
{
  "23,3": []
  "23,2": []
  "23,33":[]
  "3,2":  []
  "3,33": []
  "2,33": []
}

Complexity analysis variables:

n: number of student,course pairs in the input
s: number of students
c: total number of courses being offered (note: The number of courses any student can take is bounded by a small constant)


*/

"use strict";

const studentCoursePairs1 = [
  ["58", "Linear Algebra"],
  ["94", "Art History"],
  ["94", "Operating Systems"],
  ["17", "Software Design"],
  ["58", "Mechanics"],
  ["58", "Economics"],
  ["17", "Linear Algebra"],
  ["17", "Political Science"],
  ["94", "Economics"],
  ["25", "Economics"],
  ["58", "Software Design"]
];

const studentCoursePairs2 = [
  ["0", "Advanced Mechanics"],
  ["0", "Art History"],
  ["1", "Course 1"],
  ["1", "Course 2"],
  ["2", "Computer Architecture"],
  ["3", "Course 1"],
  ["3", "Course 2"],
  ["4", "Algorithms"]
];

const studentCoursePairs3 = [
  ["23", "Software Design"], 
  ["3",  "Advanced Mechanics"], 
  ["2",  "Art History"], 
  ["33", "Another"]
];

function pairStudents(arr) {
  //init an empty object, hashmap
  let hashMap = {};
  
  //loop thru the array
  arr.forEach(el => hashMap[el[0]] ? hashMap[el[0]].push(el[1]) : hashMap[el[0]] = [el[1]])
  console.log(hashMap)
  //if there isn't a key in the object obj[arr[i][0]] = [arr[i][1]]
  //if the key already exists in the object push the arr[i][1]
  //{"0": ["Advanced Mechanics", "Art History"], 
    //  "1": ["Course 1", "Course 2"]
  //"2: ["Computer Architechture"],
  //"3": ['Course 1', 'Course 2']
  //"4": ['Algorithms']
  
  //create an array that has all of arr[i][0] once;
  const studentsArr = [...new Set(arr.map(el => el[0]))]
  console.log(studentsArr)
  let resultHash = {}
  //"0, 1" : obj["0"].filter(el => obj['1'].includes(el));
  //"0, 2" : obj["0"].filter(el => obj['2'].includes(el));
  //'0, 3': : obj["0"].filter(el => obj['3'].includes(el));
  //"0, 4"  : obj["0"].filter(el => obj['4'].includes(el));
  // "1, 2: : obj["1"].filter(el => obj['2'].includes(el))
// // "1, 3": : obj["1"].filter(el => obj['3'].includes(el))
  //"1, 4": obj["1"].filter(el => obj['4'].includes(el));
  
//}
  for(let i=0; i<studentsArr.length; i++){
    for(let j=1; j<studentsArr.length; j++){
      if(i!==j){
        const str = studentsArr[i]+", " + studentsArr[j];
        console.log(str)
        const strOpp = studentsArr[j]+", "+ studentsArr[i];
        if(!resultHash[str] || !resultHash[strOpp]){
          resultHash[str] = hashMap[studentsArr[i]].filter(el => hashMap[studentsArr[j]].includes(el))
         }
      }
    }
  }
  
  
  return resultHash;
}

console.log(pairStudents(studentCoursePairs3));
console.log(pairStudents(studentCoursePairs2));
console.log(pairStudents(studentCoursePairs1));
