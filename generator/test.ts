const promis = () => new Promise((resolve) => resolve("okay"));

const log = () => (x) => {
  console.log(x);
  return x;
};

promis.then(log);
