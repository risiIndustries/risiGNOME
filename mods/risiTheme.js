const { Gio, GLib } = imports.gi;
const Main = imports.ui.main;

const accents = ["main", "green", "orange", "yellow", "red", "purple", "brown"]

var risiTheme = class {
    constructor () {
        this.rtheme = Gio.Settings.new("io.risi.rtheme");
        this.apply_theme()
    };

    enable () {
        this.rtheme.connect("changed", function (setting, key) {this.apply_theme()})
    };

    disable () {};

    apply_theme() {
        if (this.rtheme.get_string("theme-name") == "risi") {
            if (accents.includes(this.rtheme.get_string("variant-name"))) {
                Main.setThemeStylesheet(
                    `/usr/share/gnome-shell/extensions/risiGNOME@risi.io/themes/${this.rtheme.get_string("variant-name")}/gnome-shell.css`
                )
            } else if (this.rtheme.get_string("variant-name") != "blue") {
                Main.setThemeStylesheet("/usr/share/gnome-shell/extensions/risiGNOME@risi.io/themes/main/gnome-shell.css")
            }
        }
        else {
            Main.setThemeStylesheet("/usr/share/gnome-shell/extensions/risiGNOME@risi.io/themes/main/gnome-shell.css")
        }
        Main.loadTheme();
    };
};