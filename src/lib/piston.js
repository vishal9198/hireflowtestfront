// Piston API is a service for code execution

const LANGUAGE_VERSIONS = {
  javascript: { language: "javascript", version: "15.10.0" },
  python: { language: "python", version: "3.11.0" },
  java: { language: "java", version: "15.0.2" },
};

/**
 * @param {string} language
 * @param {string} code
 */
export async function executeCode(problemId, language, code) {
  try {
    const languageConfig = LANGUAGE_VERSIONS[language];

    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/submissions/submit`,
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          problemId,
          language: languageConfig.language,

          code,
        }),
      },
    );

    const data = await response.json();

    if (!response.ok) {
      return {
        success: false,
        error: "Submission failed",
      };
    }

    return {
      success: true,
      verdict: data.verdict,
      passed: data.passed,
      total: data.total,
      results: data.results,
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
    };
  }
}
