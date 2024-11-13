import { useState } from "react";
import { FaCalendarAlt, FaFileAlt, FaCheckCircle, FaTimesCircle } from "react-icons/fa";

// Sample list of documents that students can request
const documentList = [
  { id: 1, name: "Official Transcript" },
  { id: 2, name: "Letter of Recommendation" },
  { id: 3, name: "Certificate of Enrollment" },
  { id: 4, name: "Degree Certificate" },
  { id: 5, name: "Student ID Card" },
];

// Status for requests
const statusOptions = [
  { id: "pending", label: "Pending", color: "text-yellow-500" },
  { id: "processed", label: "Processed", color: "text-green-500" },
  { id: "rejected", label: "Rejected", color: "text-red-500" },
];

const DocumentRequest = () => {
  const [selectedDocument, setSelectedDocument] = useState("");
  const [requestDate, setRequestDate] = useState("");
  const [requestHistory, setRequestHistory] = useState([]);

  const handleRequestSubmit = () => {
    // Simulate adding a request to history
    const newRequest = {
      id: requestHistory.length + 1,
      document: selectedDocument,
      date: requestDate,
      status: "pending", // Initial status is "pending"
    };

    setRequestHistory([newRequest, ...requestHistory]);
    setSelectedDocument("");
    setRequestDate("");
  };

  return (
    <div className="bg-[#34495E] p-6 rounded-3xl mt-16 rounded-lg shadow-lg space-y-6">
      {/* Title */}
      <h2 className="text-3xl font-semibold text-[#96C9F4] mb-6">Request a Document</h2>

      {/* Document Request Form */}
      <div className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="document" className="text-lg text-white mb-2">
            Select Document
          </label>
          <select
            id="document"
            value={selectedDocument}
            onChange={(e) => setSelectedDocument(e.target.value)}
            className="p-3 bg-[#2C3E50] text-white rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-[#3FA2F6]">
            <option value="" disabled>Select a document</option>
            {documentList.map((doc) => (
              <option key={doc.id} value={doc.name}>
                {doc.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="date" className="text-lg text-white mb-2">
            Select Date
          </label>
          <div className="flex items-center bg-[#2C3E50] p-3 rounded-md shadow-md">
            <FaCalendarAlt className="text-[#96C9F4] mr-3" />
            <input
              type="date"
              id="date"
              value={requestDate}
              onChange={(e) => setRequestDate(e.target.value)}
              className="bg-[#2C3E50] text-white focus:outline-none focus:ring-2 focus:ring-[#3FA2F6] rounded-md p-2"
            />
          </div>
        </div>

        <button
          onClick={handleRequestSubmit}
          className="w-full py-2 text-white bg-[#3FA2F6] hover:bg-[#0F67B1] rounded-lg focus:outline-none transition duration-200 ease-in-out"
          disabled={!selectedDocument || !requestDate}
        >
          Submit Request
        </button>
      </div>

      {/* Request History */}
      <div className="mt-8">
        <h3 className="text-2xl font-semibold text-[#96C9F4]">Request History</h3>
        <div className="space-y-4 mt-4">
          {requestHistory.length > 0 ? (
            requestHistory.map((request) => (
              <div
                key={request.id}
                className="bg-[#34495E] p-4 rounded-lg shadow-md flex justify-between items-center">
                <div className="flex flex-col">
                  <span className="text-lg text-white font-semibold">{request.document}</span>
                  <span className="text-sm text-gray-400">Requested on: {new Date(request.date).toLocaleDateString()}</span>
                </div>
                <span className={`text-sm ${statusOptions.find(status => status.id === request.status).color}`}>
                  {statusOptions.find(status => status.id === request.status).label}
                </span>
              </div>
            ))
          ) : (
            <p className="text-gray-400">No requests yet. Submit your first document request!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DocumentRequest;
