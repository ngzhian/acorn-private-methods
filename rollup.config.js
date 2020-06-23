export default {
  input: "index.js",
  output: [
    {
      file: "dist/acorn-private-methods.js",
      format: "cjs",
      sourcemap: true
    },
    {
      file: "dist/acorn-private-methods.mjs",
      format: "es",
      sourcemap: true
    }
  ]
}
