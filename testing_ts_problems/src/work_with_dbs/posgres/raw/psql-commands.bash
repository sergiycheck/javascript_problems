
# connect to postgres
psql -U postgres


# create db
CREATE DATABASE mydatabase;

# connect to db
\c mydatabase;


# create table
CREATE TABLE mytable (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    created_at TIMESTAMP NOT NULL
);

# drop table
DROP TABLE mytable;