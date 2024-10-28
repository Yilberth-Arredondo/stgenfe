import { FaceFrownIcon } from '@heroicons/react/24/outline';
const Error404 = () => {
  return (
    <div className="flex h-[calc(100vh-5rem)] w-screen flex-wrap content-center justify-center text-slate-400">
      <FaceFrownIcon className="mb-5 h-32 w-32" />
      <p className="mb-5 w-full text-center text-4xl font-bold">404</p>
      <p className="text-2xl">
        The page you are searching is not found try another one
      </p>
    </div>
  );
};
export default Error404;
