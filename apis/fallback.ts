export const getFallbackTestSlow = (): Promise<string> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("helloworld-slow");
    }, 5000);
  });

export const getFallbackTestFast = (): Promise<string> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("helloworld-fast");
    }, 1000);
  });
