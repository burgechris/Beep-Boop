# _Beep Boop_

#### _Web application that takes user input and returns a string, 8-23-2019_

#### By _**Christopher Burge**_

## Description

_This web application takes a number from the user and returns a range of numbers from 0 to the user inputted number, only if the number does not contain a 1, 2, or 3. If the user inputs a number that does contain a 1, 2, or 3, it will return the following:
If the number contains a 1, the application will return "Beep!"
If the number contains a 2, the application will return "Boop!"
If the number contains a 3, the application will return "I'm sorry, Dave. I'm afraid I can't do that._

## Setup/Installation Requirements

* _Open Browser_
* _Enter any number in the text field_
* _Click the submit button_

## Specs
| Behavior | Input | Output |
| ------------- |:-------------:| -----:|
| The program returns a range of numbers from 0 to the users inputted number | '4' | '0,1,2,3,4' |
| The program returns an exception if the user inputted number contains a '1' | '1' | 'Beep!' |
| The program returns an exception if the user inputted number contains a '2' | '2'| 'Boop!' |
| The program returns an exception if the user inputted number contains a '3' | '3' | 'I'm sorry, Dave. I'm afraid I can't do that.' |
| The first exception should apply, unless the second one does, and the same with the second and third | '13' | 'I'm sorry, Dave. I'm afraid I can't do that.' |


## Known Bugs

_The new string does not return exceptions in lieu of numbers that contact a 1, 2, or 3_


## Technologies Used

_JavaScript and JQuery_

Copyright (c) 2019 **_Christopher Burge_**
