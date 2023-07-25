package edu.wgu.d387_sample_code.controller;

import edu.wgu.d387_sample_code.language_time.displayMessage;
import org.springframework.web.bind.annotation.*;

import java.util.Locale;


@RestController
@RequestMapping("/welcome")
@CrossOrigin("http://localhost:4200")
public class MessagesController {

    @GetMapping
    public String getWelcomeMessage(@RequestParam(name = "language", defaultValue = "en") String language,
                                    @RequestParam(name = "country", defaultValue = "US") String country) {
        Locale locale = new Locale(language, country);
        String welcomeMessage = displayMessage.getWelcomeMessage(locale);
        return welcomeMessage;
    }
}

