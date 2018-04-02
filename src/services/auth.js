
export const isAuthenticated = () => (
  localStorage.getItem('user')
);

export const signOut = (cb) => {
  localStorage.removeItem('user');
  cb();
};

