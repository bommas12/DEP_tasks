describe("testing the function API", () => {
  const result = "result";

  let restore;
  beforeAll(() => {
    restore = window.fetch;
  });
  afterAll(() => {
    window.fetch = restore;
  });
  it("return the success response when passed the correct paramUrl", async () => {
    const response = {
      status: 201,
      json: () => {
        return new Promise((resolve, reject) => {
          resolve(result);
        });
      },
      body: "body",
    };
    window.fetch = (param) => {
      return new Promise((resolve, reject) => {
        return resolve(response);
      });
    };
    const res = await api("paramUrl");
    expect(res).toBe(result);
  });

  it("rejects promise ", async () => {
    const response = {
      status: 301,
      json: () => {
        return new Promise((resolve, reject) => {
          resolve(result);
        });
      },
      body: "body",
    };
    window.fetch = (param) => {
      return new Promise((resolve, reject) => {
        return resolve(response);
      });
    };
    try {
      await api("paramUrl");
    } catch (e) {
      expect(e).toBe(response.body);
    }
  });
});
