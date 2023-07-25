# Stage 2: Build Spring backend
FROM openjdk:latest as backend
LABEL authors="amaudsimon"
COPY target/D387_sample_code-*.jar /D387_sample_code.jar
EXPOSE 8080
CMD ["java", "-jar", "/D387_sample_code.jar"]

