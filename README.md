# SMW Romhack Overlay Updater for Firebot

Firebot setup to update your currently played Super Mario World Romhack via Firebot and track your progress.

* `!romhack` command for manual update
* `!smwc` command for automatic fetch of Romhack infos
* Comes with five `.txt` files to easily integrate to OBS
* Integrated hotkeys to manage your exit progress via counters
* Includes an auto backup so you don't lose progress when changing hacks
* Settings include permissions for `Streamer` and `Mod` only

## Acknowledgments

* JavaScript Code by [EvilAdmiralKivi](https://twitch.tv/EvilAdmiralKivi)! Leave him a follow! <3

## Usage
- `!romhack <Hackname>, <Creator>, <Exits>, <Type>` to manually update. *Values have to be separated by `,`*
- `!smwc <ROMHack Name>` will fetch all info directly from smwcentral.
-  `F3` will increment the current Exits by 1, `F4` will decrease by 1 - Hotkeys are changeable via Firebot UI

## Setup
- Extract all files.
- Copy Folder `kaizo_info` to a convenient place
- Copy contents of `scripts` to `%APPDATA%\Firebot\v5\profiles\Main Profile\scripts`
- Download and install [NodeJS](https://nodejs.org/en/download/)
- Install `node-html-parser` with `npm install node-html-parser`
- Import  `Kaizo Update via Chat.firebotsetup`
- Add path to the text files while import (e.g. `C:\user\UserName\stream\kaizo_info\` - include trailing `\`)
- Reference text files in `Text (GDI+)` in OBS and style to your liking

## Setup Video Guide