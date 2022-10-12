const ExtensionUtils = imports.misc.extensionUtils;
const me = ExtensionUtils.getCurrentExtension()
const { activitiesIcon, risiTheme, accentWallpaper } = me.imports.mods;

let activitiesIconMod;
let settingsSyncMod;

function init () {
    activitiesIconMod = new activitiesIcon.activitiesIcon();
    risiThemeMod = new risiTheme.risiTheme();
    accentWallpaperMod = new accentWallpaper.accentWallpaper();
}

function enable () {
    activitiesIconMod.enable();
    risiThemeMod.enable();
    accentWallpaperMod.enable();
}

function disable () {
    activitiesIconMod.disable();
    risiThemeMod.disable();
    accentWallpaperMod.disable();
}
