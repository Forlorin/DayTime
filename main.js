const{app,BrowserWindow} =require('electron')

function createWindow(){
    let mainWindow=new BrowserWindow({
        width:800,
        height:400
    })

    mainWindow.loadFile('index.html')

    mainWindow.webContents.on('did-finish-load',()=>{
        console.log('did-finish-load')
    })

    mainWindow.webContents.on('dom-ready',()=>{
        console.log('dom-ready')
    })

    mainWindow.on('close',()=>{
        console.log('this window closed')
        mainWindow=null
    })
}
app.on('ready',()=>{
    console.log('ready')
    createWindow()
})

app.on('window-all-closed',()=>{
    console.log('window-all-closed')
    app.quit()
})

app.on('before-quit',()=>{
    console.log('before-quit')
})

app.on('will-quit',()=>{
    console.log('will-quit')
})
app.on('quit',()=>{
    console.log('quit')
})


