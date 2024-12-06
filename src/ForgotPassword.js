// src/ForgotPassword.js
import  { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/forgot-password', { email });
      setMessage('A reset link has been sent to your email.');
      navigate('/success'); // navigate to a success page
    } catch (error) {
      setMessage('Error: Could not send email. Please try again.', error);
    }
}

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <input style={{margin: '0% 30% 0% 30%',padding: '.5% 2% .5% .5%',width: '40%',borderRadius: '5px'}}
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button style={{backgroundColor: 'green', textAlign: 'center' ,fontFamily: 'cursive',fontWeight: 'bold',fontSize: '20px',margin: '2% 35% 5% 35%',padding: '.5% 2% .5% .5%',width: '30%',borderRadius: '5px' ,color: 'black'}} type="submit">Send Reset Link</button>
      </form>
      <div style={{ textAlign: 'center',marginBottom: '5%' }}> {message && <p>{message}</p>}</div>
      
    </div>
  );
};

export default ForgotPassword;