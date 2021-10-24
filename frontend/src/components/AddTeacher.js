import { useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import teacherService from "../services/teacher.service";

const AddTeacher= () => {
    const[name, setName] = useState('');
    const[subject, setSubject] = useState('');
    const[fee, setFee] = useState('');
    const history = useHistory();
    const {id} = useParams();

    const saveTeacher = (e) => {
        e.preventDefault();
        
        const teacher = {name, subject, fee, id};
        if (id) {
            //update
            teacherService.update(teacher)
                .then(response => {
                    console.log('Teacher data updated successfully', response.data);
                    history.push('/');
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                }) 
        } else {
            //create
            teacherService.create(teacher)
            .then(response => {
                console.log("teacher added successfully", response.data);
                history.push("/");
            })
            .catch(error => {
                console.log('something went wroing', error);
            })
        }
    }

    useEffect(() => {
        if (id) {
            teacherService.get(id)
                .then(teacher => {
                    setName(teacher.data.name);
                    setLocation(teacher.data.subject);
                    setDepartment(teacher.data.fee);
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                })
        }
    }, [])
    return(
        <div className="container">
            <h3>Add Teacher</h3>
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
                        id="subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder="Enter Subject"
                    />

                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="fee"
                        value={fee}
                        onChange={(e) => setFee(e.target.value)}
                        placeholder="Enter Fee"
                    />
                </div>
                <div >
                    <button onClick={(e) => saveSubject(e)} className="btn btn-primary">Save</button>
                </div>
            </form>
            <hr/>
            <Link to="/">Back to List</Link>
        </div>
    )
}

export default AddTeacher;
