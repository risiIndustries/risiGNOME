const { Gio, GLib } = imports.gi;
const Main = imports.ui.main;
const accents = ["main", "blue", "green", "orange", "yellow", "red", "purple", "brown"]

var accentWallpaper = class {
    constructor () {
        this.rtheme = Gio.Settings.new("io.risi.rtheme");
        this.background = Gio.Settings.new("org.gnome.desktop.background");
    };

    enable () {
        this.rtheme.connect("changed", function(setting, key) {this.apply_background()})
    };

    disable () {};

    apply_background() {
        let color;
        if (this.rtheme.get_string("theme-name") == "risi") {
            if (accents.includes(this.rtheme.get_string("variant-name"))) {
                if (this.background.get_string("picture-uri").startsWith(
                    "/usr/share/backgrounds/risios-37/37-")
                ) {
                    color = this.rtheme.get_string("variant-name")
                    if (color == "main") {
                        color = "blood-orange"
                    }

                    this.background.set_string(
                        "picture-uri", `/usr/share/backgrounds/risios-37/37-light-${color}.png`
                    )
                    this.background.set_string(
                        "picture-uri-darl", `/usr/share/backgrounds/risios-37/37-dark-${color}.png`
                    )
                }
            }
        }
        Main.loadTheme();
    };
};