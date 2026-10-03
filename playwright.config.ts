import { defineConfig } from "@playwright/test";

import { BASE_URL } from "./src/config/env";

export default defineConfig({
  timeout: 20000,
  testDir: "./tests",
  use: {
    baseURL: BASE_URL,
    storageState: 'src/utils/auth.json',
  },
  reporter: "html", 
  
});