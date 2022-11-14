const { Gio, GLib } = imports.gi;
const Main = imports.ui.main;

var RTheme = class {
    constructor () {
        this.rtheme = Gio.Settings.new("io.risi.rtheme");
        this.apply_theme()
    };

    enable () {
        this.rtheme.connect("changed", function (setting, key) {this.apply_theme()})
    };

    disable () {};

    apply_theme() {
        Main.setThemeStylesheet("/home/cameron/.config/rtheme/shell/rtheme.css")
        Main.loadTheme();
    };
};