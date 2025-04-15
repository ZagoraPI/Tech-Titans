import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import  NikiForm  from '@/components/Niki_Components/Form/NikiForm.tsx';


const FormSelectionPage: React.FC = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-600 to-blue-600">
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-8 shadow-xl max-w-md w-full">
        <h1 className="text-3xl font-bold text-center text-white mb-8">Select a Form</h1>
        
        <div className="space-y-4">
          <Link to="/niki-form-page" className="block w-full">
            <Button className="w-full py-6 text-lg bg-white/20 backdrop-blur-sm border border-white/20 hover:bg-white/30 text-white">
              Niki Form Page
            </Button>
          </Link>
          
          
        <div className="w-full py-2 text-lg border border-white/20  text-white">
            <NikiForm />
        </div>
          
          <Link to="/" className="block w-full">
            <Button variant="outline" className="w-full mt-8 border-white/30 text-white hover:bg-white/10">
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FormSelectionPage;