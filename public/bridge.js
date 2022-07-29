const {ipcMain} = require('electron')
const {SqliteService} = require("../src/services/sqlite.service");

let sqlite = new SqliteService();

// @ts-ignore
global.share.ipcMain.handle('init', async (event, args)=>{
  await sqlite.init();
  console.log('contextBridge worked')
})
// @ts-ignore
global.share.ipcMain.handle('save-credo', async (event, args)=>{
  await sqlite.saveCredo('{test:test}');
  console.log('contextBridge worked')
})
// @ts-ignore
global.share.ipcMain.handle('add-new-user', async (event, args)=>{
  console.log(args);
  await sqlite.saveUser( args)
  console.log('contextBridge worked')
})

