

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.-uPzbHvW.js","_app/immutable/chunks/scheduler.DYmyj1sh.js","_app/immutable/chunks/index.CQbjDcNK.js"];
export const stylesheets = [];
export const fonts = [];
