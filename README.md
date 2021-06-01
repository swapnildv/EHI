# EHI Contact Manager

EHI is a production ready application for maintaining contact information.
Live demo [_here_](http://ehi-dev.us-east-1.elasticbeanstalk.com)

## Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Folder Structure](#folder-Structure)
* [Installation](#installation)
* [CI/CD](#ci-cd)
* [Screenshots](#screenshots)
* [Room for Improvement](#room-for-improvement)
* [Contact](#contact)
* [Contributing](#contributing)
* [Contact](#contributing)

## General Information
- EHI is production ready application to maintain contacts .
- EHI can be used to List Contacts, Add Contact Edit Contact and Activate / Deactivate Contact

## Technologies Used
- ASP.Net Core - 5.0
- REACT - 16.0
- xunit - 2.4.1
- AWS Elastic BeanStalk
- AWS S3
- AWS Code Build 
- AWS Code Pipeline

## Folder Structure
    ├── EHI.Main                   # Source files (Main Web API and REACT)
    ├── EHI.Test                   # Automated tests
    ├── buildspec.yml              # CI/CD configuration file
    ├── EHISln.sln                 # Visual studio solution file
    ├── Procfile                   # Configure .NET core app to Elastic Beanstalk
    └── README.md

## Installation
For the first time, go to EHI.MAIN/ClientAPP and run following command to install all the REACT packages : 

```bash
npm install
```
And to run the application go to EHI.MAIN directory and run following command:

```bash
dotnet run
```
## CI-CD

## Contributing

## Room for Improvement

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Contact
- Created by [@swapnilv](https://github.com/swapnildv)
- swapnil.d.vengurlekar@gmail.com - feel free to contact me!
