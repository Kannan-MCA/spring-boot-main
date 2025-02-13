const API_URL = "http://localhost:8080/api/problems";

export const fetchProblems = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Fetch problems failed:", error);
    throw error;
  }
};

export const fetchProblemById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Fetch problem by id failed:", error);
    throw error;
  }
};
