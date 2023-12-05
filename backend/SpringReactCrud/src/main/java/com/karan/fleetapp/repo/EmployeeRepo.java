package com.karan.fleetapp.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.karan.fleetapp.models.Employee;

@Repository
public interface EmployeeRepo extends JpaRepository<Employee, Integer> {

}
