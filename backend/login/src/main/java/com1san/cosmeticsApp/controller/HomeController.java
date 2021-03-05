package com1san.cosmeticsApp.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {
    @GetMapping("/") // @requestMapping?
    public String home(){
        return "home";
    }

}
