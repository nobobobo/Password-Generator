# Password-Generator

### This application generates a random password based on user-selected critea as below: 

* The length of a new password (between 8 ~ 128)
* If contains lowercase characters or not: a,b,c
* If contains uppercase characters or not: A,B,C
* If contains numerical characters or not: 1,2,3
* If contains special characters or not: !@#$

Based on the user-selected criteria for the new password, the application randomly pick characters with the length of new password. 

The application retries to get a new input if user-input is invalid. 
E.g. the length is over 128 or below 8, the input length is not a number, or no type of character is chosen. 

Also it generates a new password that at least 1 character is used for each character type the user chose. 
