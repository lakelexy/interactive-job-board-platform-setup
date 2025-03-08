// src/services/authService.ts

export interface User {
  email: string;
  token: string;
}

const AUTH_KEY = "auth_user";

export const authService = {
  /**
   * Logs in the user and stores authentication details.
   * @param email - User's email
   * @returns {Promise<User>} - Resolves with user data
   */
  login: async (email: string): Promise<User> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const user: User = { email, token: "mock_token_123" };
        localStorage.setItem(AUTH_KEY, JSON.stringify(user));
        resolve(user);
      }, 1000); // Simulating a network request
    });
  },

  /**
   * Logs out the user by removing authentication details.
   */
  logout: (): void => {
    localStorage.removeItem(AUTH_KEY);
  },

  /**
   * Retrieves the currently logged-in user from storage.
   * @returns {User | null} - The user object if authenticated, otherwise null.
   */
  getCurrentUser: (): User | null => {
    const userData = localStorage.getItem(AUTH_KEY);
    return userData ? JSON.parse(userData) : null;
  },

  /**
   * Checks if the user is authenticated.
   * @returns {boolean} - True if authenticated, otherwise false.
   */
  isAuthenticated: (): boolean => {
    return localStorage.getItem(AUTH_KEY) !== null;
  },
};
