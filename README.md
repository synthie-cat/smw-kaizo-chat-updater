# SMW Romhack Overlay Updater for Firebot

Firebot setup to update your currently played Super Mario World Romhack via Firebot and track your progress.

* `!romhackupdate` command for manual update
* `!romhacksearch` command for automatic fetch of Romhack infos
* Comes with five `.txt` files to easily integrate to OBS
* Integrated hotkeys to manage your exit progress via counters
* Includes an auto backup so you don't lose progress when changing hacks
* Settings include permissions for `Streamer` and `Mod` only

## Acknowledgments

* JavaScript Code by [EvilAdmiralKivi](https://twitch.tv/EvilAdmiralKivi)! Leave him a follow! <3

## Usage
- `!romhackupdate <Hackname>, <Creator>, <Exits>, <Type>` to manually update. *Values have to be separated by `,`*
- `!romhacksearch <ROMHack Name>` will fetch all info directly from smwcentral.
-  `F3` will increment the current Exits by 1, `F4` will decrease by 1 - Hotkeys are changeable via Firebot UI

## Setup
- Extract all files.
- Copy Folder `romhack_info` to a convenient place
- Copy contents of `scripts` to `%APPDATA%\Firebot\v5\profiles\Main Profile\scripts`
- Download and install [NodeJS](https://nodejs.org/en/download/)
- Press `WIN+R` on your keyboard then enter `powershell npm install node-html-parser`
- Import  `Super Mario World Romhack Overlay Updater.firebotsetup`
- Add path to the text files while import (e.g. `C:\Stream\romhack_info\` - include trailing `\`)
- Reference text files in `Text (GDI+)` in OBS and style to your liking

## Setup Video Guide
-- Later --
