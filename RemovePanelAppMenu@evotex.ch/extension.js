/**
 * Desc: this extension removes the App Menu (the one next to the "Activities" button)
 *       from the Panel
 * 
 * Author: Gabriel Rossetti
 * Date: 2011-11-15
 * Version: 1.0
 */
const Main = imports.ui.main;
const Panel = Main.panel;

var _enabled = false;

/**
 * Initialize the extension
 */
function init() {}

/**
 * Enable the extension
 */
function enable() {
  
  if(!_enabled) {
    Panel._menus.removeMenu(Panel._appMenu.menu);
    Panel._leftBox.remove_actor(Panel._appMenu.actor);
    Panel._appMenu = null;
    _enabled = true;
  }
}

/**
 * Disable the extension
 */
function disable() {
  
  if(_enabled) {
    Panel._appMenu = new Main.Panel.AppMenuButton();
    Panel._leftBox.add(Panel._appMenu.actor);
    Panel._menus.addMenu(Panel._appMenu.menu);
    _enabled = false;
  }
}
