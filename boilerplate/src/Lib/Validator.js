import _ from 'lodash';

export function validate(text, rulesMessages) {
  const returnValue = {
    isValid: true,
    message: '',
  };

  _.forEach(rulesMessages, (ruleMessage) => {
    if (!ruleMessage.rule(text)) {
      returnValue.isValid = false;
      returnValue.message = ruleMessage.errorMessage;
    }
  });

  return returnValue;
}
