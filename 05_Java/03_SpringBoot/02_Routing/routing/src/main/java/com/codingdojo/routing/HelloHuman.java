package com.codingdojo.routing;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
public class HelloHuman {
	@RequestMapping("/")
	public String index(@RequestParam(value="firstName", required=false) String firstName, @RequestParam(value="lastName", required=false) String lastName) {
		if (firstName == null) {
//			System.out.println("in this if");
			return "<h1>Hello Human!</h1>"
					+ "<p>Welcome to SpringBoot!</p>";
		}
		
		else if (firstName != null && lastName == null) {
//			System.out.println("in the first else if");
			return "<h1>Hello " + firstName + "!</h1>"
					+ "<p>Welcome to SpringBoot!</p>";
		}
		
		else if (firstName != null && lastName != null) {
//			System.out.println("in the second else if");
			return "<h1>Hello " + firstName + " " + lastName + "!</h1>"
					+ "<p>Welcome to SpringBoot!</p>";
		}
		return "";
    }
}
//Note: example to retrieve multiple query parameters: http://localhost:8080/?firstName=Selena&lastName=Gom
