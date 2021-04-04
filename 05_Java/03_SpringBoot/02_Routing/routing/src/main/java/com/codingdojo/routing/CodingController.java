// 2. Importing dependencies
package com.codingdojo.routing;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

// 1. Annotation
@RestController
@RequestMapping("/coding")
public class CodingController {
	
    @RequestMapping("")
    public String index(){
      return "Hello Coding Dojo!";
    }
    @RequestMapping("/python")
    public String python(){
      return "Python/Django was awesome!";
    }
    @RequestMapping("/java")
    public String java(){
      return "Java/Spring is better!";
    }
}
