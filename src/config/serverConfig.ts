process.loadEnvFile();

export default {
  DB_URL: process.env.DB_URL || "",
};
