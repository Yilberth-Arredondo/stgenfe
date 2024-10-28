import { CalendarDaysIcon } from '@heroicons/react/24/outline';

const Card = () => {
  return (
    <>
      <div className="w-1/3 overflow-hidden border-b-4 border-blue-500 bg-white">
        <img
          src="https://images.unsplash.com/photo-1573748240263-a4e9c57a7fcd"
          alt="People"
          className="h-32 w-full object-cover sm:h-48 md:h-64"
        />
        <div className="p-4 md:p-6">
          <p className="mb-1 text-xs font-semibold leading-none text-blue-500">
            News
          </p>
          <h3 className="mb-2 text-xl font-semibold leading-tight sm:leading-normal">
            The Coldest Sunset
          </h3>
          <div className="flex items-center text-sm">
            <CalendarDaysIcon className="mr-2 h-4 w-4 text-blue-500" />
            <p className="leading-none">21 Oct 2019</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
