const { TextServiceClient } = require("@google-ai/generativelanguage").v1beta2;
const { GoogleAuth } = require("google-auth-library");

const MODEL_NAME = "models/text-bison-001";
const API_KEY = "AIzaSyD8448i16-GhGJkC_EH8OiodZ135Pp9Xn8";

const client = new TextServiceClient({
  authClient: new GoogleAuth().fromAPIKey(API_KEY),
});

async function sendRequest(prompt) {
  try {
    const res = await client.generateText({
      model: MODEL_NAME,
      prompt: {
        text: prompt,
      },
    });
    const result = res[0].candidates[0].output;
    return result;
  } 
  catch (error) {
    console.error("Error al llamar a sendRequest:", error);
    throw error;
  }
}

module.exports = { sendRequest };
