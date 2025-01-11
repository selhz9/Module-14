import { UserLogin } from "../interfaces/UserLogin";

// TODO

const login = async (userInfo: UserLogin) => {
  try {
    const response = await fetch('/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo),
    });

    // Check if the response is ok (status 200)
    if (!response.ok) {
      throw new Error('Invalid username or password');
    }

    // Parse the response data
    const data = await response.json();
    console.log('Response data:', data); // This will help debug the structure
    return data;  // Return the data
  } catch (err) {
    console.error('Failed to login', err);
    return { ok: false };  // Return an object with ok set to false
  }
};

export { login };
