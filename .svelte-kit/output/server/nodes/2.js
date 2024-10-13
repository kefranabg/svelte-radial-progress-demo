

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2._7aJKiZ6.js","_app/immutable/chunks/scheduler.DYmyj1sh.js","_app/immutable/chunks/index.CQbjDcNK.js"];
export const stylesheets = ["_app/immutable/assets/2.B1dvhvL_.css"];
export const fonts = [];
