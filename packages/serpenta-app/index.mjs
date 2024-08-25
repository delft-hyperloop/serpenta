#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';

const projectName = process.argv[2];

if(!projectName) {
    console.log("Usage: npx create-serpenta-app [name]");
    process.exit();
}

const currentDir = process.cwd();
const projectDir = path.resolve(currentDir, projectName);
console.log("syncing project files...");
fs.mkdirSync(projectDir, { recursive: true });

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const templateDir = path.resolve(__dirname, 'template');
console.log("creating dotfiles...");
fs.cpSync(templateDir, projectDir, { recursive: true });

fs.renameSync(
    path.join(projectDir, 'gitignore'),
    path.join(projectDir, '.gitignore')
);

fs.renameSync(
    path.join(projectDir, 'npmrc'),
    path.join(projectDir, '.npmrc')
);

fs.renameSync(
    path.join(projectDir, 'prettierrc.yaml'),
    path.join(projectDir, '.prettierrc.yaml')
);

fs.renameSync(
    path.join(projectDir, 'envrc'),
    path.join(projectDir, '.envrc')
);

console.log("modifying package.json...");
const { default: projectPackageJson } = await import(path.join(projectDir, 'package.json'), { assert: { type: "json" } }) ;

projectPackageJson.name = projectName;

fs.writeFileSync(
    path.join(projectDir, 'package.json'),
    JSON.stringify(projectPackageJson, null, 2)
);

console.log('Success! Your new project is ready.');
console.log("now run: cd projectName && npm i");
console.log(`Created ${projectName} at ${projectDir}`);
