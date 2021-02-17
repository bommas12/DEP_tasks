describe("testing the function API", () => {
  const result = "result";

  let restore;
  beforeAll(() => {
    restore = fetch;
  });
  afterAll(() => {
    fetch = restore;
  });

  it("return the success response when passed the correct paramUrl", async () => {
    const response = {
      status: 201,
      json: () => {
        return new Promise((resolve) => {
          resolve(result);
        });
      },
      body: "body",
    };
    fetch = (param) => {
      return new Promise((resolve) => {
        return resolve(response);
      });
    };
    const res = await api("paramUrl");
    console.log(res)
    expect(res).toBe(result);
  });

  it("rejects with a promise when statuscode not in success range", async () => {
    const response = {
      status: 301,
      json: () => {
        return new Promise((resolve) => {
          resolve(result);
        });
      },
      body: "body",
    };
    fetch = (param) => {
      return new Promise((resolve) => {
        return resolve(response);
      });
    };
    api("paramUrl")
      .catch(e => {
        expect(e).toBe(response.body);
      })
  });
});
