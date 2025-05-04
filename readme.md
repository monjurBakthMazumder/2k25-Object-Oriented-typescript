

# 2K25: Object Oriented typescript

This guide provides an overview of the key concepts in TypeScript, along with practical examples and detailed explanations. Whether you are a beginner or someone looking to refresh your knowledge, this guide covers the essentials of TypeScript, including data types, functions, destructuring, operators, and advanced types.


---

## 🛠 TypeScript Project Setup

### 1. Initialize TypeScript
```bash
tsc --init
```

### 2. Update `tsconfig.json`
```json
{
  "compilerOptions": {
    "rootDir": "./src/",
    "outDir": "./dist/",
    "target": "es2016",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true
  }
}
```

### 3. Install ts-node-dev
```bash
npm install -g ts-node-dev
```

### 4. Run the project
```bash
ts-node-dev --respawn --transpile-only src/index.ts
```

---



## Folder Structure

```
2k25-Explore-basic-types-of-typescript/
├── src/             # All TypeScript source files
│   ├── index.ts     # Entry point
│   └── examples/    # Example scripts (types, functions, etc.)
├── dist/            # Compiled JavaScript output
├── tsconfig.json    # TypeScript compiler configuration
└── README.md        # This documentation file
```

---

## Author

**Md Monjur Bakth Mazumder**  
Software Engineer & Lead Frontend Developer  
[Qrinux](https://www.qrinux.com/)  
[Email me](mailto:md.monjurmbm2001@gmail.com)  
[Portfolio](https://mdmonjurbakthmazumder.netlify.app)  
Passionate about building clean, maintainable, and scalable applications.  