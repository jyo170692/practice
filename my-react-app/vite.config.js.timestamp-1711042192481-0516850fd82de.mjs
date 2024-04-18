// vite.config.js
import { defineConfig } from "file:///C:/Users/Dell/OneDrive/Desktop/practice/my-react-app/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/Dell/OneDrive/Desktop/practice/my-react-app/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "https://ecapi.onrender.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "/api")
      }
    }
  },
  plugins: [react()]
});
export {
  vite_config_default as default
};
// //# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxEZWxsXFxcXE9uZURyaXZlXFxcXERlc2t0b3BcXFxccHJhY3RpY2VcXFxcbXktcmVhY3QtYXBwXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxEZWxsXFxcXE9uZURyaXZlXFxcXERlc2t0b3BcXFxccHJhY3RpY2VcXFxcbXktcmVhY3QtYXBwXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9EZWxsL09uZURyaXZlL0Rlc2t0b3AvcHJhY3RpY2UvbXktcmVhY3QtYXBwL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCdcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHNlcnZlcjoge1xuICAgIHByb3h5OiB7XG4gICAgICAnL2FwaSc6IHtcbiAgICAgICAgdGFyZ2V0OlwiaHR0cHM6Ly9lY2FwaS5vbnJlbmRlci5jb21cIixcbiAgICAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLFxuICAgICAgICByZXdyaXRlOiAocGF0aCkgPT4gcGF0aC5yZXBsYWNlKC9eXFwvYXBpLywgJy9hcGknKVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgXG4gIHBsdWdpbnM6IFtyZWFjdCgpXSxcbiBcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTRWLFNBQVMsb0JBQW9CO0FBQ3pYLE9BQU8sV0FBVztBQUdsQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixRQUFRO0FBQUEsSUFDTixPQUFPO0FBQUEsTUFDTCxRQUFRO0FBQUEsUUFDTixRQUFPO0FBQUEsUUFDUCxjQUFjO0FBQUEsUUFDZCxTQUFTLENBQUMsU0FBUyxLQUFLLFFBQVEsVUFBVSxNQUFNO0FBQUEsTUFDbEQ7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBRUEsU0FBUyxDQUFDLE1BQU0sQ0FBQztBQUVuQixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
