package org.httech.htid.profile.ui.controller.profile;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.oidc.user.OidcUser;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.Map;

@Controller
@RequiredArgsConstructor
public class Verification {


    @GetMapping(value={"/profile/verify-email"})
    public String verifyEmail(@AuthenticationPrincipal OidcUser principal, @RequestParam Map<String, String> requestParams) {
        return "redirect:/notification/email-verified-success";
    }
}
