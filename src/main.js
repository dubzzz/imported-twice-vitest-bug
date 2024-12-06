export async function compute() {
  return (
    (await import("./constants")).default +
    (await import("./constants")).default
  );
}
