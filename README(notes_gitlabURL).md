Task Requirement:	File Name:	Line Number:	Changes Made:
C1.	resources package--	N/A	--Created Resource bundle with base name “Languages” with two files, one containing a English welcome message and the other, a French welcome message
C1	edu.wgu.d387_sample_code package---	N/A	---Created a new packaged named “language_time” to house all java classes dealing with languages and time.
C1	Language_time package---	N/A---	Created a new class named “displayMessage”
C1	displayMessage---	6-13---	Created a method named “getWelcomeMessage” to retrieve the English and French welcome messages from the resource bundle
C1	edu.wgu.d387_sample_code package---	N/A---	Created a controller package to handle mapping requests
C1	Controller package---	N/A---	Created a new class: “MessageController”
C1	MessageController---	13-22---	Created a method to handle get request from Angular to retrieve welcome message
C1	 D387SampleCodeApplication---	19-36---	Created two threads to display the English and French welcome message
C1	UI package---	N/A	---Generated a new service “welcome” to generate mapping request
C1	welcome.service.ts---	7-14---	Updated welcome service to provide backend mapping url and created a method to send GET Request
C1	app.component.ts---	13-14, 72-92---	Call the welcome service to get the English and French welcome messages
C1	app.component.html---	21-28---	Added divs in the header section to display the welcome messaged.
C2	app.component.ts---	18-19---	Added variables “usdToCadRate” and “usdToEurRate” for price conversions
C2	app.component.ts---	95-102---	Added functions to convert the price of US dollars to Canadian dollars and Euros
C2	app.component.html---	85-88---	Modified the “available rooms” sections to display the price of room in USD, CAD, and Euros.
C3	Language_time package---	N/A---	Created a new java class “timeConversion”
C3	timeConversions---	9-40---	Created method “convertTimeBetweenTimeZones” to convert local time into Eastern, Moutain, and UTC times.
C3	Controller package---	N/A---	Created a “Time” Controller to handle get requests
C3	UI/scr package---	N/A---	Generated a “time” service
C3	time.service.ts---	12-14---	Created a method “getTimeConversion” to send GET request to backend server
C3	app.component.ts---	103-113---	Called on TimeService to retrieve GET response
C3	App.component.html---	29-32---	Display converted times from the live presentation at the Landon Hotel
D2. 	d387-advanced-java folder ---	N/A---	Create a Dockerfile
D2.	Dockerfile---	2-7	---Added base image, copied jar file, exposed port 8080, and set up the commands
D3.	In order to deploy my Multi Threaded Spring Boot application to Amazon AWS, I would follow the following steps:
1.	Log into my AWS account
2.	Create a repository in AWS ECR
3.	Click on Get Started
4.	Fill in repository information
5.	Once repository is created, follow the four push commands provided by AWS:
      a.	Retrieve an authentication token and authenticate your Docker client to your registry.
      Use the AWS CLI:
      aws ecr-public get-login-password --region us-east-1 | docker login --username AWS --password-stdin public.ecr.aws/b6n8p0l8
      Note: If you receive an error using the AWS CLI, make sure that you have the latest version of the AWS CLI and Docker installed.
      b.	Build your Docker image using the following command. For information on building a Docker file from scratch see the instructions here . You can skip this step if your image is already built:
      docker build -t d387_project .
      c.	After the build completes, tag your image so you can push the image to this repository:
      docker tag d387_project:latest public.ecr.aws/b6n8p0l8/d387_project:latest
      d.	Run the following command to push this image to your newly created AWS repository:
      docker push public.ecr.aws/b6n8p0l8/d387_project:latest

6.	In AWS ECS Create a Cluster to deploy image
      a.	Configure the Cluster
7.	Create a Task Definition which will include the container and docker image information
8.	Run the task just created
9.	Configure Security groups to edit inbound rules
10.	Congrats, we’re up and running!


Gitlab URL: https://gitlab.com/wgu-gitlab-environment/student-repos/asimo29/d387-advanced-java

