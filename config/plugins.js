module.exports = ({ env }) => ({
  upload: {
    provider: "aws-s3",
    providerOptions: {
      accessKeyId: env("AWS_ACCESS_KEY_ID"),
      secretAccessKey: env("AWS_ACCESS_SECRET"),
      region: "us-east-1",
      params: {
        Bucket: "games-ecommerce-test",
      },
    },
  },
  email: {
    provider: "sendgrid",
    providerOptions: {
      apiKey: env("SENDGRIP_API_KEY"),
    },
    settings: {
      defaultFrom: "alexsnz.20g@gmail.com",
      defaultReplyTo: "alexsnz.20g@gmail.com",
      testAddress: "alexsnz.20g@gmail.com",
    },
  },
});
