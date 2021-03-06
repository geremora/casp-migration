# Casp Migration Tool

### Requirements

For this project you need Node JS version >= 4.2.4 with npm. You can download the installer
[here](https://nodejs.org/en/)

#### Installing Dependencies

To set up the project open up the command line and go into the where the `package.json` file
is and run the following to install the dependencies:

```
$ npm install
```

#### Virtual Environment

This project uses environmental variables and is able to read them from a `config.json` file,
so lets set that up. Go into the `config` folder and copy the `config-example.json` or `config.example.json` and name it
`config.json` on that same directory.

```
$ cp config-example.json config.json
```

Afterwards set your values for the database inside the `config.json`.

### Running the Tests

To run the command to test if you can connect to the database just run the following command

```
$ node manage.js testMSModel
$ node manage.js testPGModel
```

#### Migrating From MSSQL to PG

To migrate the databases from MSSQL to PG we have to run the following commands:

```
$ node --max_old_space_size=8000 manage.js  migrate-mssql
$ node manage.js migrate-pg
```

The first command `migrate-mssql` will transform the data from the table into a json file,
so later when you run `migrate-pg` it will read from the json file and insert it into the PG
DB.

Note: The last time I had to use --max_old_space_size=8000 parameter in node manage.js migrate-mssql 

Enjoy!