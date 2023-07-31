const mysql = require("mysql2");
// require("dotenv").config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.MYSQL_DB
});

// console.log(pool);

// pool.getConnection(function (err, connection) {
//   if (err) throw err;
//   console.log("Database connected!!!");
// });

// let registration = `CREATE TABLE if not exists registration(
//     user_id int auto_increment,
//     user_name varchar(255) not null,
//     user_email VARCHAR(255) not null,
//     pass varchar(255) not null,
//     PRIMARY KEY(user_id)
// )`;


// pool.query(registration, (err, results, fields) => {
//   if (err) throw err;
//   console.log("registration table created!!!");
// });

// let profile = `CREATE TABLE if not exists profile(
//     user_profile_id int auto_increment,
//     user_id int not null,
//     first_name VARCHAR(255) not null,
//     last_name VARCHAR(255) not null,
//     PRIMARY KEY (user_profile_id),
//     FOREIGN KEY(user_id) REFERENCES registration(user_id)
// )`;

// pool.query(profile, (err, results, fields) => {
//   if (err) throw err;
//   console.log("profile table created!!!");
// });

// let question = `CREATE TABLE if not exists question(
//    question_id int auto_increment,
//    question varchar(255) not null,
//    question_description LongTEXT,
//    user_id int,
//    post_id varchar(255),
//    UNIQUE KEY (post_id),
//    PRIMARY KEY (question_id),
//    FOREIGN KEY(user_id) REFERENCES registration(user_id)
// )`;

// pool.query(question, (err, results) => {
//   if (err) throw err;
//   console.log("question table created!!!");
// });

// let answer = `CREATE TABLE if not exists answer(
//    answer_id int auto_increment,
//    answer LONGTEXT,
//    user_id int,
//    question_id int,
//    PRIMARY KEY (answer_id),
//    FOREIGN KEY(user_id) REFERENCES registration(user_id),
//    FOREIGN KEY(question_id) REFERENCES question(question_id)
// )`;

// pool.query(answer, (err, results) => {
//   if (err) throw err;
//   console.log("answer table created!!!");
// });




module.exports = pool;