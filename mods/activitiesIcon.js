const Main = imports.ui.main;
const { St, Gio, Clutter } = imports.gi;

var activitiesIcon = class {
    constructor () {
        this.activitiesButton = Main.panel.statusArea["activities"];
        this.icon = new St.Icon();
        this.icon.set_icon_name("fedora-logo-icon-symbolic")
        this.icon.set_icon_size(18)
    };

    enable () {
        this.activitiesButton.remove_actor(this.activitiesButton._label);
        this.activitiesButton.add_actor(this.icon);
    };

    disable () {
        this.activitiesButton.remove_actor(this.icon);
        this.activitiesButton.add_actor(this.activitiesButton._label);
    };
};