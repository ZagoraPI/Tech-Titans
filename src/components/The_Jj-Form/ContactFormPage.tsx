import React, { useState } from 'react';

const ContactFormPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  const validate = () => {
    const newErrors: typeof errors = {};
    if (name.trim().length < 2) newErrors.name = 'The name must be at least 2 characters..';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) newErrors.email = 'Please enter a valid email..';
    if (message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters long.';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); 
      return; 
    }
    
    console.log('Form sent:', { name, email, message });
    alert('Form submitted successfully.!');
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="min-h-screen w-full bg-animated-gradient flex items-center justify-center px-4">
      <div className="w-full max-w-2xl p-8 backdrop-blur-md rounded-3xl shadow-2x1 border border-white/30">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Contact us need </h1>
        
        <form onSubmit={handleSubmit} className="space-y-6 space-x-6">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
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
            <label className="block text-sm font-medium mb-1">Email</label>
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
            <label className="block text-sm font-medium mb-1">Message</label>
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
