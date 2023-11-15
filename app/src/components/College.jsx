import {useState} from 'react';
import StudentList from './StudentList';
import CreateStudent from './CreateStudent';
import data from '../data'

const College = () => {
  let [students, setStudents] = useState(data);

  const removeStudent = (id)=>{
    let newStudents = students.filter(student=>student.id!==id);
    setStudents(newStudents);
  }

  const newStudent = (first_name, last_name, email, course)=>{
    let id = students.length+1;
    let student = {
      id: students.length+1,
      first_name: first_name,
      last_name: last_name,
      email: email,
      course: course
    };

    setStudents((prevList) => [student, ...prevList]);
    // console.log(students)
  }

  return (
    <>
      <CreateStudent newStudent={newStudent}></CreateStudent>
      <div className='studentCont'>
        {students.map(student=>{
          console.log(student)
          return (
            <StudentList key={student.id} data={student} removeStudent={removeStudent}></StudentList>
          )
        })} 
      </div>
    </>
  )
}

export default College;