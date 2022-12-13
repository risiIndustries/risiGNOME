const { Gio, GLib } = imports.gi;
const Main = imports.ui.main;
const Mainloop = imports.mainloop;

var rTheme = class {
    constructor () {
        this.rtheme = Gio.Settings.new("io.risi.rtheme");
        this.apply_theme()
    };

    enable () {
        this.rtheme.connect("changed", (setting, key) => {
            Mainloop.timeout_add(1000, () => this.apply_theme())
        })
    };

    disable () {};

    apply_theme() {
        let stylesheet = GLib.build_filenamev(
            [GLib.get_user_config_dir(), 'rtheme', 'shell', 'rtheme.css']
        );
        Main.setThemeStylesheet(stylesheet)
        Main.loadTheme();
    };
};