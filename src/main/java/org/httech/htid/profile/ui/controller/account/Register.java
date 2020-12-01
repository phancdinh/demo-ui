package org.httech.htid.profile.ui.controller.account;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.Map;

@Controller
@RequiredArgsConstructor
@Slf4j
public class Register {

    @GetMapping(value = {"/account/register"})
    public String index(@RequestHeader(value = "User-Agent") String userAgent, @RequestParam Map<String, String> requestParams, Model model) {
        return "account/register";
    }

}
