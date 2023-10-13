import React, { useState } from 'react';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const handlePrevWeek = () => {
    setCurrentDate(prevDate => {
      const newDate = new Date(prevDate);
      newDate.setDate(prevDate.getDate() - 7);
      return newDate;
    });
  }

  const handleNextWeek = () => {
    setCurrentDate(prevDate => {
      const newDate = new Date(prevDate);
      newDate.setDate(prevDate.getDate() + 7);
      return newDate;
    });
  }

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const currentDateDay = currentDate.getDay();
  const startDate = new Date(currentDate);
  startDate.setDate(currentDate.getDate() - currentDateDay);

  const datesArray = Array.from({ length: 7 }, (_, i) => {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + i);
    return date;
  });

  return (
    <div className="calendar p-4   ">
      <div className="flex justify-between mb-4">
        <div className="flex items-center">
          <span className=" mr-2">
            {new Date(currentDate).toLocaleString('en-us', { month: 'long' })}
          </span>
          <span className="">
            {currentDate.getFullYear()}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <button className="text-xl font-light border border-gray-400 rounded-full w-7" onClick={handlePrevWeek}>&#9664;</button>
          <button className="text-xl font-light border border-gray-400 rounded-full w-7" onClick={handleNextWeek}>&#9654;</button>
        </div>
      </div>
      <div className="flex mb-2">
        {daysOfWeek.map((day, index) => (
          <div key={index} className="flex-1 text-center text-sm text-gray-400">{day}</div>
        ))}
      </div>
      <div className="flex flex-wrap text-sm">
        {datesArray.map((date, index) => (
          <div 
            key={index} 
            className={`flex-1 text-center p-1 rounded-full mb-2 ${
              date.getDate() === new Date().getDate() 
                ? 'bg-purple-500' 
                : ''
            }`}
          >
            {date.getDate()}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calendar;
