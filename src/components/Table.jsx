import React from 'react'

const data = [
  {
    name: 'John Doe',
    email: 'john.doe@example.com',
    status: 'Success',
    date: '2023-10-10',
    invoice: 'INV001',
    people: [
      { id: 1, name: 'Person 1' },
      { id: 2, name: 'Person 2' },
      { id: 3, name: 'Person 3' },
    ],
  },
  {
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    status: 'Pending',
    date: '2023-10-09',
    invoice: 'INV002',
    people: [
      { id: 4, name: 'Person 4' },
      { id: 5, name: 'Person 5' },
    ],
  },
];


function TransastionHistory() {
  return (
    <div className="overflow-x-auto w-[100%] ">
    <table className="min-w-full border-b border-gray-300 "> 
      <thead>
        <tr>
          <th className="py-2 px-4 border-b">Customer</th>
          <th className="py-2 px-4 border-b">Status</th>
          <th className="py-2 px-4 border-b">Date</th>
          <th className="py-2 px-4 border-b">Invoice</th>
          <th className="py-2 px-4 border-b">People</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td className="py-2 px-4 border-b">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-2"></div>
                <div>
                  <div className="font-bold">{row.name}</div>
                  <div className="text-gray-400 text-xs">{row.email}</div>
                </div>
              </div>
            </td>
            <td className="py-2 px-4 w-7 h-3  rounded-full ">{row.status}</td>
            <td className="py-2 px-4 border-b">{row.date}</td>
            <td className="py-2 px-4 border-b">{row.invoice}</td>
            <td className="py-2 px-4 border-b relative">
              {row.people.slice(2, 1).map((person, idx) => (
                <div
                  key={idx}
                  className={`w-8 h-8 rounded-full bg-blue-500 border  absolute ${
                    idx === 1 ? 'left-4' : ''
                  }`}
                  style={{
                    left: idx * 2 + 'rem',
                    zIndex: 10 - idx,
                  }}
                ></div>
              ))}
              <div className="w-8 h-8 rounded-full bg-blue-500 border  flex items-center justify-center text-white font-bold">
                {row.people.length}
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default TransastionHistory;


  
  
  
  
  