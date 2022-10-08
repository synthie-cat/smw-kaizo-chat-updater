Simple setup to update your currently played Super Mario World Romhack via Firebot and track your progress.

* `!hack` command with syntax: `!hack <Hackname>, <Creator>, <Exits>`
* Comes with four `.txt` files to easily integrate to OBS
* Integrated hotkey to update your exit progress
* Includes an auto backup so you don't lose progress when changing hacks
* Settings include permissions for `Streamer` and `Mod` only

**Setup**:
- Extract text files
- Import  `Kaizo Update via Chat.firebotsetup`
- Add path to the text files while import (e.g. `C:\user\UserName\stream\kaizo_info\` - include trailing `\`)
- Reference text files in `Text (GDI+)` in OBS and style to your liking

**Usage**:
- `!hack <Hackname>, <Creator>, <Exits>` in chat will update the files accordingly. *Values have to be separated by `,`*
- Pressing `F3` will increment the current Exits by 1 - Hotkey is changeable via Firebot UI

*Future plans*:
Working on an automatic scraping of the required data from smw-central to further ease the process. :slight_smile: