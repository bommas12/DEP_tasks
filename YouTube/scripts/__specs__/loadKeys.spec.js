describe("load Keys:: ", () => {
    it('should load keys when are available', async () => {
        const config = { API_KEY: "key" }
        window.fetch = () => new Promise(resolve => resolve({
            json: () => new Promise(res => res(config))
        }));
        loadKeys().then((key) => {
            expect(key).toBe(config);
        })
    })
    it('should load keys when are available', async () => {
        const spy = spyOn(console, "error");
        window.fetch = () => new Promise((_, reject) => reject("fetch failed"))
        loadKeys().then(() => {
            expect(spy).toHaveBeenCalled();
        })
    })
});
