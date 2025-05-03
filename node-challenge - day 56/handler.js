module.exports.ola = async (event) => {
  const nome = event.queryStringParameters?.nome || "Mundo";

  return {
    statusCode: 200,
    body: JSON.stringify({ mensagem: `Olá, ${nome}!` }),
  };
};
