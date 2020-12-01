package org.httech.htid.profile.ui.config;

import lombok.RequiredArgsConstructor;
import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class MessageProperties {
    private final MessageSource messageSource;

    public String getMessage(String key, String... params){
        return messageSource.getMessage(key, params, LocaleContextHolder.getLocale());
    }
}
