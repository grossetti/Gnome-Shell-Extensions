Gnome-Shell-Extensions
======================

Extensions for the Gnome Shell.

I currently support version 3.4

My current extensions
---------------------

-   **RemovePanelAppMenu** removes the menu that shows the current
    application's name; it sits next to the "Activities" button.
-   **DockClickFix** "fixes" the dash's and overview search default behavior 
    when you click on an icon.
    The default is to launch the app if none is running and to switch to the
    current instance if it is already running. This extension changes that to
    instead of switching to it if it is already running it always launches a new
    instance.

Installing the extensions
-------------------------

Get it from GIT using

    git clone https://github.com/grossetti/Gnome-Shell-Extensions.git

Put the extensions' directories in ~/.local/share/gnome-shell/extensions/ using

    ln -s `pwd`/Gnome-Shell-Extensions/DashClickFix@evotex.ch ~/.local/share/gnome-shell/extensions/DashClickFix@evotex.ch

for DashClickFix. For RemovePanelAppMenu use

    ln -s `pwd`/Gnome-Shell-Extensions/RemovePanelAppMenu@evotex.ch ~/.local/share/gnome-shell/extensions/RemovePanelAppMenu@evotex.ch

Restart the gnome shell:

-   Press Alt+F2 and type `r` then hit **enter**.

enable it

-   using gnome-tweak-tool
-   on [extensions.gnome.org](https://extensions.gnome.org/local/)
-   or via command line using

    gnome-shell-extension-tool -e DashClickFix@evotex.ch

    or respectively
    
    gnome-shell-extension-tool -e RemovePanelAppMenu@evotex.ch`

