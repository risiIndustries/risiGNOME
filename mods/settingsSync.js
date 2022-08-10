const { Gio, GLib } = imports.gi;

var settingsSync = class {
    constructor () {
        this.desktop = Gio.Settings.new("org.gnome.desktop.interface");
    };

    enable () {
        this.desktop.connect("changed", this.sync_theme)
    };

    disable () {};

    sync_theme (setting, key) {
        if (key == "color-scheme") {
            // Matches Gtk theme to light and dark settings
            switch (setting.get_string(key)) {
                default:
                case "prefer-light":
                case "default": setting.set_string("gtk-theme", "adw-gtk3");
                break;
                case "prefer-dark": setting.set_string("gtk-theme", "adw-gtk3-dark");
                break;
            }

            // Resetting custom colors
            GLib.spawn_command_line_async('adwcolor reset');
        }
    }
};
