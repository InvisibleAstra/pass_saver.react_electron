const {ipcMain} = require('electron')
const {SqliteService} = require("../src/services/sqlite.service");

let sqlite = new SqliteService();

// @ts-ignore
global.share.ipcMain.handle('create-table', async (event, args)=>{
  await sqlite.createTable();
  console.log('contextBridge worked')
})
// @ts-ignore
global.share.ipcMain.handle('save-credo', async (event, args)=>{
  await sqlite.saveCredo('{test:test}');
  console.log('contextBridge worked')
})
// @ts-ignore
global.share.ipcMain.handle('connect', async (event, args)=>{
  //  let sqlite = new Sqlite();
  await sqlite.connectToDB()
})
