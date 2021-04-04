package com.tgliedt.controllerandview.controllers;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.tgliedt.controllerandview.services.ApiService;

@Controller
public class WorldController {
private final ApiService worldService;
	
	public WorldController(ApiService worldService) {
		this.worldService = worldService;
	}
	
	@RequestMapping("/")
	// Query 8
	public void ApiService() {
		List<Object[]> temp = worldService.region();
		for(Object[] row : temp) {
			String tempReg = (String) row[0];
			Long tempCount = (Long) row[1];
			System.out.println("Region " + tempReg);
			System.out.println("Count " + tempCount);
		}
		return;
	}
}