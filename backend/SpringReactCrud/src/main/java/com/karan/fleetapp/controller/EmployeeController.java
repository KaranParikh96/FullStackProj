package com.karan.fleetapp.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.karan.fleetapp.models.Employee;
import com.karan.fleetapp.service.EmployeeService;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class EmployeeController {
	
	@Autowired
	private EmployeeService employeeService;
	
	@RequestMapping(value="/", method=RequestMethod.GET)
	public List<Employee> allEmployees(){
		return employeeService.allEmployees();
	}
	
	@RequestMapping(value="/employee/create", method=RequestMethod.POST)
	public void createNewEmployee(@RequestBody Employee employee) {
		
		employeeService.saveEmployee(employee);
		
	}
	
	@RequestMapping(value="/employee/find/{id}", method=RequestMethod.GET)
	public Optional<Employee> findEmployee(@PathVariable("id") int id) {
		return employeeService.findEmployee(id);
		
	}
	
	
	@RequestMapping(value="/employee/update", method= {RequestMethod.GET, RequestMethod.PUT})
	public void updateEmployee(@RequestBody Employee employee) {
		
		employeeService.saveEmployee(employee);
	
	}
	
	@RequestMapping(value="/employee/delete/{id}", method=RequestMethod.GET)
	public void deleteEmployee(@PathVariable("id") int id) {
		
		employeeService.deleteEmployee(id);
		
	}
	
	
	

}
