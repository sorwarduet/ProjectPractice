const required = value => (value ? undefined : 'Required');
const maxLenght = max => 
    value => value && value.length > max ? `Must be ${max} characters or les` : undefined;

const maxLenght15 = maxLenght(15);
export const minLength = min => 
    value => value && value.length < min ? `Must be ${min} characters or more` : undefined;
export const minLength2 = minLength(2);

const number =value => 
    value && isNaN(Number(value)) ? 'Must be number' : undefined;

const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address' : undefined;

const aol = value =>
  value && /.+@aol\.com/.test(value)
    ? 'Really? You still use AOL for your email?'
    : undefined;
const alphaNumeric = value =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? 'Only alphanumeric characters'
    : undefined;
export const phoneNumber = value =>
  value && !/^(0|[1-9][0-9]{9})$/i.test(value)
    ? 'Invalid phone number, must be 10 digits'
    : undefined;
