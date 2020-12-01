package org.httech.htid.profile.ui.controller.profile;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.oidc.user.OidcUser;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
@RequiredArgsConstructor
public class InfoIdentityService {

    @GetMapping(value={"/login-info"})
    public String getInfoIdentityService(@AuthenticationPrincipal OidcUser principal, Model model) {
        model.addAttribute("login_name", principal.getName());
        model.addAttribute("access_token", principal.getIdToken().getTokenValue());
        return "profile/info";
    }
}
