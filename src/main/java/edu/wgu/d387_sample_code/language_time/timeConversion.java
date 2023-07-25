package edu.wgu.d387_sample_code.language_time;
import java.time.LocalDateTime;
import java.time.ZonedDateTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.HashMap;
import java.util.Map;

public class timeConversion {
    public static Map<String, String> convertTimeBetweenTimeZones() {
        ZoneId zEastern = ZoneId.of("America/New_York");
        ZoneId zMountain = ZoneId.of("America/Denver");
        ZoneId zUTC = ZoneId.of("UTC");
        ZoneId zLocal = ZoneId.systemDefault();

        LocalDateTime localDateTime = LocalDateTime.now();
        System.out.println("Local time: " + localDateTime);

        ZonedDateTime zonedDateTime = localDateTime.atZone(zLocal);
        LocalDateTime easternTime = zonedDateTime.withZoneSameInstant(zEastern).toLocalDateTime();
        LocalDateTime mountainTime = zonedDateTime.withZoneSameInstant(zMountain).toLocalDateTime();
        LocalDateTime utcTime = zonedDateTime.withZoneSameInstant(zUTC).toLocalDateTime();

        // Create a DateTimeFormatter for the desired date and time format
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd hh:mm:ss a");

        // Format the LocalDateTime objects to strings using the formatter
        String easternTimeStr = easternTime.format(formatter);
        String mountainTimeStr = mountainTime.format(formatter);
        String utcTimeStr = utcTime.format(formatter);

        // Create a Map to hold the formatted times
        Map<String, String> timeMap = new HashMap<>();
        timeMap.put("EasternTime", easternTimeStr);
        timeMap.put("MountainTime", mountainTimeStr);
        timeMap.put("UTCTime", utcTimeStr);

        return timeMap;
    }
}




