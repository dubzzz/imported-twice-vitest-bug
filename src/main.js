const load = () => import("./constants");

export async function preload() {
  load();
}
export async function compute() {
  return { first: (await load()).default, second: (await load()).default };
}
