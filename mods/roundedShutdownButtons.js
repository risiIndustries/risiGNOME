const Main = imports.ui.main;
const SystemActions = imports.misc.systemActions;
const { St, Gio, Clutter } = imports.gi;

Actions = SystemActions.getDefault()

// Not loaded by default because I want to work on it more to make it match this GNOME design mockup.
// https://gitlab.gnome.org/GNOME/gnome-shell/-/issues/270#note_506221
// Code inspired by https://github.com/PRATAP-KUMAR/rounded-system-menu-buttons

class menuButton () extends St.Button {
    constructor (icon, action, property) {
        super()
        this.child = St.Icon({icon_name: icon, icon_size: 16})
        this.connect('clicked', action)
        Actions.bind_property(property, this, 'visible', bindFlags);
    }
}
var roundedShutdownButtons = class {
    constructor () {

        buttons = [
            menuButton("system-lock-screen-symbolic", () => {Actions.activateLockScreen()}, "can-lock-screen"),
            menuButton("system-log-out-symbolic", () => {Actions.activateLockScreen()}, "can-logout"),
            menuButton("system-switch-user-symbolic", () => {Actions.activateSwitchUser()}, "can-switch-user"),
            menuButton("media-playback-pause-symbolic", () => {Actions.activateSuspend()}, "can-suspend"),
            menuButton("system-reboot-symbolic", () => {Actions.activatePowerOff()}, "can-restart"),
            menuButton("system-shutdown-symbolic", () => {Actions.activatePowerOff(), "can-power-off"})
        ];
        for (button in buttons) {
        }
    };

    enable () {
    };

    disable () {
    };
};
