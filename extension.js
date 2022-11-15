const ExtensionUtils = imports.misc.extensionUtils;
const me = ExtensionUtils.getCurrentExtension()
const { activitiesIcon, rTheme } = me.imports.mods;

let activitiesIconMod;
let settingsSyncMod;

function init () {
    activitiesIconMod = new activitiesIcon.activitiesIcon();
    risiThemeMod = new rTheme.rTheme();
}

function enable () {
    activitiesIconMod.enable();
    risiThemeMod.enable();
}

function disable () {
    activitiesIconMod.disable();
    risiThemeMod.disable();
}
