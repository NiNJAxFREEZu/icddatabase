# ICD-11 Database website
[Check the website here](https://ninjaxfreezu.github.io/icddatabase/)

Website frontend to ICD-11 database which allows to query the database with ICD code or disease name to receive it's Wikipedia article link. The website also allows to download the entire database in Protege .owl file format. This website is structured and styled in HTML5/CSS and it's functionalities are powered by JavaScript.

## Search engine
User can send querries to the database via asynchronous AJAX request. On the home page, fill the form with either a disease name or it's ICD-11 code and press __Search!__. Website will send the request and wait for response. As soon as the API responds with the data a JSON tree is built on the site. That JSON tree contains all the hits from the API. If a category of diseases is found JSON tree will contain all the diseases within that category. Try searching MB47 for example!
If there are no hits the JSON tree will not be displayed. (nor the information of the unsuccessful search)

## Download the database for Protege
User can request the database to parse it's tables into a .owl Protege format file. To do so simply click the __Download__ button at the *Download* page. Parsing is done every time a user requests it, so he always gets the newest version of the database. An asynchronous AJAX request is sent and the parser starts building the file. Upon completion API responds with the file for the user to download. After a couple of seconds after the button press the file should start to download. 

## TODO
1. Better search text recognition
2. More interactive and intuitive JSON tree with search results
3. Functionality to manualy add records into database from the website
4. Mobile version of the website
5. Images!!!
6. Case insensitive code searches
