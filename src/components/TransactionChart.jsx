import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function TransactionChart() {
  return (
    <div className="w-[100%] mx-auto border pt-5 border-gray-400 rounded-2xl overflow-hidden flex flex-wrap lg:flex-nowrap xl:flex-nowrap 2xl:flex-nowrap">
      <div className="p-8">
        <div className="mb-4">
          <p className="text-xl font-semibold">Total Sales & Cost</p>
          <p className="text-sm text-gray-400 font-light">Last 60 days</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-3xl text-[#6e62e5] font-bold">$956.82k</div>
          <div className="text-sm text-green-500 bg-green-300 inline-block rounded-full py-1 px-3">+5.4%</div>
        </div>
        <p className="text-sm text-gray-400 font-light mt-2">
          <span className="text-[#a299d6] font-bold">+8.20k</span> vs prev. 60 days
        </p>
      </div>
     
      <div className="w-full h-[200px]">
        <ResponsiveContainer>
          <BarChart
            data={[
              { name: 'Day 1', sales: 4000, cost: 2400 },
              { name: 'Day 2', sales: 3000, cost: 1398 },
              { name: 'Day 3', sales: 2000, cost: 9800 },
            ]}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="sales" fill="#6e62e5" />
            <Bar dataKey="cost" fill="#a299d6" className='rounded-xl' />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
