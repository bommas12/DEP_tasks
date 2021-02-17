describe("load Keys:: ", () => {

    let restore, logSpy, errSpy;
    beforeAll(() => {
        restore = fetch;
        logSpy = spyOn(console, "log");
        errSpy = spyOn(console, "error")
    });
    afterAll(() => {
        fetch = restore;
    });
    it('should load keys when are available', async () => {
        const config = { API_KEY: "key" }
        fetch = () => new Promise(resolve => resolve({
            json: () => new Promise(res => res(config))
        }));
        loadKeys().then((key) => {
            expect(key).toBe(config);
            expect(logSpy).toHaveBeenCalledWith("credentials retreived")
        })
    })
    it('should load keys when are available', async () => {
        fetch = () => new Promise((_, reject) => reject(new Error("fetch failed")))
        loadKeys().then(() => {
            expect(errSpy).toHaveBeenCalledWith('fetch failed :: failed to add environment');
        })
    })
});
