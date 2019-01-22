import logger from "./library"
import { createSandbox } from "sinon"
import { expect } from "chai"

const sandbox = createSandbox()
const myArray = [1, 2, 3, 4, 5]

describe("myCoolLogger", () => {
  beforeEach(() => {
    sandbox.spy(console, "log")
    sandbox.spy(JSON, "stringify")
    logger(myArray)
  })

  afterEach(() => {
    sandbox.restore()
  })

  it("should call console.log", () => {
    expect(console.log.callCount).to.equal(2)
  })

  it("should call JSON.stringify", () => {
    expect(JSON.stringify.callCount).to.equal(1)
  })

  it("should call JSON.stringify with array, null and default spacing", () => {
    const { args } = JSON.stringify.getCall(0)
    expect(args[0]).to.equal(myArray)
    expect(args[1]).to.equal(null)
    expect(args[2]).to.equal(4)
  })
})
