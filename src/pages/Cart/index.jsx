import { useState } from 'react';
import { useCart } from '../../hooks/useCart';
import Modal from './Modal';

const CartPayment = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [errors, setErrors] = useState({});
  const { cartItems, totalItems } = useCart();

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const handlePayment = e => {
    e.preventDefault();
    if (validateForm()) {
      alert('Pago realizado con éxito');
      setIsModalOpen(false);
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!name) newErrors.name = 'El nombre es requerido.';
    if (!cardNumber)
      newErrors.cardNumber = 'El número de tarjeta es requerido.';
    if (cardNumber && cardNumber.length !== 16)
      newErrors.cardNumber = 'El número de tarjeta debe tener 16 dígitos.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // true si no hay errores
  };

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={handleOpenModal}
        className="rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600"
      >
        Pagar ({totalItems} artículos)
      </button>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <div className="inline-flex w-full">
          <div className="flex w-1/3 flex-wrap content-start">
            <h2 className="mb-4 text-xl font-bold">Resumen de Pago</h2>
            <ul className="mb-4 w-full">
              {cartItems.map(item => (
                <li
                  key={item.id}
                  className="flex justify-between border-b py-2"
                >
                  <span>{item.name}</span>
                  <span>${item.price.toFixed(2)}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-2/3 p-5">
            <form
              action=""
              onSubmit={handlePayment}
              className="flex w-full flex-wrap gap-5"
            >
              <div className="w-full">
                <label className="block text-sm font-medium text-gray-700">
                  Nombre
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className={`mt-1 w-full rounded-md border border-solid p-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 ${errors.name ? 'border-red-500' : 'border-slate-400'}`}
                />
                {errors.name && (
                  <p className="text-sm text-red-600">{errors.name}</p>
                )}
              </div>
              <div className="w-full">
                <label className="block text-sm font-medium text-gray-700">
                  Número de Tarjeta
                </label>
                <input
                  type="text"
                  value={cardNumber}
                  onChange={e => setCardNumber(e.target.value)}
                  maxLength="16"
                  className={`mt-1 w-full rounded-md border border-solid p-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 ${errors.name ? 'border-red-500' : 'border-slate-400'}`}
                />
                {errors.cardNumber && (
                  <p className="text-sm text-red-600">{errors.cardNumber}</p>
                )}
              </div>
              <button
                type="submit"
                onClick={handlePayment}
                className="ml-auto rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
              >
                Confirmar Pago
              </button>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CartPayment;
