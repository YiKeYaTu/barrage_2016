'use strict';
import fs from 'fs';
let customDB;
const DEFAULT_DB = {
    type: 'mysql',
    log_sql: true,
    log_connect: true,
    adapter: {
        mysql: {
            host: '127.0.0.1',
            port: '3306',
            database: 'barrage_2016',
            user: 'root',
            password: '111003qwertyuiop',
            prefix: '',
            encoding: 'utf8'
        },
        mongo: {

        }
    }
};
try {
    customDB = fs.readFileSync('./customDB.js', 'utf-8');
} catch (e) {
    customDB = null;
}


export default customDB || DEFAULT_DB;