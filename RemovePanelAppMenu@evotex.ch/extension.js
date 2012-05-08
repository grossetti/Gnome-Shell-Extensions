/**
 * Desc: this extension removes the App Menu (the one next to the "Activities" button)
 *       from the Panel
 * 
 * Author: Gabriel Rossetti
 * Date: 2012-05-08
 * Version: 1.3
 */
const Main = imports.ui.main;
const Panel = Main.panel;
const Gio = imports.gi.Gio;
const GLib = imports.gi.GLib;

var _menuManager = null;

/**
 * Initialize the extension
 */
function init() {}

/**
 * Enable the extension
 */
function enable() {
  
  (new Gio.Settings({ schema: 'org.gnome.settings-daemon.plugins.xsettings' })).set_value('overrides', GLib.Variant.new('a{sv}', { 'Gtk/ShellShowsAppMenu': GLib.Variant.new('i', 0) }))
  _menuManager = Panel._appMenu._menuManager
  Panel._menus.removeMenu(Panel._appMenu.menu);
  Panel._leftBox.remove_actor(Panel._appMenu.actor);
  Panel._appMenu = null;
}

/**
 * Disable the extension
 */
function disable() {
  
  Panel._appMenu = new Main.Panel.AppMenuButton(_menuManager);
  _menuManager = null;
  Panel._leftBox.add(Panel._appMenu.actor);
  Panel._menus.addMenu(Panel._appMenu.menu);
  (new Gio.Settings({ schema: 'org.gnome.settings-daemon.plugins.xsettings' })).set_value('overrides', GLib.Variant.new('a{sv}', { 'Gtk/ShellShowsAppMenu': GLib.Variant.new('i', 1) }))
}
