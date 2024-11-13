import { useState } from "react";

// Dummy data for course classes
const levels = ["1st year", "2nd year", "3rd year"];
const classes = ["Marketing", "Business", "Engineering", "Design"];

// Hourly time slots from 8:30 AM to 6:30 PM
const timeSlots = [
  "8:30 AM - 9:30 AM", "9:30 AM - 10:30 AM", "10:30 AM - 11:30 AM", "11:30 AM - 12:30 PM",
  "12:30 PM - 1:30 PM", "1:30 PM - 2:30 PM", "2:30 PM - 3:30 PM", "3:30 PM - 4:30 PM",
  "4:30 PM - 5:30 PM", "5:30 PM - 6:30 PM"
];

const WeeklySchedule = () => {
  // State for level and class selections
  const [selectedLevel, setSelectedLevel] = useState("");
  const [selectedClass, setSelectedClass] = useState("");

  // Initial schedule state (empty hours for simplicity)
  const [schedule, setSchedule] = useState({
    Monday: Array(timeSlots.length).fill(""),
    Tuesday: Array(timeSlots.length).fill(""),
    Wednesday: Array(timeSlots.length).fill(""),
    Thursday: Array(timeSlots.length).fill(""),
    Friday: Array(timeSlots.length).fill(""),
    Saturday: Array(timeSlots.length).fill("")
  });

  return (
    <div className="p-6 bg-[#34495E] min-h-screen rounded-lg">
      {/* Dropdowns for Level and Class */}
      <div className="flex justify-between mb-6">
        <div className="w-1/2 pr-4">
          <label htmlFor="level" className="block text-lg font-semibold text-[#96C9F4] mb-2">
            Select Level
          </label>
          <select
            id="level"
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(e.target.value)}
            className="w-full p-2 border rounded-md bg-[#2C3E50] text-white focus:outline-none focus:ring-2 focus:ring-[#3FA2F6]"
          >
            <option value="">Select Level</option>
            {levels.map((level, index) => (
              <option key={index} value={level}>
                {level}
              </option>
            ))}
          </select>
        </div>

        <div className="w-1/2 pl-4">
          <label htmlFor="class" className="block text-lg font-semibold text-[#96C9F4] mb-2">
            Select Class
          </label>
          <select
            id="class"
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
            className="w-full p-2 border rounded-md bg-[#2C3E50] text-white focus:outline-none focus:ring-2 focus:ring-[#3FA2F6]"
          >
            <option value="">Select Class</option>
            {classes.map((classOption, index) => (
              <option key={index} value={classOption}>
                {classOption}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Weekly Schedule Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-[#2C3E50] rounded-lg shadow-lg">
          <thead className=" text-[#96C9F4]">
            <tr>
              <th className="px-4 py-2 text-left">Day</th>
              {timeSlots.map((slot, index) => (
                <th key={index} className="px-4 py-2 text-left">{slot}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Object.keys(schedule).map((day) => (
              <tr key={day} className="text-gray-300">
                <td className="border px-4 py-2 text-white bg-[#34495E]">{day}</td>
                {schedule[day].map((_, index) => (
                  <td key={index} className="border px-4 py-2">
                    <span>empty</span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WeeklySchedule;
