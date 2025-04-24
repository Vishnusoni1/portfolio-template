const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Create dist directory if it doesn't exist
if (!fs.existsSync('dist')) {
    fs.mkdirSync('dist');
}

// Copy public files to dist
const publicDir = path.join(__dirname, 'public');
const distDir = path.join(__dirname, 'dist');

// Copy all files from public to dist
fs.readdirSync(publicDir).forEach(file => {
    fs.copyFileSync(
        path.join(publicDir, file),
        path.join(distDir, file)
    );
});

console.log('Files copied to dist directory successfully!'); 