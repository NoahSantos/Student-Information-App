import {useState} from 'react';

// gets the properties from the StudentList component through prop drilling
const Student = ({first_name, last_name, course, email, id, removeStudent}) => {

  return (
    <div key={id}>
        <div className='info'><strong>{first_name} {last_name}</strong></div>
        <div className='info'>{email}</div>
        <div className='info'>Course: {course}</div>
        <button className='remove' onClick={()=>removeStudent(id)}>Remove</button>
    </div>
  )
}


export default Student;