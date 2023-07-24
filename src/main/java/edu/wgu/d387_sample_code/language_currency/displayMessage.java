package edu.wgu.d387_sample_code.language_currency;

import java.util.Locale;
import java.util.ResourceBundle;

public class displayMessage {
    public static String getWelcomeMessage(Locale locale) {
        ResourceBundle bundle = ResourceBundle.getBundle("Languages", locale);
        String welcomeMessage = bundle.getString("welcomeMessage");
        return welcomeMessage;
    };
}
