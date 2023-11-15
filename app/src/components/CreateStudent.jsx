import College from './College';

const CreateStudent = ({newStudent}) => {
  const clearFields = ()=>{
    document.querySelector('#firstName').value = '';
    document.querySelector('#lastName').value = '';
    document.querySelector('#email').value = '';
    document.querySelector('#course').value = '';
  }

  return (
    <div className='createSection'>
      <div className='createInfo'>
        <label htmlFor="firstName">First Name:</label>
        <input type="text" htmlFor="firstName" id='firstName' className='inputSection'/>
      </div>

      <div className='createInfo'>
        <label htmlFor="lastName">Last Name:</label>
        <input type="text" htmlFor="lastName" id='lastName' className='inputSection'/>
      </div>

      <div className='createInfo'>
        <label htmlFor="email">Email:</label>
        <input type="text" htmlFor="email" id='email' className='inputSection'/>
      </div>

      <div className='createInfo'>
        <label htmlFor="Course">Course:</label>
        <input type="text" htmlFor="Course" id='course' className='inputSection'/>
      </div>
        
        <button className='create' onClick={()=>{newStudent(document.querySelector('#firstName').value, document.querySelector('#lastName').value, document.querySelector('#email').value, document.querySelector('#course').value); clearFields()}}>Create</button>
    </div>
  )
}

export default CreateStudent;