const SessionTable = ({ sessions }) => {
  return (
    <div className="overflow-x-auto mt-8">
      <table className="min-w-full bg-white">
        <thead className="bg-gray-100">
          <tr>
            <th className="w-1/12 px-4 py-2">#</th>
            <th className="w-2/12 px-4 py-2">Session Date</th>
            <th className="w-2/12 px-4 py-2">Start Time</th>
            <th className="w-2/12 px-4 py-2">End Time</th>
            <th className="w-2/12 px-4 py-2">Verified By</th>
            <th className="w-2/12 px-4 py-2">Session Status</th>
            <th className="w-2/12 px-4 py-2">Remark</th>
            <th className="w-1/12 px-4 py-2">Imgs</th>
            <th className="w-1/12 px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {sessions.map((session, index) => (
            <tr key={index}
            style={{
              backgroundColor: index %2 !==0 ? "#D3D3D3" : "transparent"
            }}
            
             className="text-center">
              <td className="border px-4 py-2">{index + 1}</td>
              <td className="border px-4 py-2">{session.sessionDate}</td>
              <td className="border px-4 py-2">{session.startTime}</td>
              <td className="border px-4 py-2">{session.endTime}</td>
              <td className="border px-4 py-2">{session.verifiedBy}</td>
              <td className="border px-4 py-2">
                <span className={`px-2 py-1 rounded-full text-white ${
                  session.status === 'Pending' ? 'bg-yellow-500' : 'bg-blue-500'
                }`}>
                  {session.status}
                </span>
              </td>
              <td className="border px-4 py-2">{session.remark}</td>
              <td className="border px-4 py-2">N/A</td>
              <td className="border px-4 py-2">
                <button className="text-blue-600 hover:text-blue-900">•••</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      
    </div>
  );
};

export default SessionTable;
