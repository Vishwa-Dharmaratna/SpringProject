import { BrowserRouter, Switch, Route } from 'react-router-dom';
import EmployeeList from './components/EmployeesList';
import NotFound from './components/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddEmployee from './components/AddEmployee';
import Header from './components/Header';
import AddStudent from './components/AddStudent'
import StudentsList from './components/StudentsList';
import TeachersList from './components/TeachersList';
import AddTeacher from './components/AddTeacher';

function App() {
  return (
    <BrowserRouter>
      <div>
        <div>
          <Header/>
          <Switch>
            <Route exact path="/" component={EmployeeList} />
            <Route path="/student" component={StudentsList}/>
            <Route path="/addstudent" component={AddStudent}/>
            <Route path="/students/edit/:id" component={AddStudent} />
            <Route path="/add" component={AddEmployee} />
            <Route path="/employees/edit/:id" component={AddEmployee} />
            <Route path="/teacher" component={TeachersList}/>
            <Route path="/addteacher" component={AddTeacher}/>
            <Route path="/teachers/edit/:id" component={AddTeacher} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;
