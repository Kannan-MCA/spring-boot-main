const API_URL = "http://localhost:8080/api/submissions";

export const submitCode = async (problemId, code) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ problemId, code })
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Submit code failed:", error);
    throw error;
  }
};
