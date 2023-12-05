package com.karan.fleetapp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.karan.fleetapp.models.Employee;
import com.karan.fleetapp.repo.EmployeeRepo;

@Service
public class EmployeeService {
	
	@Autowired
	private EmployeeRepo employeeRepo;
	
	public List<Employee> allEmployees() {
		
		return employeeRepo.findAll();
		
	}
	
	
	public void saveEmployee(Employee employee) {
		
		employeeRepo.save(employee);
		
	}
	
	public Optional<Employee> findEmployee(int id) {
		
		return employeeRepo.findById(id);
	}
	
	public void deleteEmployee(int id) {
		
		employeeRepo.deleteById(id);
	}
	
	
	
	
	
	
	

}
