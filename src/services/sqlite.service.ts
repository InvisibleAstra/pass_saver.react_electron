import {Database} from "sqlite3";

const sqlite3 = require('sqlite3').verbose();

interface ISqlite {
    createTable: () => void;
    saveCredo: (credo: string) => void;
}
interface UserData {
    login: string;
    password:string;
}

export class SqliteService implements ISqlite {
    static db: Database;


    constructor() {
        SqliteService.db = new sqlite3.Database('Database/Storage.db');

    }


    async createTable() {
        let createCredoTableQuery = 'CREATE TABLE IF NOT EXISTS credo(' +
            'credoID PRIMARY KEY AUTOINCREMENT,' +
            'credoObj TEXT NOT NULL' +
            ')'
        SqliteService.db.run(createCredoTableQuery, (error) => {
            console.log('Error in create table: ', error);
        })

        let createLocalBindTableQuery = 'CREATE TABLE IF NOT EXISTS localBind(' +
            'userID NOT NULL,' +
            'credoID NOT NULL' +
            ')'
        SqliteService.db.run(createLocalBindTableQuery, (error)=>{
            console.log('Error in create localBind: ', error)
        })

        let createUsersTableQuery = 'CREATE TABLE IF NOT EXIST users(' +
          'userId PRIMARY KEY AUTOINCREMENT,' +
          'login TEXT NOT NULL'+
          'password TEXT NOT NULL'+
          ')'
        SqliteService.db.run(createUsersTableQuery, (error)=>{
            console.log('Error in create users ', error);
        })
    }


    async saveCredo(credo: string):Promise<void> {
        let query = `INSERT INTO credo(credoObj) VALUES('"${credo}"')`;
        SqliteService.db.run(query, (error) => {
            console.log('Error in saveCredo: ',error)
        })
    }

    async saveUser(userData:UserData):Promise<void> {
        let query = `INSERT INTO users(login,password) VALUES('"${userData.login, userData.password}"')`;
        SqliteService.db.run(query, (error) => {
            console.log('Error in saveUser ', error);
        })
    }

}
