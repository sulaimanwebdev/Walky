import { Link } from 'react-router-dom';

const data = [
  {
    key: "MUSE_1453567",
    status: "Completed",
    gender: "Male",
    age: 90,
    expected: "ST",
    predicted: "ST",
    actions: "Re-analyze",
  },

  {
    key: "MUSE_123747",
    status: "Completed",
    gender: "Male",
    age: 90,
    expected: "ST",
    predicted: "VT",
    actions: "Re-analyze",
  },

  {
    key: "MUSE_12645",
    status: "Completed",
    gender: "Male",
    age: 90,
    expected: "ST",
    predicted: "ST",
    actions: "Re-analyze",
  },

  // Add more data objects as needed
];

const PatientAnalysis = (props:any) => {

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full border-collapse table-auto whitespace-nowrap">
        <thead>
          <tr className="border-solid border-b-2 border-black">
            <td className="px-4 py-3 font-bold">Key</td>
            <td className="px-4 py-3 font-bold">Status</td>
            <td className="px-4 py-3 font-bold">Gender</td>
            <td className="px-4 py-3 font-bold">Age</td>
            <td className="px-4 py-3 font-bold">Expected</td>
            <td className="px-4 py-3 font-bold">Predicted</td>
            <td className="px-4 pr-0 py-3 font-bold">Actions</td>
          </tr>
        </thead>
        <tbody className=''>
          {data.map((row) => (
            <tr
              key={row.key}
            >
              <td className="px-4 py-4 text-walkkyBlue border-solid border-b border-black"><Link to={`/data-sets/${props.HospitalName?.replace(/ /g, '-') ?? ''}/${row.key}`}>{row.key}</Link></td>
              <td className="px-4 py-4 text-[#777777] border-solid border-b border-black">{row.status}</td>
              <td className="px-4 py-4 text-[#777777] border-solid border-b border-black">{row.gender}</td>
              <td className="px-4 py-4 text-[#777777] border-solid border-b border-black">{row.age}</td>
              <td className="px-4 py-4 text-[#777777] border-solid border-b border-black">{row.expected}</td>
              <td className="px-4 py-4 text-[#777777] border-solid border-b border-black"><span className={`py-1.5 px-3.5 rounded-full bg-opacity-30 ${row.predicted === "VT" ? "bg-walkyOrange" : "bg-hospitalGreen"}`}>{row.predicted}</span></td>
              <td className="px-4 pr-0 py-4 text-walkkyBlue border-solid border-b border-black"><Link to={`/data-sets/${props.HospitalName?.replace(/ /g, '-') ?? ''}/${row.key}`} className='py-1 px-3.5 rounded-full bg-white border-solid border border-walkkyBlue'>{row.actions}</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientAnalysis;
