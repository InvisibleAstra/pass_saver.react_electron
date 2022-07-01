import {Database} from "sqlite3";

const sqlite3 = require('sqlite3').verbose();

interface ISqlite {
    createTable: () => void;
    saveCredo: (credo: string) => void;
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
    }


    async saveCredo(credo: string) {
        let query = `INSERT INTO credo(credoObj) VALUES('"${credo}"')`;
        SqliteService.db.run(query, (error) => {
            console.log('Error in saveCredo: ',error)
        })
    }

}
