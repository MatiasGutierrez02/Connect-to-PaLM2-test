const { sendRequest } = require("../utils/palm2-markersuite.js");

const prompt = "Give me an exercise routine for a person who weighs 80kg, is 1.80m tall, trains 3 days a week and rests 4 and their goal is to gain strength."
sendRequest(prompt).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log("error: " + error)
})