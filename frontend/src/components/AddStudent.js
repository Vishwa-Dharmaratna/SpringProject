import { useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import studentService from '../services/student.service';

const AddStudent = () => {
    const[name, setName] = useState('');
    const[school, setSchool] = useState('');
    const[grade, setGrade] = useState('');
    const history = useHistory();
    const {id} = useParams();

    const saveStudent = (e) => {
        e.preventDefault();
        
        const student = {name, school, grade, id};
        if (id) {
            //update
            studentService.update(student)
                .then(response => {
                    console.log('Student data updated successfully', response.data);
                    history.push('/');
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                }) 
        } else {
            //create
            studentService.create(student)
            .then(response => {
                console.log("student added successfully", response.data);
                history.push("/");
            })
            .catch(error => {
                console.log('something went wroing', error);
            })
        }
    }

    useEffect(() => {
        if (id) {
            studentService.get(id)
                .then(student => {
                    setName(student.data.name);
                    setSchool(student.data.school);
                    setGrade(student.data.grade);
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                })
        }
    }, [])
    return(
        <div className="container">
            <h3>Add Student</h3>
            <hr/>
            <form>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter name"
                    />

                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="school"
                        value={school}
                        onChange={(e) => setSchool(e.target.value)}
                        placeholder="Enter School"
                    />

                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="grade"
                        value={grade}
                        onChange={(e) => setGrade(e.target.value)}
                        placeholder="Enter Location"
                    />
                </div>
                <div >
                    <button onClick={(e) => saveStudent(e)} className="btn btn-primary">Save</button>
                </div>
            </form>
            <hr/>
            <Link to="/student">Back to List</Link>
        </div>
    )
}

export default AddStudent;