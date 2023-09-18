const {TranslationServiceClient} = require('@google-cloud/translate');

const translationClient = new TranslationServiceClient();

const projectId = 'vivid-spot-399221';
const location = 'global';

async function translateText(text) {
    const request = {
        parent: `projects/${projectId}/locations/${location}`,
        contents: [text],
        mimeType: 'text/plain', 
        sourceLanguageCode: 'en',
        targetLanguageCode: 'es',
    };

    const [response] = await translationClient.translateText(request);
    const textTranslated = response.translations[0].translatedText

    return textTranslated
}

module.exports = { translateText };