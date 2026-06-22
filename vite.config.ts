import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base: "./" makes all asset paths relative, so the build works whether it's
// served from a user page (username.github.io) or a project page
// (username.github.io/repo/). Routing uses HashRouter, so no extra base config
// is needed. If you switch to BrowserRouter later, set base to "/<repo-name>/".
export default defineConfig({
  base: "./",
  plugins: [react()],
});
