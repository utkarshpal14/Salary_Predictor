import axios from 'axios';

// Resolve base URL dynamically from environment variables or fallback safely
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 15000, // 15 seconds
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

// Request interceptor (useful for injecting auth tokens or correlation IDs)
api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for unified response handling and error mapping
api.interceptors.response.use(
  (response) => {
    // Return the response data directly
    return response.data;
  },
  (error) => {
    // Extract descriptive errors from FastAPI payload or network failure
    let errorMessage = 'An unexpected server error occurred. Please try again.';
    
    if (error.response) {
      // Server returned an error response
      const detail = error.response.data?.detail;
      if (Array.isArray(detail)) {
        // Pydantic validation errors list
        errorMessage = detail.map(err => `${err.loc.join('.')}: ${err.msg}`).join(', ');
      } else if (typeof detail === 'string') {
        errorMessage = detail;
      } else if (error.response.data?.message) {
        errorMessage = error.response.data.message;
      } else {
        errorMessage = `Error ${error.response.status}: ${error.response.statusText}`;
      }
    } else if (error.request) {
      // Network connectivity issues
      errorMessage = 'Could not connect to the AI Prediction Server. Please make sure the backend is active.';
    } else {
      // Local request setup failure
      errorMessage = error.message;
    }
    
    console.error('[API Interceptor Error]:', errorMessage, error);
    return Promise.reject(new Error(errorMessage));
  }
);

export const salaryApi = {
  /**
   * Submit job attributes to get the machine learning salary prediction.
   * @param {Object} payload 
   * @returns {Promise<{ predicted_salary: number }>}
   */
  predictSalary: (payload) => {
    return api.post('/predict', payload);
  },

  /**
   * Check connection status of the FastAPI server.
   * @returns {Promise<{ message: string }>}
   */
  checkHealth: () => {
    return api.get('/');
  }
};

export default api;
