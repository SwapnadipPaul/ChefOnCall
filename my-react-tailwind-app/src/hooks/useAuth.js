import { useState } from 'react';

const useAuth = () => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    // Implement login logic here (e.g., API call)
    // On success, set the user state
    setUser({ email }); // Example user object
  };

  const logout = () => {
    // Implement logout logic here
    setUser(null);
  };

  return { user, login, logout };
};

export default useAuth;