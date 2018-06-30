type Config = {
  port: string | number;
  apiVersion: string;
  apiUrl: string;
  serviceToken: string;
};

export const config: Config = {
  port: process.env.PORT || 8080,
  apiVersion: "5.80",
  apiUrl: "https://api.vk.com/method",
  serviceToken: process.env.SERVICE_TOKEN
};
