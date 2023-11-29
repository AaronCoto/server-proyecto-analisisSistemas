import { createPool } from "mysql2/promise";
import {
  DB_DATABASE,
  DB_HOST,
  DB_PASSWORD,
  DB_PORT,
  DB_USER,
} from "./config.js";

export const pool = createPool({
    host:'localhost',
    port: 1010,
    user:'root',
    password:'12345',
    database:'DB_TICKETS',
    insecureAuth:true,
});


