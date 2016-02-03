
# Angular-boilerplates


## Installation
Installation requires node.js on your computer

npm install

node or nodemon server.js

## Instructions
There should now be a web server running at http://localhost:8888
Follow the instructions displayed on that webpage.

### What URL should be used to access your application?

https://calm-shelf-81597.herokuapp.com/

### What libraries did you use to write your application?

Technologies: HTML | CSS | Bootstrap | Javascript | AngularJS 

### What influenced the design of your user interface?

- Tables and "orderBy" reference http://www.w3schools.com/angular/default.asp
- WDI class tutorial 'angular-restful-resources' served as template
- Custom directive "phone-input" and custom filter "tel" with http://codepen.io/pujoey/pen/PZBgmx?editors=1010

### What steps did you take to make your application user friendly?

- Added angularjs library to make two way data binding. MVVM
- Created single page application for user to navigate without refreshing page (NG-View)
- Created custom directive and custom filter to standardize phone number input

### What steps did you take to insure your application was secure?

Use angular ng-hide/show for navbar menu options until user is authenticated.

### What could be done to the front end or back end to make it more secure?

- Minification and obstrufucation to hide infomation.
- Generate JWT to save token in localStorage instead of cookies
