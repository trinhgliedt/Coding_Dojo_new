package com.tgliedt.relationship.controllers;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.tgliedt.relationship.models.Dojo;
import com.tgliedt.relationship.models.Ninja;
import com.tgliedt.relationship.services.DojoService;
import com.tgliedt.relationship.services.NinjaService;

@Controller
public class DojoNinjaController {
	
	private final DojoService dojoService;
	private final NinjaService ninjaService;
	
	public DojoNinjaController(DojoService dojoService, NinjaService ninjaService) {
		this.dojoService = dojoService;
		this.ninjaService = ninjaService;
	}
	
	@RequestMapping("/dojos/new")
	public String newDojo(@ModelAttribute("dojo") Dojo dojo) {
		return "/dojoninja/newDojo.jsp";
	}

	@RequestMapping("/ninjas/new")
	public String newNinja(Model model, @ModelAttribute("ninja") Ninja ninja) {
		model.addAttribute("dojos", dojoService.findAll());
		return "/dojoninja/newNinja.jsp";
	}
	
	@PostMapping("/ninjas/new")
	public String newNinja(@Valid @ModelAttribute("ninja") Ninja ninja, BindingResult result, Model model) {
		if(result.hasErrors()) {
			model.addAttribute("dojos", dojoService.findAll());
			return "/dojoninja/newNinja.jsp";
		}else {
			ninjaService.create(ninja);
			return "redirect:/ninjas/new";
		}
	}
	
	@PostMapping("/dojos/new")
	public String newDojo(@Valid @ModelAttribute("dojo") Dojo dojo, BindingResult result) {
		if(result.hasErrors()) {
			return "newDojo.jsp";
		}else {
			dojoService.create(dojo);
			return "redirect:/dojos/"+dojo.getId();
		}
	}
	
	@RequestMapping("/dojos/{id}")
	public String showDojo(@PathVariable("id") Long id, Model model) {
		Dojo dojo = dojoService.findById(id);
		model.addAttribute("dojo", dojo);
		return "/dojoninja/dojo.jsp";
	}
	
}
