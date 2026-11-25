import * as fs from "node:fs";

const LINE =
  "My alarm clock rings at 6 AM on a Saturday, then gives me nine minutes of snooze, like a thief returning the wallet and keeping the cash.";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", LINE);
