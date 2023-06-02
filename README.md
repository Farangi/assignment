## Guidelines
- Open terminal and clone this repository
  ```bash
  $ git clone https://github.com/Farangi/assignment.git
  ```

- Navigate to the directory
  ```bash
  $ cd assignment
  ```

- Run this command to boot up the application, make sure that you have docker/docker-compose installed
  ```bash
  $ make start
  ```

- Open your browser and got to the follwing url: [localhost:3000](http://localhost:3000)

- After the app is loaded, you will not see any data. In the terminal run this command
  ```bash
  $ make db
  ```
  This will populate the data for the rooms with dummy values

- You can stop the app by running this command
  ```bash
  $ make stop
  ```

## Test
- To run the unit tests, execute the following commands
  ```bash
  $ cd backend
  $ npm run test
  ```
