import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import studentService from '../services/student.service';

const StudentsList = () => {

  const [students, setStudents] = useState([]);

  const init = () => {
    studentService.getAll()
      .then(response => {
        console.log('Printing student data', response.data);
        setStudents(response.data);
      })
      .catch(error => {
        console.log('Something went wrong', error);
      }) 
  }

  useEffect(() => {
    init();
  }, []);

  const handleDelete = (id) => {
    console.log('Printing id', id);
    studentService.remove(id)
      .then(response => {
        console.log('student deleted successfully', response.data);
        init();
      })
      .catch(error => {
        console.log('Something went wrong', error);
      })
  }

  return (
    <div className="container">
      <h3>List of Student</h3>
      <hr/>
      <div>
        <Link to="/addstudent" className="btn btn-primary mb-2">Add Student</Link>
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Name</th>
              <th>School</th>
              <th>Grade</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {
            students.map(student => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.school}</td>
                <td>{student.grade}</td>
                <td>
                  <Link className="btn btn-info" to={`/students/edit/${student.id}`}>Update</Link>
                  
                  <button className="btn btn-danger ml-2" onClick={() => {
                    handleDelete(student.id);
                  }}>Delete</button>
                </td>
              </tr>
            ))
          }
          </tbody>
        </table>
        
      </div>
    </div>
  );
}

export default StudentsList;
