const User = 'user';
const Token = 'token';
const Language = 'lang';

export const setUser = user => {
  localStorage.setItem(User, JSON.stringify(user));
};

export const getUser = () => {
  const user = localStorage.getItem(User);
  return user ? JSON.parse(user) : null;
};

export const removeUser = () => {
  localStorage.removeItem(User);
};

export const setToken = token => {
  localStorage.setItem(Token, token);
};

export const getToken = () => {
  return localStorage.getItem(Token);
};

export const removeToken = () => {
  localStorage.removeItem(Token);
};

export const getLanguage = () => {
  return localStorage.getItem(Language);
};

export const setLanguage = lang => {
  localStorage.setItem(Language, lang);
};
