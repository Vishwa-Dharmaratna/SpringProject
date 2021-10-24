import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import teacherService from '../services/teacher.service';

const TeachersList = () => {

  const [teachers, setTeachers] = useState([]);

  const init = () => {
    teacherService.getAll()
      .then(response => {
        console.log('Printing teachers data', response.data);
        setTeachers(response.data);
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
    teacherService.remove(id)
      .then(response => {
        console.log('teacher deleted successfully', response.data);
        init();
      })
      .catch(error => {
        console.log('Something went wrong', error);
      })
  }

  return (
    <div className="container">
      <h3>List of Teacher</h3>
      <hr/>
      <div>
        <Link to="/addteacher" className="btn btn-primary mb-2">Add Teacher</Link>
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Name</th>
              <th>Subject</th>
              <th>Fee</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
          {
            teachers.map(teacher => (
              <tr key={teacher.id}>
                <td>{teacher.name}</td>
                <td>{teacher.subject}</td>
                <td>{teacher.fee}</td>
                <td>
                  <Link className="btn btn-info" to={`/teachers/edit/${teacher.id}`}>Update</Link>
                  
                  <button className="btn btn-danger ml-2" onClick={() => {
                    handleDelete(teacher.id);
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

export default TeachersList;