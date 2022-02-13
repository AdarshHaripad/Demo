package com.TimeSheet.Controller;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.TimeSheet.Bean.Department;
import com.TimeSheet.Service.Company;

@RestController
@RequestMapping("/Department")
    public class DepartmentController {
	
@Autowired
	Company obj;
	

	
@GetMapping

	public List<Department> getDepartment()
	{
		return obj.getDepartment();
	}
@GetMapping("/{deptid}")

	public Department getDepartmentById(@PathVariable Integer deptid)
	{
		return obj.getDepartmentById(deptid);
	}
	
@PostMapping("/SaveDepartment")

	public ResponseEntity<Department> CreateDepartment (@RequestBody Department deptObj) throws URISyntaxException
	{
		Department savedDepartment1=obj.Save(deptObj);
		return ResponseEntity.created(new URI("/Department/"+savedDepartment1.getDeptId())).body(savedDepartment1);
	}

@PutMapping("/UpdateDepartment/{deptid}")

	public Department updatedepartmentById(@PathVariable Integer deptid ,@RequestBody Department deptObj)
	{
		
		return obj.Update(deptid,deptObj);
	}
@DeleteMapping("/DeleteDepartment/{deptid}")

	public String DeleteDepartmentById(@PathVariable Integer deptid)
	{
		return obj.Delete(deptid);
	}
@GetMapping("/getDepartmentNames")
	public  List<String> getDepartmentNames()
	{
		return obj.getDepartmentNames();
	}
	

}
