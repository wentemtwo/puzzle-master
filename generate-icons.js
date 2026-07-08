const fs = require('fs');
const path = require('path');

// 创建简单的PNG图标（纯色+文字方案，无需canvas依赖）
function createPNG(size) {
    // PNG文件结构：签名 + IHDR + IDAT + IEND
    const width = size;
    const height = size;
    
    // 使用渐变色背景的简化版本 - 纯色背景
    const r = 108, g = 92, b = 231; // #6c5ce7 紫色主题
    
    // 创建原始图像数据（每行需要filter byte + RGB * width）
    const rawData = Buffer.alloc(height * (1 + width * 4));
    for (let y = 0; y < height; y++) {
        const rowOffset = y * (1 + width * 4);
        rawData[rowOffset] = 0; // Filter: None
        
        // 渐变效果：从上到下颜色变化
        const t = y / height;
        const pr = Math.round(r * (1 - t * 0.3));
        const pg = Math.round(g * (1 - t * 0.2));
        const pb = Math.round(b + (255 - b) * t * 0.2);
        
        for (let x = 0; x < width; x++) {
            const px = rowOffset + 1 + x * 4;
            // 圆角效果：边缘像素透明
            const cx = (x - width/2) / (width/2);
            const cy = (y - height/2) / (height/2);
            const d = cx*cx + cy*cy;
            const radius = 0.9;
            
            if (d > radius * radius) {
                rawData[px] = 0;
                rawData[px+1] = 0;
                rawData[px+2] = 0;
                rawData[px+3] = 0;
            } else {
                rawData[px] = pr;
                rawData[px+1] = pg;
                rawData[px+2] = pb;
                rawData[px+3] = 255;
            }
        }
    }
    
    // 压缩数据
    const zlib = require('zlib');
    const compressed = zlib.deflateSync(rawData);
    
    // 构建PNG
    const chunks = [];
    
    // PNG签名
    chunks.push(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]));
    
    // IHDR chunk
    const ihdr = Buffer.alloc(13);
    ihdr.writeUInt32BE(width, 0);
    ihdr.writeUInt32BE(height, 4);
    ihdr[8] = 8;  // bit depth
    ihdr[9] = 6;  // color type: RGBA
    ihdr[10] = 0; // compression
    ihdr[11] = 0; // filter
    ihdr[12] = 0; // interlace
    chunks.push(makeChunk('IHDR', ihdr));
    
    // IDAT chunk
    chunks.push(makeChunk('IDAT', compressed));
    
    // IEND chunk
    chunks.push(makeChunk('IEND', Buffer.alloc(0)));
    
    return Buffer.concat(chunks);
}

function makeChunk(type, data) {
    const length = Buffer.alloc(4);
    length.writeUInt32BE(data.length, 0);
    const typeBuffer = Buffer.from(type, 'ascii');
    const crcData = Buffer.concat([typeBuffer, data]);
    const crc = Buffer.alloc(4);
    crc.writeUInt32BE(crc32(crcData), 0);
    return Buffer.concat([length, typeBuffer, data, crc]);
}

function crc32(buf) {
    let crc = 0xFFFFFFFF;
    for (let i = 0; i < buf.length; i++) {
        crc ^= buf[i];
        for (let j = 0; j < 8; j++) {
            crc = (crc >>> 1) ^ (crc & 1 ? 0xEDB88320 : 0);
        }
    }
    return (crc ^ 0xFFFFFFFF) >>> 0;
}

// 生成图标
const iconsDir = path.join(__dirname, 'www', 'icons');
if (!fs.existsSync(iconsDir)) {
    fs.mkdirSync(iconsDir, { recursive: true });
}

[192, 512].forEach(size => {
    const png = createPNG(size);
    const filepath = path.join(iconsDir, `icon-${size}.png`);
    fs.writeFileSync(filepath, png);
    console.log(`Generated ${filepath} (${png.length} bytes)`);
});

// 同时复制到根icons目录
const rootIconsDir = path.join(__dirname, 'icons');
if (!fs.existsSync(rootIconsDir)) {
    fs.mkdirSync(rootIconsDir, { recursive: true });
}
[192, 512].forEach(size => {
    const src = path.join(iconsDir, `icon-${size}.png`);
    const dst = path.join(rootIconsDir, `icon-${size}.png`);
    fs.copyFileSync(src, dst);
    console.log(`Copied to ${dst}`);
});

console.log('Icons generated successfully!');