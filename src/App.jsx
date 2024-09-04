import  { useState } from 'react';
import SessionTable from './SessionTable';

const SessionScheduler = () => {
  // State to manage form inputs
const model={
  sessionDate: '',
  sessionTime: '',
  totalSessions: '',
  sessionInterval: '',
  preferredDays: [],
}

  const [formData, setFormData] = useState(model);

  // Array of unique day identifiers
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const [sessions, setSessions] = useState([]);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle day selection
  const toggleDaySelection = (day) => {
    setFormData((prevState) => {
      const { preferredDays } = prevState;
      if (preferredDays.includes(day)) {
        return {
          ...prevState,
          preferredDays: preferredDays.filter((d) => d !== day),
        };
      } else {
        return {
          ...prevState,
          preferredDays: [...preferredDays, day],
        };
      }
    });
  };

  // Handle form submission
  const handleSave = () => {
    // Validation can be added here
    if (!formData.sessionDate || !formData.sessionTime || !formData.totalSessions || !formData.sessionInterval) {
      alert('Please fill in all fields');
      return;
    }

    const newSession = {
      sessionDate: formData.sessionDate,
      startTime: formData.sessionTime,
      endTime: '02:00 am', // Static end time 
      verifiedBy: 'Shivam test', // Static data
      status: 'Pending', // Static data
      remark: 'N/A', // Static data
    };

    setSessions([...sessions, newSession]);

    setFormData(model)
  };

  // Handle form reset
  const handleCancel = () => {
    setFormData(model);
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {/* Session Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Session Date</label>
          <input
            type="date"
            name="sessionDate"
            value={formData.sessionDate}
            onChange={handleInputChange}
            className="mt-1 block w-full p-2 border rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        {/* Session Time */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Session Time</label>
          <input
            type="time"
            name="sessionTime"
            value={formData.sessionTime}
            onChange={handleInputChange}
            className="mt-1 block w-full p-2 border rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        {/* Total Sessions */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Total Session(s)</label>
          <input
            type="number"
            name="totalSessions"
            value={formData.totalSessions}
            onChange={handleInputChange}
            className="mt-1 block w-full p-2 border rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        {/* Session Interval */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Session Interval</label>
          <div className="flex items-center mt-1">
            <input
              type="number"
              name="sessionInterval"
              value={formData.sessionInterval}
              onChange={handleInputChange}
              className="block w-1/3 rounded-md p-2 border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
            <span className="ml-2">Days</span>
          </div>
        </div>
      </div>

      {/* Preferred Days */}
      <div className="mt-6">
        <label className="block text-sm font-medium text-gray-700">Preferred Days</label>
        <div className="flex space-x-2 mt-2">
          {days.map((day, index) => (
            <button
              key={index}
              type="button"
              onClick={() => toggleDaySelection(day)}
              className={`px-4 py-2 border rounded-md ${
                formData.preferredDays.includes(day)
                  ? 'bg-blue-100 border-blue-500 text-blue-500'
                  : 'bg-white border-gray-300 text-gray-700'
              }`}
            >
              {day}
            </button>
          ))}
        </div>
      </div>

      {/* Save and Cancel Buttons */}
      <div className="mt-8 flex justify-end space-x-4">
        <button
          onClick={handleCancel}
          className="px-6 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          Cancel
        </button>
        <button
          onClick={handleSave}
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Save
        </button>
      </div>

      {/* Session Table */}
      <SessionTable sessions={sessions} />
    </div>
  );
};

export default SessionScheduler;

