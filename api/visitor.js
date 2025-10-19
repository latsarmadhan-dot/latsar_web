// api/visitor.js
export default async function handler(req, res) {
  const apiUrl = process.env.KV_REST_API_URL;
  const apiToken = process.env.KV_REST_API_TOKEN;

  if (!apiUrl || !apiToken) {
    return res.status(500).json({ error: 'Missing Vercel KV environment variables' });
  }

  try {
    // Ambil nilai sekarang
    const currentRes = await fetch(`${apiUrl}/get/visitor_count`, {
      headers: { Authorization: `Bearer ${apiToken}` }
    });
    const currentData = await currentRes.json();
    const currentCount = parseInt(currentData.result || '0', 10);

    // Tambah 1
    const newCount = currentCount + 1;

    // Simpan kembali ke KV
    await fetch(`${apiUrl}/set/visitor_count/${newCount}`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiToken}` }
    });

    return res.status(200).json({ count: newCount });
  } catch (error) {
    console.error('Error updating visitor count:', error);
    return res.status(500).json({ error: 'Failed to update visitor count' });
  }
}
