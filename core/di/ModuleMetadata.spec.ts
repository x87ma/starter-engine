import { ModuleMetadata } from "./ModuleMetadata";

describe("ModuleMetadata", () => {
  it("should create module metadata", () => {
    const fixture = new ModuleMetadata();
    fixture.providers = [];
    expect(fixture).toBeDefined();
  });
});
