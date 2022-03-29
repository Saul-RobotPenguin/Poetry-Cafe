import axios from "axios";

export async function randomPoem() {
  const response = await axios.get(`https://poetrydb.org/random`);
  return response;
}

export async function searchPoemByTitle(title) {
  const response = await axios.get(`https://poetrydb.org/title/${title}`);
  return response;
}
