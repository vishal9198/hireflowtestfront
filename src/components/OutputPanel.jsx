function OutputPanel({ output }) {
  return (
    <div className="h-full bg-base-100 flex flex-col">
      <div className="px-4 py-2 bg-base-200 border-b border-base-300 font-semibold text-sm">
        Output
      </div>

      <div className="flex-1 overflow-auto p-4 text-sm">
        {output === null && (
          <p className="text-base-content/50">
            Click "Run Code" to see the output here...
          </p>
        )}

        {output && output.success && (
          <div className="space-y-6">
            {/* Execution Summary */}
            <div className="border border-base-300 rounded-lg p-4 bg-base-200">
              <h2 className="font-bold text-lg mb-3">Execution Summary</h2>

              <div className="space-y-2">
                <div>
                  <b>Verdict:</b>{" "}
                  <span
                    className={
                      output.verdict === "Accepted"
                        ? "text-success font-semibold"
                        : "text-error font-semibold"
                    }
                  >
                    {output.verdict}
                  </span>
                </div>

                <div>
                  <b>Passed:</b> {output.passed} / {output.total}
                </div>
              </div>
            </div>

            {/* AI Interview Evaluation */}
            {output.aiFeedback && (
              <div className="border border-base-300 rounded-lg p-4 bg-base-200">
                <h2 className="font-bold text-lg mb-4">
                  AI Interview Evaluation
                </h2>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <b>Overall Score:</b> {output.aiFeedback.overallScore}/10
                  </div>

                  <div>
                    <b>Algorithm:</b> {output.aiFeedback.algorithmScore}/10
                  </div>

                  <div>
                    <b>Code Quality:</b> {output.aiFeedback.codeQualityScore}/10
                  </div>

                  <div>
                    <b>Optimization:</b> {output.aiFeedback.optimizationScore}
                    /10
                  </div>

                  <div>
                    <b>Time Complexity:</b> {output.aiFeedback.timeComplexity}
                  </div>

                  <div>
                    <b>Space Complexity:</b> {output.aiFeedback.spaceComplexity}
                  </div>

                  <div className="col-span-2">
                    <b>Interview Readiness:</b>{" "}
                    {output.aiFeedback.interviewReadiness}
                  </div>

                  <div className="col-span-2">
                    <b>Hire Recommendation:</b>{" "}
                    {output.aiFeedback.hireRecommendation}
                  </div>
                </div>

                <div className="mt-4">
                  <b>Summary</b>

                  <p className="mt-2">{output.aiFeedback.summary}</p>
                </div>

                <div className="mt-4">
                  <b>Strengths</b>

                  <ul className="list-disc ml-6 mt-2">
                    {output.aiFeedback.strengths?.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4">
                  <b>Weaknesses</b>

                  <ul className="list-disc ml-6 mt-2">
                    {output.aiFeedback.weaknesses?.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4">
                  <b>Optimizations</b>

                  <ul className="list-disc ml-6 mt-2">
                    {output.aiFeedback.optimizations?.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4">
                  <b>Interviewer Feedback</b>

                  <p className="mt-2">
                    {output.aiFeedback.interviewerFeedback}
                  </p>
                </div>
              </div>
            )}

            {/* Test Cases */}
            <div>
              <h2 className="font-bold text-lg mb-3">Test Cases</h2>

              <div className="space-y-3">
                {output.results?.map((test, index) => (
                  <div
                    key={index}
                    className="border border-base-300 rounded-lg p-3 bg-base-200"
                  >
                    <div>
                      <b>Input:</b> {test.input}
                    </div>

                    <div>
                      <b>Expected:</b> {test.expected}
                    </div>

                    <div>
                      <b>Output:</b> {test.output || "(empty)"}
                    </div>

                    <div>
                      <b>Status:</b>{" "}
                      {test.passed ? (
                        <span className="text-success">Passed</span>
                      ) : (
                        <span className="text-error">Failed</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {output && !output.success && (
          <div className="border border-error rounded-lg p-4 bg-error/10">
            <pre className="text-error whitespace-pre-wrap">{output.error}</pre>
          </div>
        )}
      </div>
    </div>
  );
}

export default OutputPanel;
