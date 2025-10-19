// api/visitor.js
import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'data.json');

export default async function handler(req, res) {
  // jika file belum ada, buat dengan nilai awal 0
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify({ count: 0 }));
  }

  // baca data dari file
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

  if (req.method === 'GET') {
    // kalau GET, tambahkan 1 dan kirimkan hasilnya
    data.count += 1;
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

    res.status(200).json({ count: data.count });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
