import axios, { AxiosResponse } from 'axios';

interface OllamaEmbeddingResponse {
  embedding: number[];
}

async function generateEmbedding(text: string): Promise<number[]> {
  const response: AxiosResponse<OllamaEmbeddingResponse> = await axios.post(
    'http://localhost:11434/api/generate',
    {
      prompt: text,
      model: 'llama3' // Replace with your desired model
    }
  );

  return response.data.embedding;
}

export { generateEmbedding };