const { Jimp } = require('jimp');
const path = require('path');

const srcPath = 'C:\\Users\\Administrator\\.gemini\\antigravity\\brain\\2ab52129-1245-4202-a7c9-df8a6fcfffad\\floating_iphones_nobg_1779790189371.png';
const destPath = 'c:\\Users\\Administrator\\Desktop\\ip\\public\\floating-iphones.png';

Jimp.read(srcPath)
  .then(image => {
    const width = image.bitmap.width;
    const height = image.bitmap.height;
    
    const visited = new Uint8Array(width * height);
    const queue = [];
    
    // Push seluruh piksel tepi/border (keliling gambar) ke antrean
    for (let x = 0; x < width; x++) {
      // Baris paling atas
      queue.push([x, 0]);
      visited[0 * width + x] = 1;
      // Baris paling bawah
      queue.push([x, height - 1]);
      visited[(height - 1) * width + x] = 1;
    }
    for (let y = 1; y < height - 1; y++) {
      // Kolom paling kiri
      queue.push([0, y]);
      visited[y * width + 0] = 1;
      // Kolom paling kanan
      queue.push([width - 1, y]);
      visited[y * width + (width - 1)] = 1;
    }
    
    let transparentCount = 0;
    
    while (queue.length > 0) {
      const [cx, cy] = queue.shift();
      
      const color = image.getPixelColor(cx, cy);
      
      // Ekstrak RGBA secara manual menggunakan bit-shifting (Aman di semua versi Jimp!)
      // Format internal Jimp color biasanya RGBA 32-bit int
      const r = (color >> 24) & 0xff;
      const g = (color >> 16) & 0xff;
      const b = (color >> 8) & 0xff;
      
      // Jika piksel sangat gelap (latar belakang hitam murni), jadikan transparan murni
      if (r < 45 && g < 45 && b < 45) {
        // Set ke 0x00000000 (Pure Black Transparent)
        image.setPixelColor(0, cx, cy);
        transparentCount++;
        
        // Periksa 4 tetangga sekitar (Atas, Bawah, Kiri, Kanan)
        const neighbors = [
          [cx + 1, cy],
          [cx - 1, cy],
          [cx, cy + 1],
          [cx, cy - 1]
        ];
        
        for (const [nx, ny] of neighbors) {
          if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
            const idx = ny * width + nx;
            if (visited[idx] === 0) {
              visited[idx] = 1;
              queue.push([nx, ny]);
            }
          }
        }
      }
    }
    
    console.log(`Berhasil mengubah ${transparentCount} piksel hitam menjadi transparan murni!`);
    
    // Simpan gambar sebagai True Transparent PNG (di Jimp v1.0 menggunakan write)
    return image.write(destPath);
  })
  .then(() => {
    console.log('Gambar True Transparent PNG berhasil disimpan ke public/floating-iphones.png!');
  })
  .catch(err => {
    console.error('Terjadi kesalahan:', err);
  });
