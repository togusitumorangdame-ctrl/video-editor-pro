export default function EffectsPanel() {
  return (
    <div className="space-y-4">
      <div className="p-3 bg-gray-800 rounded-lg border border-gray-750 cursor-pointer hover:border-blue-500 transition">
        <h3 className="text-sm font-semibold mb-1">✨ Grayscale Effect</h3>
        <p className="text-xs text-gray-400">Ubah tampilan video menjadi hitam putih.</p>
      </div>
      <div className="p-3 bg-gray-800 rounded-lg border border-gray-750 cursor-pointer hover:border-blue-500 transition">
        <h3 className="text-sm font-semibold mb-1">✨ Blur Filter</h3>
        <p className="text-xs text-gray-400">Berikan efek buram pada video.</p>
      </div>
    </div>
  );
}
