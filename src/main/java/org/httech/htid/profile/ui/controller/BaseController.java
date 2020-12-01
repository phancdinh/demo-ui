package org.httech.htid.profile.ui.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;

@Controller
public class BaseController {
    @RequestMapping("/")
    public String index() {
        return "index";
    }

    @GetMapping(path="/vi/")
    public String change_language_vn(HttpServletRequest request) {
        String referrer = request.getHeader("referer");
        return "redirect:"+referrer;
    }

    @GetMapping(path="/en/")
    public String change_language_en(HttpServletRequest request) {
        String referrer = request.getHeader("referer");
        return "redirect:"+referrer;
    }
}
