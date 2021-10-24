package in.bushansirgur.springbootrestapi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import in.bushansirgur.springbootrestapi.entity.Student;
import in.bushansirgur.springbootrestapi.repository.StudentRepository;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin("*")
public class StudentController {
	
	@Autowired
	private StudentRepository sRepo;
	
	@GetMapping("/students")
	public List<Student> getAllStudents() {
		return sRepo.findAll();
	}
	
	@GetMapping("/students/{id}")
	public Student getStudentById(@PathVariable Long id) {
		return sRepo.findById(id).get();
	}
	
	@PostMapping("/students")
	public Student saveStudentDetails(@RequestBody Student student) {
		return sRepo.save(student);
	}
	
	@PutMapping("/students")
	public Student updateStudent(@RequestBody Student student) {
		return sRepo.save(student);
	}
	
	@DeleteMapping("/students/{id}")
	public ResponseEntity<HttpStatus> deleteStudentById(@PathVariable Long id) {
		sRepo.deleteById(id);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
}