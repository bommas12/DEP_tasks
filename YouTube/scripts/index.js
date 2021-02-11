let service;
loadKeys()
    .then((config) => {
        service = services(api, urlGenerator(config, 15));
        init(service.searchVideos);
    })
    .catch((error) => console.error(`${error.message} configuration not loaded`));
