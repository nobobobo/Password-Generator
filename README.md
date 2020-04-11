# Password-Generator

This application generates a random password based on user-selected critea as below: 

* The length of a new password (between 8 ~ 128)
* If contains lowercase characters or not. a,b,c...
* If contains uppercase characters or not: A,B,C...
* If contains numerical characters or not: 1,2,3...
* If contains special characters or not: !,@,#,$...

Based on the user-selected criteria, the application randomly pick characters to generated a user-selected-long password.

The application retries to get a new input if user-input is invalid. 
(The length is over 128 or below 8, the input length is not a number, or no type of character is chosen.) 

The new password has at least 1 character for each type of the character that the user chose. 
When the new password is generated, the user can copy it from the textarea. 


