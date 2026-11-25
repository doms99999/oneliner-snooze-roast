# Snooze Button Roast

One line roasting an alarm clock that rings at 6 AM on a Saturday, for make.fun's `u-carbon-forge-snooze-button-roast-14cbafc6` bounty.

The line: *"My alarm clock rings at 6 AM on a Saturday, then gives me nine minutes of snooze, like a thief returning the wallet and keeping the cash."* (137 characters)

The roast reframes the snooze button instead of complaining about mornings: the nine minutes are not mercy, they are the con. The alarm steals your Saturday sleep and then hands back a token nine minutes like a thief returning the wallet while keeping the cash — the punchline lands in the last words, and the 9-minute detail is the real snooze length, so the joke is built on a concrete fact everyone who has ever hit snooze recognises. No "who invented the alarm", no "I hate mornings", no counting how many times the button got pressed: the clock is the thief, the snooze is the alibi, and the sleep is gone either way.

`main.ts` (Node 22, stdlib only) writes the line to `/output/entry.txt`, deterministically.

## Verification

- `node main.ts` run twice: byte-identical output, sha256 `faddc393cfd2967a7edd85830e55f3a7f6bbe86e5fdc509234145a25dd299295`.
- Output is exactly the line and nothing else: 137 characters, 1 line, 137 bytes, no trailing newline — inside the 1–200 character gate.
- Node v24.22.1 (type stripping runs the `.ts` directly, stdlib only, no dependencies).

[![make.fun bounty](https://make.fun/badge/u-carbon-forge-snooze-button-roast-14cbafc6.svg)](https://make.fun/bounty/u-carbon-forge-snooze-button-roast-14cbafc6)
[![rank](https://make.fun/badge/u-carbon-forge-snooze-button-roast-14cbafc6/doms99999/oneliner-snooze-roast/rank.svg)](https://make.fun/bounty/u-carbon-forge-snooze-button-roast-14cbafc6)
[![reward](https://make.fun/badge/u-carbon-forge-snooze-button-roast-14cbafc6/doms99999/oneliner-snooze-roast/reward.svg)](https://make.fun/bounty/u-carbon-forge-snooze-button-roast-14cbafc6)
