/**
 * Desc: this extension removes the App Menu (the one next to the "Activities" button)
 *       from the Panel
 * 
 * Author: Gabriel Rossetti
 * Date: 2013-02-27
 * Version: 1.4
 */
const Panel = imports.ui.main.panel;
const Gio = imports.gi.Gio;
const GLib = imports.gi.GLib;

/**
 * Initialize the extension
 */
function init() {}

/**
 * Enable the extension
 */
function enable() {
  
  let value = GLib.Variant.new('a{sv}', { 'Gtk/ShellShowsAppMenu': GLib.Variant.new('i', 0) });
  let xsetting = new Gio.Settings({ schema: 'org.gnome.settings-daemon.plugins.xsettings' });
  xsetting.set_value('overrides', value);
  
  let appMenu = Panel.statusArea['appMenu'];
  Panel._leftBox.remove_actor(appMenu.container);
}

/**
 * Disable the extension
 */
function disable() {
  
  let appMenu = Panel.statusArea['appMenu'];
  Panel._leftBox.remove_actor(appMenu.container);
  
  let value = GLib.Variant.new('a{sv}', { 'Gtk/ShellShowsAppMenu': GLib.Variant.new('i', 1) });
  let xsetting = new Gio.Settings({ schema: 'org.gnome.settings-daemon.plugins.xsettings' });
  xsetting.set_value('overrides', value);
}
