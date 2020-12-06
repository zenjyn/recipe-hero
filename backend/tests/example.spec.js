const app = require("../dist/app")

describe("#smoke", () => {
  it("exists", () => {
    expect(app).toBeTruthy()
  })
})
