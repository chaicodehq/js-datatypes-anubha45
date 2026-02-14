/**
 * 📝 School Report Card Generator
 *
 * Sharma ji ke Dete ka report card generate karna hai! Student ka naam aur
 * subjects ke marks milenge, tujhe pura analysis karke report card banana hai.
 *
 * Rules:
 *   - student object: { name: "Rahul", marks: { maths: 85, science: 92, ... } }
 *   - Calculate using Object.values() and array methods:
 *     - totalMarks: sum of all marks (use reduce)
 *     - percentage: (totalMarks / (numSubjects * 100)) * 100,
 *       rounded to 2 decimal places using parseFloat(val.toFixed(2))
 *     - grade based on percentage:
 *       "A+" (>= 90), "A" (>= 80), "B" (>= 70), "C" (>= 60), "D" (>= 40), "F" (< 40)
 *     - highestSubject: subject name with highest marks (use Object.entries)
 *     - lowestSubject: subject name with lowest marks
 *     - passedSubjects: array of subject names where marks >= 40 (use filter)
 *     - failedSubjects: array of subject names where marks < 40
 *     - subjectCount: total number of subjects (Object.keys().length)
 *   - Hint: Use Object.keys(), Object.values(), Object.entries(),
 *     reduce(), filter(), map(), Math.max(), Math.min(), toFixed()
 *
 * Validation:
 *   - Agar student object nahi hai ya null hai, return null
 *   - Agar student.name string nahi hai ya empty hai, return null
 *   - Agar student.marks object nahi hai ya empty hai (no keys), return null
 *   - Agar koi mark valid number nahi hai (not between 0 and 100 inclusive),
 *     return null
 *
 * @param {{ name: string, marks: Object<string, number> }} student
 * @returns {{ name: string, totalMarks: number, percentage: number, grade: string, highestSubject: string, lowestSubject: string, passedSubjects: string[], failedSubjects: string[], subjectCount: number } | null}
 *
 * @example
 *   generateReportCard({ name: "Rahul", marks: { maths: 85, science: 92, english: 78 } })
 *   // => { name: "Rahul", totalMarks: 255, percentage: 85, grade: "A",
 *   //      highestSubject: "science", lowestSubject: "english",
 *   //      passedSubjects: ["maths", "science", "english"], failedSubjects: [],
 *   //      subjectCount: 3 }
 *
 *   generateReportCard({ name: "Priya", marks: { maths: 35, science: 28 } })
 *   // => { name: "Priya", totalMarks: 63, percentage: 31.5, grade: "F", ... }
 */
export function generateReportCard(student) {
  // Your code here
  if(typeof student !== 'object' || student == null) return null;
  if(typeof student.name !== 'string' || student.name.trim() == "" ) return null;
  if(typeof student.marks !== 'object' || student.marks == null) return null;
  // for(let subject in student.marks){
  //   const mark = student.marks[subject];

  //   if(typeof mark !== 'number' || mark<0 || mark>100) return null;
  // }
  let totalMarks=0;
  let percentage;
  let numSubjects=0;
  let highestmark=-1,lowestmark=101;
  let highestSubject ="",lowestSubject="";
  const subjectnames = Object.keys(student.marks);
  const values = Object.values(student.marks);
  if(subjectnames.length === 0) return null;
  let failedSubjects = [], passedSubjects =[];
  for(var i=0; i<values.length;i++)
  {
    if(typeof values[i] !== 'number' || values[i]<0 || values[i]>100) return null;
    else{
          if(values[i]>highestmark){ highestmark=values[i]; highestSubject = subjectnames[i];}
          if(values[i]<lowestmark){ lowestmark=values[i]; lowestSubject = subjectnames[i]};
          totalMarks = totalMarks + values[i];
          numSubjects++;
          if(values[i]<40) failedSubjects.push(subjectnames[i]);
          else passedSubjects.push(subjectnames[i]);
    }
  }
  percentage = parseFloat(((totalMarks/numSubjects)).toFixed(2));
  let grade;
  if(percentage>=90) grade="A+";
  else if(percentage>=80) grade="A";
  else if(percentage>=70) grade="B";
  else if(percentage>=60) grade="C";
  else if(percentage>=40) grade="D";
  else grade="F";

  return {name :student.name, totalMarks :totalMarks, percentage: percentage, grade:grade, highestSubject:highestSubject,lowestSubject:lowestSubject,passedSubjects:passedSubjects,failedSubjects:failedSubjects, subjectCount:numSubjects }
}
