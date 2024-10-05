# Project overview

This project demonstrates the implementation of a micro-frontend architecture using Webpack. It showcases how to efficiently manage and integrate multiple independently developed frontends into a cohesive application while maintaining modularity and scalability.

### Micro Frontend Setup

To run the different applications, follow the commands below:

Navigate to each **folder**

- **Container Application**
    - Execute the following command:
      ```bash
      $ npm run start
      ```
    - The container runs on **PORT 8080**

- **Cart Application**
    - Execute the following command:
      ```bash
      $ npm run start
      ```
    - The cart micro frontend runs on **PORT 8082**

- **Products Application**
    - Execute the following command:
      ```bash
      $ npm run start
      ```
    - The products micro frontend runs on **PORT 8081**

### Micro Frontend Development Notes

- **Running Applications Individually**:
    - You can run each micro frontend container individually for development purposes.
    - You can also run all applications together via the main container app.

- **ESLint**:
    - There is **no ESLint setup** in this project.
    - ONLY PRETTIER - run  $ npm run format 

- **Faker Library**:
    - `faker` is used in the project and is **loaded only once** using shared dependencies across micro frontends.

### Dependencies Used

The project uses the following dependencies:

```json
{
    "faker": "5.1.0",
    "html-webpack-plugin": "5.5.0",
    "webpack": "5.88.0",
    "webpack-cli": "4.10.0",
    "webpack-dev-server": "4.7.4"
}
