import ModelClient, { isUnexpected } from "@azure-rest/ai-inference";
import { AzureKeyCredential } from "@azure/core-auth";
// import fs from "fs";
// import path from "path";
import "dotenv/config";

const token = process.env["GITHUB_TOKEN"];
const endpoint = "https://models.github.ai/inference";
const model = "openai/gpt-4.1";
// console.log(token)
export async function main() {
//   const imgPath = path.join(process.cwd(), "assets/contoso_layout_sketch(1).jpg");
//   const imgBuffer = fs.readFileSync(imgPath);
//   const base64Image = imgBuffer.toString("base64");

  const client = ModelClient(
    endpoint,
    new AzureKeyCredential(token),
  );

  const response = await client.path("/chat/completions").post({
    body: {
      messages: [
        { role:"system", content: "You are a helpful assistant." },
        { role:"user", content: "What is the capital of France?" }
      ],
      temperature: 1.0,
      top_p: 1.0,
      model: model
    }
  });

  if (isUnexpected(response)) {
    let errorMsg = 'Unknown error from API response';
    if (response.body && response.body.error) {
      errorMsg = response.body.error.message || JSON.stringify(response.body.error);
    } else if (response.body) {
      errorMsg = JSON.stringify(response.body);
    }
    throw new Error(errorMsg);
  }

  if (
    !response.body ||
    !response.body.choices ||
    !response.body.choices[0] ||
    !response.body.choices[0].message ||
    !response.body.choices[0].message.content
  ) {
    throw new Error("No valid response from the model.");
  }

  console.log(response.body.choices[0].message.content);


main().catch((err) => {
  if (err instanceof Error) {
    console.error('The sample encountered an error:', err.message);
  } else if (typeof err === 'object' && err !== null) {
    console.error('The sample encountered an error:', JSON.stringify(err));
  } else {
    console.error('The sample encountered an error:', String(err));
  }
});
}
