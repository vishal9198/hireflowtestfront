function OutputPanel({ output }) {
  return (
    <div className="h-full bg-base-100 flex flex-col">
      <div className="px-4 py-2 bg-base-200 border-b border-base-300 font-semibold text-sm">
        Output
      </div>

      <div className="flex-1 overflow-auto p-4 text-sm font-mono">
        {output === null && (
          <p className="text-base-content/50">
            Click "Run Code" to see the output here...
          </p>
        )}

        {output && output.success && (
          <div className="space-y-3">
            <div className="font-semibold">Verdict: {output.verdict}</div>

            <div>
              Passed: {output.passed} / {output.total}
            </div>

            {output.results?.map((test, index) => (
              <div
                key={index}
                className="border border-base-300 rounded p-3 bg-base-200"
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
        )}

        {output && !output.success && (
          <pre className="text-error whitespace-pre-wrap">{output.error}</pre>
        )}
      </div>
    </div>
  );
}

export default OutputPanel;
