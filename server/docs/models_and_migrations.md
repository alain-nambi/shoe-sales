Creating the first Model (and Migration)

Once you have properly configured CLI config file you are ready to create your first migration. It's as simple as executing a simple command.

We will use `model:generate` command. This command requires two options:

  * `name`: the name of the model;
  * `attributes`: the list of model attributes.

### Let's create a model named User.

```bash
npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
```

This will:

  * Create a model file `user` in `models` folder;
  * Create a migration file with name like `XXXXXXXXXXXXXX-create-user.js` in migrations folder.

Note: Sequelize will only use Model files, it's the table representation. On the other hand, the migration file is a change in that model or more specifically that table, used by CLI. Treat migrations like a commit or a log for some change in database.

### Running Migrations

Until this step, we haven't inserted anything into the database. We have just created the required model and migration files for our first model, User. Now to actually create that table in the database you need to run db:migrate command.

```bash
npx sequelize-cli db:migrate
```

This command will execute these steps:

  * Will ensure a table called SequelizeMeta in database. This table is used to record which migrations have run on the current database
  * Start looking for any migration files which haven't run yet. This is possible by checking SequelizeMeta table. In this case it will run `XXXXXXXXXXXXXX-create-user.js` migration, which we created in last step.
  * Creates a table called Users with all columns as specified in its migration file.

### Undoing Migrations

Now our table has been created and saved in the database. With migration you can revert to old state by just running a command.

You can use `db:migrate:undo`, this command will revert the most recent migration.

```bash
npx sequelize-cli db:migrate:undo
```

### Undoing all migrations

You can revert back to the initial state by undoing all migrations with the `db:migrate:undo:all` command. You can also revert back to a specific migration by passing its name with the --to option.

```bash
npx sequelize-cli db:migrate:undo:all --to XXXXXXXXXXXXXX-create-posts.js
```