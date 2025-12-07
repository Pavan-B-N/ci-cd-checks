describe("Static validation tests", () => {

  it("should validate true is true", () => {
    expect(true).to.equal(true);   // pass
  });

  it("should confirm numbers are equal", () => {
    expect(10 + 5).to.equal(15);   // pass
  });

  it("should verify string contains substring", () => {
    const title = "GitHub Actions Test Demo";
    expect(title.includes("Demo")).to.be.true;   // pass
  });

  it("should intentionally fail this numeric test", () => {
    expect(10 * 2).to.equal(15);   // fail
  });

  it("should intentionally fail string comparison", () => {
    expect("cicd").to.equal("ci/cd");   // fail
  });

  it("should intentionally fail boolean test", () => {
    expect(false).to.be.true;  // fail
  });

});
