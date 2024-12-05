import React, { useState } from 'react';
import NotificacionImag from '../../images/servicio_notificaciones.png';

const NotificationPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [alarmName, setAlarmName] = useState('');
  const [repeat, setRepeat] = useState('once');
  const [selectedDays, setSelectedDays] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [repeatCount, setRepeatCount] = useState(1);
  const [repeatInterval, setRepeatInterval] = useState(5);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleDaySelection = (day) => {
    setSelectedDays((prevDays) =>
      prevDays.includes(day)
        ? prevDays.filter((d) => d !== day) // Elimina si ya está seleccionado
        : [...prevDays, day] // Agrega si no está seleccionado
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Alarma configurada: ${alarmName} a las ${selectedTime}`);
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="mt-6 mb-4 flex justify-center">
        <img
          src={NotificacionImag}
          alt="Imagen de servicio IA"
          className="w-32 h-auto rounded-md shadow-lg"
        />
      </div>
      <h1 className="text-4xl font-bold mb-6 text-center">Notificaciones</h1>

      <button
        className="bg-teal-600 text-white px-6 py-3 rounded-lg text-xl font-semibold"
        onClick={handleModalToggle}
      >
        Programar nueva notificación
      </button>

      <p className="mt-4 text-center text-lg">
        Con esta función podrás crear notificaciones personalizadas para no olvidar eventos importantes.
      </p>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg w-[600px]">
            <h2 className="text-3xl font-bold mb-6">Configurar Notificación</h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label className="block text-lg font-medium text-gray-700">
                  Nombre de Notificación
                </label>
                <input
                  type="text"
                  className="w-full p-3 mt-2 border border-gray-300 rounded-lg text-lg"
                  value={alarmName}
                  onChange={(e) => setAlarmName(e.target.value)}
                />
              </div>

              <div className="mb-6">
                <label className="block text-lg font-medium text-gray-700">
                  Repetir
                </label>
                <select
                  className="w-full p-3 mt-2 border border-gray-300 rounded-lg text-lg"
                  value={repeat}
                  onChange={(e) => setRepeat(e.target.value)}
                >
                  <option value="once">Una vez</option>
                  <option value="repeated">Repetidas</option>
                </select>
              </div>

              {repeat === 'repeated' ? (
                <div className="mb-6">
                  <label className="block text-lg font-medium text-gray-700">
                    Días de la semana
                  </label>
                  <div className="flex space-x-3 mt-3">
                    {[
                      { label: 'L', id: 'lunes' },
                      { label: 'M', id: 'martes' },
                      { label: 'M', id: 'miercoles' },
                      { label: 'J', id: 'jueves' },
                      { label: 'V', id: 'viernes' },
                      { label: 'S', id: 'sabado' },
                      { label: 'D', id: 'domingo' },
                    ].map(({ label, id }) => (
                      <button
                        type="button"
                        key={id}
                        onClick={() => handleDaySelection(id)}
                        className={`p-3 rounded-lg text-lg ${
                          selectedDays.includes(id)
                            ? 'bg-teal-600 text-white'
                            : 'bg-gray-200'
                        }`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="mb-6">
                  <label className="block text-lg font-medium text-gray-700">
                    Fecha y Hora
                  </label>
                  <input
                    type="datetime-local"
                    className="w-full p-3 mt-2 border border-gray-300 rounded-lg text-lg"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                  />
                </div>
              )}

              <div className="mb-6">
                <label className="block text-lg font-medium text-gray-700">
                  Hora de la notificación
                </label>
                <input
                  type="time"
                  className="w-full p-3 mt-2 border border-gray-300 rounded-lg text-lg"
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                />
              </div>

              <div className="mb-6">
                <label className="block text-lg font-medium text-gray-700">
                  Volver a mandar
                </label>
                <div className="flex items-center space-x-3">
                  <input
                    type="number"
                    min="1"
                    value={repeatCount}
                    onChange={(e) => setRepeatCount(e.target.value)}
                    className="w-1/3 p-3 border border-gray-300 rounded-lg text-lg"
                  />
                  <span>veces cada</span>
                  <input
                    type="number"
                    min="1"
                    value={repeatInterval}
                    onChange={(e) => setRepeatInterval(e.target.value)}
                    className="w-1/3 p-3 border border-gray-300 rounded-lg text-lg"
                  />
                  <span>minutos</span>
                </div>
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  className="bg-gray-300 text-black px-4 py-2 rounded-lg text-lg"
                  onClick={handleModalToggle}
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="bg-teal-600 text-white px-4 py-2 rounded-lg text-lg font-semibold"
                >
                  Guardar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationPage;
