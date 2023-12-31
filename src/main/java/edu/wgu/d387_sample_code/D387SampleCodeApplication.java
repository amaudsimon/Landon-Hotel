package edu.wgu.d387_sample_code;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Locale;
import edu.wgu.d387_sample_code.language_time.displayMessage;


@SpringBootApplication
public class D387SampleCodeApplication {

	public static void main(String[] args) {

		SpringApplication.run(D387SampleCodeApplication.class, args);

		Locale englishLocale = new Locale("en", "US");
		Locale frenchLocale = new Locale("fr", "CA");

		// Create two threads, one for each locale
		Thread englishThread = new Thread(() -> {
			String englishWelcomeMessage = displayMessage.getWelcomeMessage(englishLocale);
			System.out.println("English Welcome Message: " + englishWelcomeMessage);
		});

		Thread frenchThread = new Thread(() -> {
			String frenchWelcomeMessage = displayMessage.getWelcomeMessage(frenchLocale);
			System.out.println("French Welcome Message: " + frenchWelcomeMessage);
		});

		// Start the threads
		englishThread.start();
		frenchThread.start();


	}

}







