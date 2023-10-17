## To run the project locally: ##
1. Open your terminal and navigate to the project folder: <br>
**./typescript-api**
1. Run `npm i`
1. Run `docker-compose up --build`

## To access the database: ##
1. Visit the following url in your browser: <br>
`http://localhost:16543/`
1. Login with the following credentials: <br>
    - Username: `test@email.com` <br>
    - Password: `pass`
1. Select **Add New Server**
1. In the **General** tab input the following: <br>
    - Name: `db_name` 
1. In the **Connection** tab input the following: <br>
    - Host name/address: `db`
    - Port: `5432`
    - Maintenance database: `postgres`
    - Username: `postgres`
    - Password: `password`
    - Save Password: `TRUE`
1. Click the **Save** button

## Create POST request via Postman ## 
1. Download Postman
1. Create POST with following URL: <br>
`http://localhost:5001/customer/WHATEVER-ID-HERE`
