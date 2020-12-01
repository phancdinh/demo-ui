package org.httech.htid.profile.ui.controller.account;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class Login {
    @GetMapping("/login")
    public String getLoginPage(Model model) {
        return "redirect:/oauth2/authorization/wso2";
    }
}
