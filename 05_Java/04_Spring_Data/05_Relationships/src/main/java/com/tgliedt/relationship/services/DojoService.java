package com.tgliedt.relationship.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.tgliedt.relationship.models.Dojo;
import com.tgliedt.relationship.repositories.DojoRepository;

@Service
public class DojoService {

	private final DojoRepository dojoRepository;
	
	public DojoService(DojoRepository dojoRepository) {
		this.dojoRepository = dojoRepository;
	}
	
	public List<Dojo> findAll(){
		return dojoRepository.findAll();
	}
	
	public void create(Dojo dojo) {
		dojoRepository.save(dojo);
		return; 
	}
	
	public Dojo findById(Long id) {
		Optional<Dojo> dojo = dojoRepository.findById(id);
		if(dojo.isPresent()) {
			return dojo.get();
		}else {
			return null;
		}
	}
}
