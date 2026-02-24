const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    // ... other options (width, height, webPreferences, etc.)
    
    // 💡 The key for fullscreen launch:
    fullscreen: true,
    
    // Optional: Hide the menu bar, which is often desired for a screensaver-like app
    autoHideMenuBar: true,
    
    // Optional: Make it frameless (no title bar) for a cleaner look
    frame: false,
    
    // Optional: Keep it above other windows (common for screensavers)
    alwaysOnTop: true, 

    // Do not show the window until it is ready to prevent a flash of a blank screen
    show: false,

    backgroundColor: '#0f0f0f',
  });

  // Load the index.html of the app
  mainWindow.loadFile('index.html');
  mainWindow.show();

  // Once the window is ready to show, display it
  // mainWindow.once('ready-to-show', () => {
  //   mainWindow.show();
  // });

  // This is the core logic for the screensaver-like behavior.
  // We attach a mousemove event listener to the window.
  // When the mouse moves, the app will quit.
  mainWindow.addEventListener('mousemove', () => {
    // We use a small delay to prevent accidental closing from minor jitters.
    // If you want it to close instantly, you can remove the setTimeout.
    mainWindow.close();
  });
}

app.whenReady().then(() => {
  createWindow()
})