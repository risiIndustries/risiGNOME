const ExtensionUtils = imports.misc.extensionUtils;
const me = ExtensionUtils.getCurrentExtension()
const { activitiesIcon, settingsSync } = me.imports.mods;

let activitiesIconMod;
let settingsSyncMod;

function init () {
    activitiesIconMod = new activitiesIcon.activitiesIcon();
    settingsSyncMod = new settingsSync.settingsSync();
}

function enable () {
    activitiesIconMod.enable();
    settingsSyncMod.enable();
}

function disable () {
    activitiesIconMod.disable();
    settingsSyncMod.disable();
}
