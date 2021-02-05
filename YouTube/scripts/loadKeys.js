const loadKeys = async () => {
  try {
    let response = await fetch("../env.json"); //environment injected
    config = await response.json();
    console.log("credentials retreived");
    return config;
  } catch (e) {
    console.error(`${e.message} :: Added the env.json to your client`);
  }
};
let service;
loadKeys()
  .then((config) => {
    service = services(api, urlGenerator(config, 15));
  })
  .catch((error) => console.error(`${error.message} configuration not loaded`));
