# Cypress-Project-Data-Creation-and-Test-Cases
Project's Title : Front end UI e2e Automation using Cypress
Initial Data Setup and Test Cases of Form as well

Prerequisite:
Download and install  Node.js  
Preferred IDE : Microsoft Visual Studio Code ( VS Code ) Version 1.73.1 or Higher
Install cypress@12.0.3 (Latest Version)


How to Install and Run the Project : 
  Auto generated package : 	npm init
    Or  install package:	     npm init -y

 Install cypress:	  npm install cypress
 Or                  npm install cypress --save-dev
 Or			       npx cypress install --force

 Open Test Runner:   npx cypress open
 Or                  node_modules\.bin\cypress open

 Install Mochawesome Report:
                     npm install --save-dev mochawesome 
      Or                  npm install --save-dev mocha
  

Install xlsx input file: npm install node-xlsx–save-dev
Install json path:       npm install jsonpath

 Run headless:      ./node_modules/.bin/cypress run
 Run headed  :    
   node_modules\.bin\cypress run --spec             cypress/integration/examples/Testfile.js --headed
 Run with Mochawesome report: 
  run mocha node_modules\.bin\cypress run --reporter    mochawesome
