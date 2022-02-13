package com.TimeSheet.Service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.TimeSheet.Bean.Department;
import com.TimeSheet.Bean.Employee;
import com.TimeSheet.Bean.Login;
import com.TimeSheet.Repository.DepartmentRepository;
import com.TimeSheet.Repository.EmployeeRepository;
import com.TimeSheet.Repository.LoginRepository;


@Service
public class Company {

	@Autowired
	DepartmentRepository dRep;
	@Autowired
	LoginRepository lrep;
	@Autowired
	EmployeeRepository erep;
	
	
	public List<Department> getDepartment()
	{
		List<Department> deptList=new ArrayList<Department>();
		dRep.findAll().forEach(dept -> deptList.add(dept));
		return deptList;
	}
	public Department getDepartmentById(Integer deptid)
	{
		return dRep.findById(deptid).orElseThrow(RuntimeException::new);
	}
	public Department Save(Department deptObj)
	{
		deptObj.setDeptObj(deptObj);
		return dRep.save(deptObj);
	}
	public Department Update(Integer deptid,Department deptObj)
	{
		dRep.findById(deptid).orElseThrow(RuntimeException::new);
		
		deptObj.setDeptObj(deptObj);
		return dRep.save(deptObj);
		
	}
	public String Delete(Integer deptid)
	{
		 dRep.deleteById(deptid);
		 return "Deleted";
	}
	public String login(Login login)
	{
		Employee e=null;
		List <Login> loginList = new ArrayList<Login>();
		lrep.findAll().forEach(log -> loginList.add(log));
		for(Login i: loginList)
		{
			if((login.getUserId() == i.getUserId()) && (login.getPassword().equals(i.getPassword())) )
			{
				e = erep.findById(login.getUserId()).orElseThrow(RuntimeException::new);
				return e.getRoles();
			}
		}
		return "ERROR";
	}
	

	public List<String> getDepartmentNames()
	{
		List<String> deptList=new ArrayList<String>();
		deptList=dRep.getDepartmentNames();
		List<String> newDeptList=new ArrayList<String>();
		//Department o1,o2;
		for(int i = 0; i<deptList.size(); i++)
		{
			for(int j = i+1; j<deptList.size(); j++)
			{
				if(deptList.get(i).equals(deptList.get(j)))
				{
					if(newDeptList.contains(deptList.get(i)))
						break;
					else
					newDeptList.add(deptList.get(i));
				}
			}
		}
		return newDeptList;
	}
}
