
export const isAuthenticated = () => (
  localStorage.getItem('user')
);

export const signOut = (cb) => {
  localStorage.removeItem('user');
  cb();
};

export const doLogin = (username, password) => {

  const reqOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  };

  return fetch('/users/authenticate', reqOptions)
    .then(response => {
      if (!response.ok) {
        return Promise.reject(response.statusText);
      }

      return Promise.resolve(response.json());
    })
    .then(user => {

      if (user && user.token) {
        localStorage.setItem('user', JSON.stringify(user));
      }

      return user;

    });

};

