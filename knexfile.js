module.exports = {
  client: 'pg',
  debug: true,
  connection: 'postgres://cfxdkpggaxgqgt:1260257f4ee2128e75ba4d466f7fe908f0bb6c24a48e08b65fb97fde20d1363d@ec2-54-163-226-238.compute-1.amazonaws.com:5432/d6o538vd56c9pv',
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  },
  ssl: true
};

/*
module.exports = {
  client: 'postgresql',
  connection: {
    database: 'projeto',
    user: 'postgres',
    password: '123456'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};
*/