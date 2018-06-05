# CodeCon Enterprise

Web application stack build with React/Redux/Node/Express/TypeOrm/Typescript/Postgress
        
Steps to run this project:

1. Run `yarn install-app` command
2. Setup database settings inside `server/ormconfig.json` file
3. Run `yarn dev` command

## Database

If you want to use docker for setup of postgres database you can use this command to match the current ormconfig.json

```shell
docker run --name enterprise-db -e POSTGRES_PASSWORD=password -e POSTGRES_DB=enterprise -e POSTGRES_USER=rem -p=5432:5432 -d postgres
```