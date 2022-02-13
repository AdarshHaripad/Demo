package com.TimeSheet.Bean;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="department")
public class Department {
	
	@Column(name="deptname")
	  private String deptName;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="deptid")
	  private Integer deptId;
	@Column(name="task")
	  private String task;
	
	@Column(name="manager")
	  private String Manager;


	public String getManager() {
		return Manager;
	}

	public void setManager(String manager) {
		Manager = manager;
	}

	public String getTask() {
		return task;
	}

	public void setTask(String task) {
		this.task = task;
	}

	public Department() {
		deptName="";
		deptId=null;
		task="";
	}

	public String getDeptName() {
		return deptName;
	}

	public void setDeptName(String deptName) {
		this.deptName = deptName;
	}

	public Integer getDeptId() {
		return deptId;
	}

	public void setDeptId(Integer deptId) {
		this.deptId = deptId;
	}

	public void setDeptObj(Department deptObj) {
		// TODO Auto-generated method stub
		
	}

	

}
