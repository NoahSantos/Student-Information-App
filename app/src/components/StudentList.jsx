import Student from './Student';
import {useState} from 'react';
import {data} from '../data';

// starts with use component must be uppercased
// invoke inside function/component body
// Don't call hooks conditionally

const StudentList = ({data, removeStudent}) => {
  return (
    <div className='singleStudent'>
      <Student key={data.id} first_name={data.first_name} last_name={data.last_name} id={data.id} email={data.email} course={data.course} removeStudent={removeStudent}></Student>
    </div>
  )
}

export default StudentList;