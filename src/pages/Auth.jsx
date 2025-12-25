import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './LoginSignup.css';

export default function Auth() {
  const [activeTab, setActiveTab] = useState('login');
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [signupData, setSignupData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  const { login, register, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/home', { replace: true });
    }
  }, [isAuthenticated, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });

    const result = await login(loginData.email, loginData.password);

    if (result.success) {
      setMessage({ type: 'success', text: result.message });
      setLoginData({ email: '', password: '' });
      setTimeout(() => {
        navigate('/home');
      }, 1000);
    } else {
      setMessage({ type: 'error', text: result.message });
    }
    setLoading(false);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });

    const result = await register(signupData.email, signupData.password);

    if (result.success) {
      setMessage({ type: 'success', text: result.message });
      setSignupData({ email: '', password: '' });
      setActiveTab('login');
    } else {
      setMessage({ type: 'error', text: result.message });
    }
    setLoading(false);
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <div className="auth-tabs-container">
          <button
            className={`auth-tab-btn ${activeTab === 'login' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('login');
              setMessage({ type: '', text: '' });
            }}
          >
            Login
          </button>
          <button
            className={`auth-tab-btn ${activeTab === 'signup' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('signup');
              setMessage({ type: '', text: '' });
            }}
          >
            Sign Up
          </button>
        </div>

        {activeTab === 'login' ? (
          <>
            <div className="auth-header">
              <i className="fas fa-user auth-icon"></i>
              <h2>User Login</h2>
            </div>

            <form className="auth-form" onSubmit={handleLogin}>
              <div className="auth-input">
                <i className="fas fa-envelope"></i>
                <input
                  type="email"
                  placeholder="Email ID"
                  value={loginData.email}
                  onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                  required
                />
              </div>

              <div className="auth-input">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  placeholder="Password"
                  value={loginData.password}
                  onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                  required
                />
              </div>

              <button type="submit" className="auth-button" disabled={loading}>
                {loading ? 'Logging in...' : 'LOGIN'}
              </button>

              <p className="switch-text">
                Don't have an account?{' '}
                <span
                  className="switch-link"
                  onClick={() => {
                    setActiveTab('signup');
                    setMessage({ type: '', text: '' });
                  }}
                  style={{ cursor: 'pointer' }}
                >
                  Sign Up
                </span>
              </p>
            </form>
          </>
        ) : (
          <>
            <div className="auth-header">
              <i className="fas fa-user-plus auth-icon"></i>
              <h2>Create Account</h2>
            </div>

            <form className="auth-form" onSubmit={handleSignup}>
              <div className="auth-input">
                <i className="fas fa-envelope"></i>
                <input
                  type="email"
                  placeholder="Email ID"
                  value={signupData.email}
                  onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                  required
                />
              </div>

              <div className="auth-input">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  placeholder="Password"
                  value={signupData.password}
                  onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                  required
                />
              </div>

              <button type="submit" className="auth-button" disabled={loading}>
                {loading ? 'Creating Account...' : 'SIGN UP'}
              </button>

              <p className="switch-text">
                Already have an account?{' '}
                <span
                  className="switch-link"
                  onClick={() => {
                    setActiveTab('login');
                    setMessage({ type: '', text: '' });
                  }}
                  style={{ cursor: 'pointer' }}
                >
                  Login
                </span>
              </p>
            </form>
          </>
        )}

        {message.text && (
          <div className={`auth-message ${message.type}`}>
            {message.text}
          </div>
        )}
      </div>
    </div>
  );
}

