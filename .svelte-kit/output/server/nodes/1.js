

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.DGKhGWOM.js","_app/immutable/chunks/scheduler.DYmyj1sh.js","_app/immutable/chunks/index.CQbjDcNK.js","_app/immutable/chunks/entry.BzZ7R0Lb.js"];
export const stylesheets = [];
export const fonts = [];
