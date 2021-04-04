package com.tgliedt.relationship.services;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import com.tgliedt.relationship.models.Ninja;
import com.tgliedt.relationship.repositories.NinjaRepository;

@Service
public class NinjaService {
	
	private final NinjaRepository ninjaRepository;
	
	public NinjaService(NinjaRepository ninjaRepository) {
		this.ninjaRepository = ninjaRepository;
	}
	
	
	public List<Ninja> findAll(){
		return ninjaRepository.findAll();
	}
	
	public void create(Ninja ninja) {
		ninjaRepository.save(ninja);
		return;
	}
	
}
