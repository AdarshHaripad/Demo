package com.TimeSheet.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.TimeSheet.Bean.Department;

public interface DepartmentRepository extends JpaRepository<Department, Integer> {

	@Query(value = "SELECT d.deptname from department d" , nativeQuery = true)
	public List<String> getDepartmentNames();
}
