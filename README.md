# 🛢 Barrel Me
Creates a `index.js` / `index.ts` file with exported files from a folder. **Its currently in BETA**

[![npm (scoped)](https://img.shields.io/npm/v/barrel-me.svg)](https://www.npmjs.com/package/barrel-me)
![Build Status](https://github.com/jonyw4/barrel-me/workflows/Test,%20build%20and%20deploy/badge.svg)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
![GitHub](https://img.shields.io/github/license/jonyw4/barrel-me)

### Do you like?
*Please, consider supporting my work as a lot of effort takes place to create this component! Thanks a lot.*

<a href="https://www.buymeacoffee.com/jonycelio" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-yellow.png" alt="Buy Me A Coffee" style="height: 51px !important;width: 217px !important;" ></a>

## Install
```bash
npm install barrel-me -D
```` 

## Usage

1. Create a script
```json
{
  "scripts": {
    "create-indexes": "barrel-me -d src/components src/pages"
  }
}
```

2. Run script
```bash
npm run create-indexes
```` 