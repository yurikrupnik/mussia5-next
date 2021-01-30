const emailReg = /^([\w-/.]+@([\w-]+\.)+[\w-]{2,4})?$/;

const validateEmail = (email: string) => emailReg.test(email);

export { emailReg, validateEmail };
