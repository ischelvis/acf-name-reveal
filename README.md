# ACF Name Reveal - Chrome Extension

A Chrome extension that displays the names of ACF fields, including their parent fields (such as repeaters and groups), directly in the WordPress admin UI.

## Project Overview

ACF Name Reveal is a small Chrome extension that makes ACF field names visible on the field itself. This allows you to quickly reference field names without navigating through the ACF admin UI or inspecting JSON configurations.

Built with TypeScript and bundled using Parcel, the extension utilizes the [Advanced Custom Fields JavaScript API](https://www.advancedcustomfields.com/resources/javascript-api/) to hook into ACF and display field names as fields are loaded. 

Parent fields are determined by walking up the DOM tree. Their names are prefixed to child fields and separated by underscores, so they can be copied and used directly in functions like `get_field()`.

## Compatibility

Tested in:
- ACF Options Pages
- Gutenberg content editor
- Gutenberg block settings panel

Compatible with ACF versions **5.7 through 6.7**

## Quick Install

1. Download and unzip the `dist.zip` file from the [latest release](https://github.com/ischelvis/acf-name-reveal/releases)
2. Go to the Extensions page by entering `chrome://extensions` in the address bar (or use your Chromium browser's equivalent)
3. Enable Developer Mode by clicking the toggle switch next to **Developer mode**
4. Click the **Load unpacked** button and select the extracted `dist` folder

## Building Locally

1. Install [Node.js](https://nodejs.org/) (version 18 or higher)
2. Run `npm i` to install the dependencies
3. Build the project to the `./dist/` folder with `npm run build`