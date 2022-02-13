package com.TimeSheet.Bean;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity(name = "employee")
@Table(name = "employee")
public class Employee {
	
	@Column(name = "empname")
	private String empName;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "empid")
	private Integer empId;
	
	@Column(name = "doj")
	private LocalDate doj;
	
	@Column(name = "dob")
	private LocalDate dob;
	
	@Column(name = "email")
	private String email;
	
	@Column(name = "deptname")
	private String deptName;
	
	@Column(name = "reportingmanager")
	private String reportingManager;
	
	@Column(name = "roles")
	private String roles;
	
	
	public Employee()
	{
		empName="";
		empId=0;
		doj=null;
		dob=null;
		email="";
		deptName="";
		reportingManager="";
		roles="";
		
	}



	public String getEmpName() {
		return empName;
	}



	public void setEmpName(String empName) {
		this.empName = empName;
	}



	public Integer getEmpId() {
		return empId;
	}



	public void setEmpId(Integer empId) {
		this.empId = empId;
	}



	public LocalDate getDoj() {
		return doj;
	}



	public void setDoj(LocalDate doj) {
		this.doj = doj;
	}



	public LocalDate getDob() {
		return dob;
	}



	public void setDob(LocalDate dob) {
		this.dob = dob;
	}



	public String getEmail() {
		return email;
	}



	public void setEmail(String email) {
		this.email = email;
	}



	public String getDeptName() {
		return deptName;
	}



	public void setDeptName(String deptName) {
		this.deptName = deptName;
	}



	public String getReportingManager() {
		return reportingManager;
	}



	public void setReportingManager(String reportingManager) {
		this.reportingManager = reportingManager;
	}



	public String getRoles() {
		return roles;
	}



	public void setRoles(String roles) {
		this.roles = roles;
	}
}
