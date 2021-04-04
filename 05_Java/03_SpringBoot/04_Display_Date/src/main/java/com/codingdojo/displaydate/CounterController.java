package com.codingdojo.displaydate;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/server")
public class CounterController {
	@RequestMapping("")
	public String counterHome(HttpSession session) {
		Integer count = (Integer) session.getAttribute("count");
		if (count == null) { count = 1;}
		else {count ++;}
		session.setAttribute("count", count);
		return "counterHome.jsp";
	}
	
	@RequestMapping("/counter")
	public String counter(HttpSession session) {
		Integer count = (Integer) session.getAttribute("count");
		if (count == null) { count = 1;}
		else {count ++;}
		session.setAttribute("count", count);
		return "counter.jsp";
	}
	
	@RequestMapping("/counter2")
	public String counterBy2(HttpSession session) {
		Integer count = (Integer) session.getAttribute("count");
		if (count == null) { count = 2;}
		else {count = count + 2;}
		session.setAttribute("count", count);
		return "counter.jsp";
	}
	
	@RequestMapping("/reset")
	public String resetCounter(HttpSession session) {
		session.setAttribute("count", 0);
		return "redirect:/server/counter";
	}

}
