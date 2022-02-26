const ExtensionUtils = imports.misc.extensionUtils;
const me = ExtensionUtils.getCurrentExtension()
const { activitiesIcon } = me.imports.mods;

let activitiesIconMod;
let hiddenDockMod;

function init () {
    activitiesIconMod = new activitiesIcon.activitiesIcon();
}

function enable () {
    activitiesIconMod.enable();
}

function disable () {
    activitiesIconMod.disable();
}
