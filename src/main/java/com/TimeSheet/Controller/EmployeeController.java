package com.TimeSheet.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.TimeSheet.Bean.Login;
import com.TimeSheet.Service.Company;

@RestController
	
	public class EmployeeController {
		
		@Autowired
		Company obj;
		
	//	@Autowired
		//EmployeeController eobj;
		
		
		@PostMapping("/login")
		public String login(@RequestBody Login login)
		{
			return obj.login(login);
		}
	}


