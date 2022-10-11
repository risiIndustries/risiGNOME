const { Gio, GLib } = imports.gi;
const Main = imports.ui.main;

const accents = ["main", "green", "orange", "yellow", "red", "purple", "brown"]

var risiTheme = class {
    constructor () {
        this.rtheme = Gio.Settings.new("io.risi.rtheme");
    };

    enable () {
        this.rtheme.connect("changed", this.sync_theme)
    };

    disable () {};

    apply_theme() {
        if (this.rtheme.get_string("theme-name") == "risi") {
            if (this.rtheme.get_string("variant-name") in accents) {
                Main.setThemeStylesheet(
                    `/home/cameron/Documents/risiOS/risiGNOME@risi.io/data/${this.rtheme.get_string("variant-name")}.css`
                )
            } else if (this.rtheme.get_string("variant-name") != "blue") {
                Main.setThemeStylesheet("/home/cameron/Documents/risiOS/risiGNOME@risi.io/css/main.css")
            }
        }
        else {
            Main.setThemeStylesheet("/home/cameron/Documents/risiOS/risiGNOME@risi.io/css/main.css")
        }
        Main.loadTheme();
    };
};