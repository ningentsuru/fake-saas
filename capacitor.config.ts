import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.ningentsuru.app",
  appName: "fake-saas",
  webDir: "out",
  server: {
    androidScheme: "https",
  },
};

export default config;
