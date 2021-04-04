package com.thecode;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Controller
public class CodeController {
	@RequestMapping("/")
	public String home() {
		return "home.jsp";
	}
	
	@RequestMapping(value="/code", method=RequestMethod.POST)
	public String code(@RequestParam(value="codeInput") String codeInput) {
		if (codeInput.equals("bushido")) {
			return "code.jsp";
		}
		else return "redirect:/errorMsg";
	}
	
	@RequestMapping("/errorMsg")
    public String flashMessages(RedirectAttributes redirectAttributes) {
        redirectAttributes.addFlashAttribute("error", "Wrong code! Try again!");
        return "redirect:/";
    }
}
