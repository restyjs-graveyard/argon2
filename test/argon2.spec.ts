import { hash, verify } from "../src";

describe("argon2", () => {
  it("test argon2 password hash and varify", async () => {
    const password = "foobar";
    const hashResult = await hash(password);
    expect(await verify(hashResult.password, password)).toBe(true);
    expect(await verify(hashResult.password, "happa chappa dappa")).toBe(false);
  });
});
