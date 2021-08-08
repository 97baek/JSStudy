const delay = (ms: number): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.floor(Math.random() * 10) % 2 === 0) {
        resolve('Success');
      } else {
        reject('Failure');
      }
    }, ms);
  });
};

delay(3000)
  .then((result: string) => {
    console.log('done Promise!' + result);
  })
  .catch((error: string) => {
    console.error('fail promise!' + error);
  });

const main = async () => {
  try {
    const result = await delay(3000);
    console.error('done async!' + result);
  } catch (e) {
    console.error('fail async!' + e);
  }
};

main();
