export const validatePassword = (rule, value) => {
  const notSpace = /^\S*$/;
  const eightChar = /.{8,}/;
  if (value === '') {
    return Promise.reject('Please enter your password');
  } else if (!eightChar.test(value)) {
    return Promise.reject('Must contain 8 or more characters');
  } else if (!notSpace.test(value)) {
    return Promise.reject('Must not have any blank spaces');
  } else if (!/.*\d/.test(value)) {
    return Promise.reject('Min 8 chars 1 Uppercase, 1 Lowercase, 1 Digit, 1 Special char');
  } else if (!/.*[a-z]/.test(value)) {
    return Promise.reject('Must contain a lower case character');
  } else if (!/.*[A-Z]/.test(value)) {
    return Promise.reject('Must contain an upper case character');
  } else if (/^[a-zA-Z0-9 ]*$/.test(value)) {
    return Promise.reject('Must contain a symbol');
  } else {
    return Promise.resolve();
  }
};
