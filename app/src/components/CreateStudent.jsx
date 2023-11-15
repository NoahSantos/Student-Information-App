import College from './College';

const CreateStudent = ({newStudent}) => {
  return (
    <div>
        <label htmlFor="firstName">First Name:</label>
        <input type="text" htmlFor="firstName" id='firstName'/>

        <label htmlFor="lastName">Last Name:</label>
        <input type="text" htmlFor="lastName" id='lastName'/>

        <label htmlFor="email">Email:</label>
        <input type="text" htmlFor="email" id='email'/>

        <label htmlFor="Course">Course:</label>
        <input type="text" htmlFor="Course" id='course'/>

        <button onClick={()=>newStudent(document.querySelector('#firstName').value, document.querySelector('#lastName').value, document.querySelector('#email').value, document.querySelector('#course').value)}>Create</button>
    </div>
  )
}

export default CreateStudent;