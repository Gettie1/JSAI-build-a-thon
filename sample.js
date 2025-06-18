import OpenAI from "openai";
import "dotenv/config";
import fs from "fs";
import path from "path";


const token = process.env["GITHUB_TOKEN"];
const endpoint = "https://models.github.ai/inference";
const modelName = "openai/gpt-4o";

export async function main() {
  const imagePath = path.join(process.cwd(), "assets/contoso_layout_sketch (1).jpg");
  const imageBuffer = fs.readFileSync(imagePath);
  const base64Image = imageBuffer.toString("base64");


  const client = new OpenAI({ baseURL: endpoint, apiKey: token });

  const response = await client.chat.completions.create({
    messages: [
        { role: 'system', content: 'You are a senior frontend developer' },
        {
          role: 'user',
          content: [
            {
              type: 'text',
              text: 'Write HTML and CSS code for this sample webpage based on the following sketch',
            },
            {
              type: 'image_url',
              image_url: {
                url: `data:image/jpeg;base64,${base64Image}`,
              },
            },
          ],
        },
      ],
      temperature: 1.0,
      top_p: 1.0,
      max_tokens: 1000,
      model: modelName
    });

  console.log(response.choices[0].message.content);
}

main().catch((err) => {
  console.error("The sample encountered an error:", err);
});