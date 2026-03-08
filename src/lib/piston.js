// Piston API is a service for code execution

const LANGUAGE_VERSIONS = {
  javascript: { language: "javascript", version: "15.10.0" },
  python: { language: "python", version: "3.10.0" },
  java: { language: "java", version: "15.0.2" },
};

/**
 * @param {string} language
 * @param {string} code
 */
export async function executeCode(language, code) {
  try {
    const languageConfig = LANGUAGE_VERSIONS[language];

    if (!languageConfig) {
      return {
        success: false,
        error: `Unsupported language: ${language}`,
      };
    }

    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/code/execute`,
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          language: languageConfig.language,
          version: languageConfig.version,
          code,
        }),
      },
    );

    if (!response.ok) {
      return {
        success: false,
        error: `HTTP error! status: ${response.status}`,
      };
    }

    const data = await response.json();

    const output = data?.run?.output || "";
    const stderr = data?.run?.stderr || "";

    if (stderr) {
      return {
        success: false,
        output,
        error: stderr,
      };
    }

    return {
      success: true,
      output: output || "No output",
    };
  } catch (error) {
    return {
      success: false,
      error: `Failed to execute code: ${error.message}`,
    };
  }
}
