// Generated by CoffeeScript 1.7.1
(function() {
  var BrowserWindow, api, app, ipc, mainWindow;

  app = require("app");

  BrowserWindow = require("browser-window");

  ipc = require("ipc");

  api = require("./api");

  require("crash-reporter").start();

  mainWindow = null;

  app.on('window-all-closed', function() {
    if (process.platform !== 'darwin') {
      return app.quit();
    }
  });

  app.on('ready', function() {
    mainWindow = new BrowserWindow({
      width: 800,
      height: 600
    });
    mainWindow.loadUrl("file://" + __dirname + "/index.html");
    return mainWindow.on('closed', function() {
      return mainWindow = null;
    });
  });

  ipc.on('compress', function(e, args) {
    if (args.type === 'js') {
      return e.sender.send('compressed', api.minifyJS(args.code));
    }
  });

}).call(this);

//# sourceMappingURL=main.map
