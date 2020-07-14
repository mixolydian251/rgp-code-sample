export const fakeAPICall = (response) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(response), 300);
  });
