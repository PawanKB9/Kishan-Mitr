import { useState } from 'react';
import { BellAlertIcon, BellSlashIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';


const todos = [
  {
    cropName: 'Wheat',
    date: '2025-06-10',
    suggestions: ["Irrigation: Daily light flooding","Fertilizer: DAP 30kg/acre next week","Pesticide: Spray Neem oil in 3 days"],
  },
  {
    cropName: 'Rice',
    date: '2025-06-12',
    suggestions: ["Irrigation: Daily light flooding","Fertilizer: DAP 30kg/acre next week","Pesticide: Spray Neem oil in 3 days"],
  },
];

const TodoAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleTodo = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-6 py-4 px-2 sm:px-6">
      {todos.map((todo, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="bg-white shadow rounded-lg overflow-hidden border border-gray-200">
            {/* <button
              onClick={() => toggleTodo(index)}
              className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-gray-50"
            >
            
            <p className="font-semibold text-lg">{todo.cropName}</p>
            <div className='flex justify-between flex-wrap whitespace-nowrap gap-2'>
                <p className="text-sm sm:text-base text-gray-500">Planted At : </p>
                <p className="text-sm sm:text-base text-gray-500"> { todo.date }</p>
            </div>         

              {isOpen ? (
                <ChevronUpIcon className="w-6 h-6 text-blue-600" />
              ) : (
                <ChevronDownIcon className="w-6 h-6 text-gray-600" />
              )}
            </button> */}

            <button
  onClick={() => toggleTodo(index)}
  className="w-full flex items-center justify-between px-4 py-5 text-left hover:bg-gray-50"
>
  <p className="font-semibold sm:font-bold text-lg sm:text-xl">{todo.cropName}</p>
  <div className="flex justify-between sm:font-semibold flex-wrap whitespace-nowrap gap-2">
    <p className="text-sm sm:text-base text-gray-500">Planted At :</p>
    <p className="text-sm sm:text-base text-gray-500">{todo.date}</p>
  </div>
  {isOpen ? (
    <BellSlashIcon className="w-6 h-6 text-green-600" />
  ) : (
    <BellAlertIcon className="w-6 h-6 text-red-500 animate-pulse" />
  )}
</button>

            {isOpen && (
              <div className="px-4 pb-4 pt-2 bg-gray-50 border-t border-gray-200">
                <p className="font-medium text-gray-700">Suggestions:</p>
                { todo.suggestions.map((s, ind) => (
                    <div key={ind} className="mt-2 bg-white border border-dashed border-gray-300 rounded p-3 text-sm text-gray-700 whitespace-pre-line">
                    {s}
                   </div>
                )) }
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default TodoAccordion;
