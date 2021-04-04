package com.tgliedt.controllerandview.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.tgliedt.controllerandview.repositories.CityRepository;
import com.tgliedt.controllerandview.repositories.CountryRepository;
import com.tgliedt.controllerandview.repositories.LanguageRepository;

@Service
public class ApiService {
	
	private final CityRepository cityRepo;
	private final CountryRepository countryRepo;
	private final LanguageRepository languageRepo;
	
	public ApiService(CityRepository cityRepo, CountryRepository countryRepo, LanguageRepository languageRepo) {
		this.cityRepo = cityRepo;
		this.countryRepo = countryRepo;
		this.languageRepo = languageRepo;
	}
	
	public List<Object[]> slovene(){
		return countryRepo.findSlovene();
	}
	
	public List<Object[]> countCities(){
		return countryRepo.countCities();
	}
	
	public List<Object[]> mexCiries(){
		return countryRepo.mexCities(); 
	}
	
	public List<Object[]> langPerct(){
		return countryRepo.langPerct();
	}
	
	public List<Object[]> surfArea(){
		return countryRepo.surfArea();
	}
	
	public List<Object[]> constMon(){
		return countryRepo.constMon();
	}
	
	public List<Object[]> argCity(){
		return countryRepo.argCity();
	}
	
	public List<Object[]> region(){
		return countryRepo.region();
	}

}
