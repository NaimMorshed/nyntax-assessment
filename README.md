## 1. Introduction
This is a MERN Stack assessment by Nyntax. 
## 2. Links
- [Github repository](https://github.com/NaimMorshed/nyntax-assessment)
- [Live link](https://nyntax-assessment.vercel.app/)
## 3. Instructions to run locally
- make sure you have installed Node.js, npm and git to run react application locally
- clone the repository from the provived github link - *'git clone https://github.com/NaimMorshed/nyntax-assessment.git'*
- navigate inside the project folder
- type the command to install the project *'npm install'*
- run the project using command *'npm run dev'*
## 4. User Manual
1. Once the project has been initialized you will land into the landing page.
2. The landing page contains the list of available cars to rent.
3. You can view the rates from the above filter option 'Hour|Daily|Weekly'.
4. Once you click the 'Rent Car' button you will navigate to the reservation page.
5. A reservation ID will be generated.
6. You have to choose the Pickup and Return date.
7. Based on date choosen duration and bill will auto generate.
8. Discounts can be applied filling out the discount field.
9. You can see your selected vehicle information from 'Vehicle Information' section.
10. Billing amount will change upon clicking on additional charges.
11. After filling out the customer information, user can generate receipt by clicking on 'Print/Download' button.
12. A receipt will be generated and user can download the receipt by clicking on 'Click here to download'.
## 5. Test Cases
1. Error handling if the api contains null elements.
2. Return date cannot go beyond pickup date.
3. User cannot apply negative discount amount.
4. If discount greater than actual total bill, the total amount made to zero.
5. User cannot generate receipt without filling customer information.
## Conclusion
The application has been tested against several bugs and it has been optimized for performance. Furthermore the web has been made responsive to run across all devices. It has been hosted on vercel.
