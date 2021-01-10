module.exports = async (client) => {
  console.log(`[API]  Нэрвтэрсэн ${client.user.username}`);
  await client.user.setActivity("#Mh", {
    type: "LISTENING",//can be LISTENING, WATCHING, PLAYING, STREAMING
  });
};
