import { resolve } from "path";

export default {
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
      },
      output: {
        entryFileNames: "asserts/foca-ui.js",
        assetFileNames: (assetInfo) => {
          if (assetInfo.type === "asset" && /\.(css)$/i.test(assetInfo.name)) {
            return "asserts/foca-ui.css";
          }
          return "asserts/[ext]/[name]-[hash].[ext]";
        },
      },
    },
  },
};
