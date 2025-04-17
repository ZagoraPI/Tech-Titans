import React, { useState } from 'react';

const ContactFormPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  const validate = () => {
    const newErrors: typeof errors = {};
    if (name.trim().length < 2) newErrors.name = 'Името трябва да е поне 2 символа.';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) newErrors.email = 'Моля въведи валиден имейл.';
    if (message.trim().length < 10) newErrors.message = 'Съобщението трябва да е поне 10 символа.';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); 
      return; 
    }
    
    console.log('Форма изпратена:', { name, email, message });
    alert('Формата е изпратена успешно!');
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="min-h-screen w-full bg-animated-gradient flex items-center justify-center px-4">
      <div className="w-full max-w-2xl p-8 backdrop-blur-md rounded-3xl shadow-2xl border border-white/30">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Свържи се с нас</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-1">Име</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`w-full border rounded-lg p-3 ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Имейл</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full border rounded-lg p-3 ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Съобщение</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={`w-full border rounded-lg p-3 h-32 resize-none ${
                errors.message ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
          </div>

          <button
            type="submit"
            className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition duration-200"
          >
            Изпрати
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactFormPage;
