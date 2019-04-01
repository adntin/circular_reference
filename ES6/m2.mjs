import { foo } from "./m1.mjs";

console.log("m2.mjs foo:", foo);
setTimeout(() => {
  console.log("m2.mjs setTimeout foo:", foo);
}, 1000);
