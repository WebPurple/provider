export const config = {
  port: process.env.PORT || 8080,
  access: {
    origins: ['webpurple.netlify.com', 'webpurple.net'],
    token: process.env.TOKEN,
  },
  vk: {
    apiVersion: '5.80',
    apiUrl: 'https://api.vk.com/method',
    serviceToken: process.env.VK_SERVICE_TOKEN,
  },
  github: {
    apiUrl: 'https://api.github.com',
  },
};
