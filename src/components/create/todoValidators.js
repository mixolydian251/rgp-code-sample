export const titleValidation = (value) => {
  let errorMessage;

  if (!value) {
    errorMessage = "A title is required.";
  } else if (value.length > 20) {
    errorMessage = "The title may not exceed 20 character.";
  }

  return errorMessage;
};

export const descriptionValidation = (value) => {
  let errorMessage;

  if (!value) {
    errorMessage = "A description is required.";
  } else if (value.length > 256) {
    errorMessage = "The description may not exceed 256 character.";
  } else if (!/^[a-z][a-z\s]*$/i.test(value)) {
    errorMessage = "The description may only contain letters.";
  }

  return errorMessage;
};
