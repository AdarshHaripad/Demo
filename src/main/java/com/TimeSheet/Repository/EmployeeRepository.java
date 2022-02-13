package com.TimeSheet.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.TimeSheet.Bean.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Integer> {

}
