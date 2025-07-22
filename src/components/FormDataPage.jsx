function FormDataPage() {
  const submissions = JSON.parse(
    localStorage.getItem("submittedFormData") || "[]"
  );

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">All Form Submissions</h2>

      {submissions.length === 0 ? (
        <p>No form data submitted yet.</p>
      ) : (
        <div className="space-y-6">
          {submissions.map((entry, index) => (
            <div
              key={index}
              className="border p-4 rounded-md bg-gray-50 shadow-sm"
            >
              <p className="text-sm text-gray-500 mb-2">
                Submitted on: {new Date(entry.timestamp).toLocaleString()}
              </p>
              <ul className="list-disc pl-5 text-sm">
                {Object.entries(entry.data).map(([key, value]) => (
                  <li key={key}>
                    <strong>{key}:</strong> {String(value)}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default FormDataPage;
