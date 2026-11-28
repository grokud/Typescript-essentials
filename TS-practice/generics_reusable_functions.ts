async function retry<TInput>(
  fn: () => Promise<TInput>,
  retries: number = 5
): Promise<TInput> {
  try {
    return await fn();
  } catch (err) {
    if (retries > 0) {
      console.log("Retrying...");
      return await retry(fn, retries - 1);
    }
    throw err;
  }
}

const getString = () => Promise.resolve("hello");
const getNumber = () => Promise.resolve(42);

retry(getString).then((str) => {
  // str should be string, not any!
  console.log(str);
});

retry(getNumber).then((num) => {
  // num should be number, not any!
  console.log(num);
});
