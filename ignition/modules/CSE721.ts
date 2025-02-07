import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const CSE721Module = buildModule("CSE721Module", (m) => {

  const cse721 = m.contract("CSE721", ["0xa064b2E2B6f9CEaC2c60a81369aeC35C0FBe467F"]);

  return { cse721 };
});

export default CSE721Module; 