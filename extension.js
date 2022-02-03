const ExtensionUtils = imports.misc.extensionUtils;
const me = ExtensionUtils.getCurrentExtension()
const { activitiesIcon, hiddenDock } = me.imports.mods;

let activitiesIconMod;
let hiddenDockMod;

function init () {
    activitiesIconMod = new activitiesIcon.activitiesIcon();
    hiddenDockMod = new hiddenDock.Extension();
}

function enable () {
    activitiesIconMod.enable();
    hiddenDockMod.enable();
}

function disable () {
    activitiesIconMod.disable();
    hiddenDockMod.disable();
}