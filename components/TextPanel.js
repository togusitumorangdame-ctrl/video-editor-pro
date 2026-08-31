export default function TextPanel() {
  return (
    <div className="space-y-4">
      <div className="p-3 bg-gray-800 rounded-lg border border-gray-750 cursor-pointer hover:border-blue-500 transition">
        <h3 className="text-sm font-semibold mb-1">➕ Add Heading</h3>
        <p className="text-xs text-gray-400">Gunakan untuk judul utama video.</p>
      </div>
      <div className="p-3 bg-gray-800 rounded-lg border border-gray-750 cursor-pointer hover:border-blue-500 transition">
        <h3 className="text-sm font-semibold mb-1">➕ Add Subtitle</h3>
        <p className="text-xs text-gray-400">Gunakan untuk teks pendukung atau keterangan.</p>
      </div>
    </div>
  );
}
