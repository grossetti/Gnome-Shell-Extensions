/**
 * Desc: this extension "fixes" the dash's default behavior when you 
 *       click on an icon. The defualt is to launch the app if none is 
 *       running and to switch to the current instance if it is already 
 *       running. This extension changes that to instead of switching to 
 *       it if it is already running it always launches a new instance.
 * 
 * Author: Gabriel Rossetti
 * Date: 2011-12-08
 * Version: 1.0
 */
const Main = imports.ui.main;
const AppDisplay = imports.ui.appDisplay;
const Shell = imports.gi.Shell;
const Clutter = imports.gi.Clutter;


var _original = null;

/**
 * The new version of the function, this always lanches a new version of 
 * the app regardless of if it is already running or not.
 * 
 * @param event the current event
 */
function _onActivate(event) {
  this.emit('launching');

  if (this._onActivateOverride) {
    this._onActivateOverride(event);
  } else {
    this.app.open_new_window(-1);
  }
  Main.overview.hide();
}

/**
 * Initialize the extension
 */
function init() {
  _original = AppDisplay.AppWellIcon.prototype._onActivate;
}

/**
 * Enable the extension
 */
function enable() {
  AppDisplay.AppWellIcon.prototype._onActivate = _onActivate;
}

/**
 * Disable the extension
 */
function disable() {
  
  AppDisplay.AppWellIcon.prototype._onActivate = _original;
}
