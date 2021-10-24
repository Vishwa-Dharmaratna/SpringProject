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

import in.bushansirgur.springbootrestapi.entity.Teacher;
import in.bushansirgur.springbootrestapi.repository.TeacherRepository;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin("*")
public class TeacherController {
	
	@Autowired
	private TeacherRepository tRepo;
	
	@GetMapping("/teachers")
	public List<Teacher> getAllTeachers() {
		return tRepo.findAll();
	}
	
	@GetMapping("/teachers/{id}")
	public Teacher getTeacherById(@PathVariable Long id) {
		return tRepo.findById(id).get();
	}
	
	@PostMapping("/teachers")
	public Teacher saveTeacherDetails(@RequestBody Teacher teacher) {
		return tRepo.save(teacher);
	}
	
	@PutMapping("/teachers")
	public Teacher updateTeacher(@RequestBody Teacher teacher) {
		return tRepo.save(teacher);
	}
	
	@DeleteMapping("/teachers/{id}")
	public ResponseEntity<HttpStatus> deleteTeacherById(@PathVariable Long id) {
		tRepo.deleteById(id);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
}