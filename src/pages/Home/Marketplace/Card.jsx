import { useCart } from '../../../hooks/useCart';
const Card = () => {
  const { addItemToCart } = useCart();
  const handleAddToCart = () => {
    const item = {
      id: Date.now(), // ID único para cada producto
      name: 'Apple AirPods',
      price: 95.0,
      description:
        'With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.',
    };

    addItemToCart(item);
  };
  return (
    <>
      <div className="relative flex w-96 flex-col rounded-xl bg-slate-100 bg-clip-border text-gray-700 shadow-md">
        <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
          <img
            src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=927&amp;q=80"
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="p-6">
          <div className="mb-2 flex items-center justify-between">
            <p className="text-blue-gray-900 block font-sans text-base font-medium leading-relaxed antialiased">
              Apple AirPods
            </p>
            <p className="text-blue-gray-900 block font-sans text-base font-medium leading-relaxed antialiased">
              $95.00
            </p>
          </div>
          <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
            With plenty of talk and listen time, voice-activated Siri access,
            and an available wireless charging case.
          </p>
        </div>
        <div className="p-6 pt-0">
          <button
            onClick={handleAddToCart}
            className="text-blue-gray-900 block w-full select-none rounded-lg bg-blue-300 px-6 py-3 text-center align-middle font-sans text-xs font-bold uppercase shadow-none shadow-gray-900/10 transition-all duration-150 hover:scale-105 hover:shadow-none hover:shadow-gray-900/20 focus:scale-105 focus:opacity-[0.85] focus:shadow-none active:scale-100 active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};
export default Card;
