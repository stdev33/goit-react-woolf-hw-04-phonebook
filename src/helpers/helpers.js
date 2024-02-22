const isWhitespacesOrEmpty = input => {
  const regexPattern = /[^ \t\r\n\v\f]/;
  return !regexPattern.test(input);
};

export { isWhitespacesOrEmpty };
