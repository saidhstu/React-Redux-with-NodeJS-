
import validator from 'validator';
import isEmpty from 'lodash/isEmpty';
import isNull from 'lodash/isNull';
export default function validateInput(data) {
  let errors = {};

  if (validator.isNull(data.username)) {
    errors.username = 'This field is required';
  }
  if (validator.isNull(data.email)) {
    errors.email = 'This field is required';
  }
  if (!validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }
  if (validator.isNull(data.password)) {
    errors.password = 'This field is required';
  }
  if (validator.isNull(data.passwordConfirmation)) {
    errors.passwordConfirmation = 'This field is required';
  }
  if (!validator.equals(data.password, data.passwordConfirmation)) {
    errors.passwordConfirmation = 'Passwords must match';
  }
  if (validator.isNull(data.timezone)) {
    errors.timezone = 'This field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}