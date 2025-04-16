import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertTitle, AlertDescription} from '@/components/ui/alert';
import './FormPage.css'; 

const NikiFormPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, message });
    setSubmitted(true);
    
    setEmail('');
    setMessage('');
    
    setTimeout(() => {
        setSubmitted(false);
      }, 5000);
  };
  
  return (
    
    <div className="glass-container">
      <div className="glass-background">
        <div className="glass-sphere glass-sphere-1"></div>
        <div className="glass-sphere glass-sphere-2"></div>
        <div className="glass-sphere glass-sphere-3"></div>
        <div className="glass-card glass-card-1"></div>
        <div className="glass-card glass-card-2"></div>
      </div>
      
      <div className="glass-form-wrapper">
        <div className="glass-form-card">
          <div className="glass-form-header">
            <h1>Form</h1>
          </div>
    
    
          <form onSubmit={handleSubmit} className="glass-form-body">
            <div className="glass-form-field">
              <Label htmlFor="email" className="glass-label">Email address</Label>
              <div className="glass-input-wrapper">
                <Input
                  type="email"
                  id="email"
                  placeholder="name@example.com"
                  className="glass-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            
            <div className="glass-form-field">
              <Label htmlFor="message" className="glass-label">Message</Label>
              <div className="glass-input-wrapper">
                <Input
                  type="message"
                  id="mesage"
                  placeholder="Enter your message"
                  className="glass-input"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
            </div>
            
            <Button type="submit" className="glass-button">
              Send
            </Button>
            
            <div className="glass-form-footer">
              <p>&copy; 2025</p>
            </div>
          </form>
        </div>
        
        <div className="glass-back-button-wrapper">
          <Link to="/forms">
            <Button variant="outline" className="glass-back-button">
              Back to Form Selection
            </Button>
          </Link>
        </div>
      </div>
      {submitted && (
  <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-full max-w-sm">
    <Alert className="bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold">
      <AlertTitle>Notification</AlertTitle>
      <AlertDescription>The Form was sent</AlertDescription>
    </Alert>
  </div>
)}
{/* change '/' to home page later */}
  <Link to="/" className="fixed top-4 left-1/2 transform -translate-x-1/2 w-full max-w-sm">
      <Button variant="outline" className="glass-back-button">
        Home
      </Button>
  </Link>
        </div>
  );
};

export default NikiFormPage;