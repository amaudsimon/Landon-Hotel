package edu.wgu.d387_sample_code.controller;

import edu.wgu.d387_sample_code.language_time.timeConversion;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin("http://localhost:4200")
public class TimeController {
    @GetMapping("/api/time-conversion")
    public Map getTimeConversions() {
        return timeConversion.convertTimeBetweenTimeZones();
    }
}
