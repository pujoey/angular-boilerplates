Introduction
This front end developer test is designed to test your expertise writing modern web applications. There are many ways to solve the problems presented in this test, so there's no single right answer.
You are to work on this assignment on your own computer. There is no time limit for this assignment, but it is not intended to take long to finish. You are welcome to use any and all resources on the web to create your application, but you must list any software you utilized, and you should not include any code you did not write in your source files.

This test should be treated like a small product that you would deliver to a customer. Therefore you should consider easy of use, features, and the overall design of the application when building your application.

If you have any questions, please feel free to contact us and ask.


Installation

We use Github to hold the results of the test. If you don't have an account on Github, please create one. They are available for free. 
We have created a node.js application that will act as your backend server. Please fork the repository to create your own version. Then proceed to use that to complete your work.

You must have node installed on your computer. Node.js is available from http://nodejs.org
Run npm install to install the required node dependencies
Run node server.js to run the server itself
You should see a message on the console indicating that the server is running
Pointing a web server at http://localhost:8888 should result in the instructions being displayed.
Endpoints

The server uses JSON as its data format. It responds to the following endpoints:

POST /login
Login the user 
INPUT {"user": USERNAME, "password": PASSWORD} 
OUTPUT {"result": true} and a cookie is set 
RAISES Error 401 for an incorrect login
GET /logout
Logout the user 
OUTPUT Cookie is removed
GET /states
Get data about the US states 
QUERY The following query parameters are supported:
sort can be any field in the states. Prefixing with a '-' character will invert the order of the sort. Defaults to sorting by name.
offset is an offset in to the sorted data. Defaults to 0.
limit will return only that many states. Defaults to 10 and has a maxmimum value of 10.

OUTPUT An array of state objects containing:
name
abbreviation
capital
most-populous-city
population
square-miles
time-zone-1
time-zone-2
dst
GET /states/:abbreviation
Retrieve the state data for a single state. 
EXAMPLE /states/CA will return the data for California 
OUTPUT Same format as states
GET /states/abbreviations
Retrieve all the two letter state abbreviations 
OUTPUT An array of two letter strings ["AL", "AK", "AZ", ..., "WI", "WY"]
GET /read
Get the list of messages left in a guest book 
OUTPUT {"user": USERNAME, "phone": PHONE, "message": MESSAGE}
POST /write
Add a message to the guest book. 
INPUT {"phone": PHONE-NUMBER, "message": MESSAGE} 
OUTPUT The same as /read 
RAISES Error 401 if the user is not logged in.
Users

There are four predefined users
alice with a password of password1
bob with a password of password2
charlie with a password of password3
dan with a password of password4
Assignment

Create a single page application using any javascript libraries you prefer. The application should provide the following functionality.
☐ The user should be able to login and logout of the application
☐ The user should be able to browse through the list of all 50 states
☐ The user should be display the details on any single state
☐ The user should be able to display all the messages in the guest book
☐ The user should be able to add his own message to the guest book.
The application should be placed in the public directory of this project.

Please create a README file in your project and answer the following questions.

Questions


What URL should be used to access your application?

What libraries did you use to write your application?

What influenced the design of your user interface?

What steps did you take to make your application user friendly?

What steps did you take to insure your application was secure?

What could be done to the front end or back end to make it more secure?

Submitting


Submit your results to your Github repository. Then send us an email with the URL for your repository so that we can take a look.
