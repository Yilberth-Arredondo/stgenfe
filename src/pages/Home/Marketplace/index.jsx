import { useState } from 'react';
import Card from './Card';

const Marketplace = () => {
  const [expanded, setExpanded] = useState(false);
  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="flex flex-col items-center">
      <div
        className={`relative flex flex-wrap justify-between gap-4 overflow-hidden px-5 transition-all duration-500 ${expanded ? 'max-h-full' : 'max-h-[660px]'}`}
      >
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        {!expanded && (
          <div className="absolute bottom-0 left-0 h-20 w-full bg-gradient-to-t from-gray-200 to-transparent" />
        )}
      </div>
      <button
        onClick={handleToggle}
        className="mt-4 rounded bg-blue-300 px-6 py-2 text-black hover:bg-blue-400"
      >
        {expanded ? 'view less' : 'View more products'}
      </button>
    </div>
  );
};
export default Marketplace;
