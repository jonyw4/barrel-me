# 🛢 Barrel Me
Creates a `index.js` / `index.ts` file with exported files from a folder. **Its currently in BETA**

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