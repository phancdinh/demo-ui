package org.httech.htid.profile.ui.controller.notification;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.httech.htid.profile.ui.config.MessageProperties;
import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.HashMap;
import java.util.Map;

@Slf4j
@Controller
@RequiredArgsConstructor
public class Notification {
    private final MessageSource messageSource;
    private final MessageProperties messageProperties;
    @GetMapping("/notification/{noticeType}")
    public String index(@PathVariable String noticeType, Model model) {
        String noticeValue;

        Map<String, String> noticeStatus = new HashMap<String, String>();
        noticeStatus.put("register-success", "notification-page.messenger.register.success");
        noticeStatus.put("register-fail", "notification-page.messenger.register.fail");
        noticeStatus.put("reset-password-success", "notification-page.messenger.reset_password.success");
        noticeStatus.put("link-reset-password-expire", "notification-page.messenger.link_reset_password.expire");
        noticeStatus.put("active-success", "notification-page.messenger.active.success");
        noticeStatus.put("active-fail", "notification-page.messenger.active.fail");
        noticeStatus.put("link-reset-password-sent", "notification-page.messenger.link-reset-password.sent");
        noticeStatus.put("activation-attempts-reach-limited", "notification-page.messenger.activation-attempts-reach-limited.fail");
        noticeStatus.put("send-otp-attempts-reach-limited", "notification-page.messenger.send-otp-attempts-reach-limited.fail");

        if (noticeStatus.containsKey(noticeType)) {
            noticeValue = messageSource.getMessage(noticeStatus.get(noticeType), null, LocaleContextHolder.getLocale());
        } else {
            noticeValue = messageSource.getMessage("notification-page.messenger.wellcome", null, LocaleContextHolder.getLocale());
        }

        model.addAttribute("noticeValue", noticeValue);
        return "notification/index";
    }

    @PostMapping("/notification/register-by-email-success")
    public String resendActivation(@RequestParam Map<String, String> requestParams, Model model) {

        return "/notification/register-by-email-success";
    }

    @GetMapping("/notification/email-verified-success")
    public String verifiedEmailSuccess(Model model) {
        String noticeValue = messageSource.getMessage("notification-page.messenger.verify-email.success", null, LocaleContextHolder.getLocale());
        model.addAttribute("noticeValue", noticeValue);
        return "notification/email-verified-success";
    }

    @GetMapping("/notification/email-verified-fail")
    public String verifiedEmailFail(Model model) {
        String noticeValue = messageSource.getMessage("notification-page.messenger.verify-email.fail", null, LocaleContextHolder.getLocale());
        model.addAttribute("noticeValue", noticeValue);
        return "notification/email-verified-fail";
    }

    @GetMapping("/notification/update-new-password-success")
    public String updateNewPasswordSuccess(Model model) {
        String noticeValue = messageSource.getMessage("notification-page.messenger.update-new-password.success", null, LocaleContextHolder.getLocale());
        model.addAttribute("noticeValue", noticeValue);
        return "notification/update-new-password-success";
    }
}
