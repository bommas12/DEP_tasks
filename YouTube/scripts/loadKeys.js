const loadKeys = async () => {
  try {
    let response = await fetch("../env.json"); //environment injected
    config = await response.json();
    console.log("credentials retreived");
    return config;
  } catch (e) {
    console.error(`${e.message} :: failed to add environment`);
  }
};

