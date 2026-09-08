import pdf from "pdf-parse";


export const extractTextFromPdf = async (fileBuffer) => {
  try {
    const data = await pdf(fileBuffer);
    // console.log(data);
    return data.text;
  } catch (error) {
    throw new Error("Failed to extract text from PDF");
  }
}
