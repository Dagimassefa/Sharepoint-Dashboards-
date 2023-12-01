# SharePoint Dashboards Project
This project is designed to create interactive dashboards within SharePoint using the SharePoint Framework (SPFx). The dashboards are built to showcase data from SharePoint lists, providing users with a visually appealing and user-friendly interface to interact with and analyze information.
## Overview
The SharePoint Dashboards project utilizes the SharePoint SPFx framework to build web parts that display key data from SharePoint lists. These web parts are designed to be added to SharePoint pages, allowing users to easily access and interact with important information.
## Getting Started
To set up the SharePoint Dashboards project, follow these steps:
### 1. Clone the Repository:
git clone https://github.com/Dagimassefa/Sharepoint-Dashboards-.git <br />
cd sharepoint-dashboards
### 2. Install Dependencies:
npm install
### 3. Build and Deploy:
gulp bundle --ship  <br />
gulp package-solution --ship  <br />
Deploy the generated package to your SharePoint app catalog.  <br />
### 4. Add Web Parts to Pages:
Once deployed, add the dashboard web parts to your SharePoint pages through the web part picker.
