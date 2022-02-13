package com.TimeSheet.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.TimeSheet.Bean.Login;

public interface LoginRepository extends JpaRepository<Login, Integer> {
	

}
