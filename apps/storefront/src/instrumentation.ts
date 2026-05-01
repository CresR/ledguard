// Runs before all server-side code in Next.js.
// Node.js 22+ exposes `window` as globalThis and may have a broken/stub
// localStorage (e.g. when --localstorage-file has an invalid path).
// We replace it with a reliable in-memory shim for the server process.
export function register() {
  // Only patch in Node.js runtime (not in edge runtime / browser)
  if (typeof process !== "undefined" && process.versions?.node) {
    const makeStore = () => {
      const s: Record<string, string> = {}
      return {
        getItem: (k: string) => s[k] ?? null,
        setItem: (k: string, v: string) => { s[k] = v },
        removeItem: (k: string) => { delete s[k] },
        clear: () => { for (const k in s) delete s[k] },
        get length() { return Object.keys(s).length },
        key: (i: number) => Object.keys(s)[i] ?? null,
      }
    }
    ;(globalThis as any).localStorage = makeStore()
    ;(globalThis as any).sessionStorage = makeStore()
    // Ensure window alias is consistent
    if (typeof (globalThis as any).window !== "undefined") {
      ;(globalThis as any).window.localStorage = (globalThis as any).localStorage
      ;(globalThis as any).window.sessionStorage = (globalThis as any).sessionStorage
    }
  }
}
