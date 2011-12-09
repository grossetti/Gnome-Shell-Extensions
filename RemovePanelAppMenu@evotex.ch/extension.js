/**
 * Desc: this extension removes the App Menu (the one next to the "Activities" button)
 *       from the Panel
 * 
 * Author: Gabriel Rossetti
 * Date: 2011-12-08
 * Version: 1.1
 */
const Main = imports.ui.main;
const Panel = Main.panel;


/**
 * Initialize the extension
 */
function init() {}

/**
 * Enable the extension
 */
function enable() {
  
  Panel._menus.removeMenu(Panel._appMenu.menu);
  Panel._leftBox.remove_actor(Panel._appMenu.actor);
  Panel._appMenu = null;
}

/**
 * Disable the extension
 */
function disable() {
  
  Panel._appMenu = new Main.Panel.AppMenuButton();
  Panel._leftBox.add(Panel._appMenu.actor);
  Panel._menus.addMenu(Panel._appMenu.menu);
}
