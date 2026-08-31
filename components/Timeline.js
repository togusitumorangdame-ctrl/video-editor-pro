'use client';

export default function Timeline() {
  // 🎬 Fungsi untuk menangani proses export video
  const handleExport = () => {
    // Simulasi data hasil export video (bisa berupa konfigurasi JSON proyek atau blob video)
    const projectData = {
      title: "Video Editor Pro Export",
      tracks: [
        { id: 1, type: "video", duration: "00:10" },
        { id: 2, type: "audio", duration: "00:10" }
      ],
      exportDate: new Date().toISOString()
    };

    // Membuat file virtual untuk diunduh oleh browser
    const blob = new Blob([JSON.stringify(projectData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'project-export.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    alert('Proses export berhasil! File proyek telah diunduh.');
  };

  return (
    <div className="h-64 bg-gray-800 border-t border-gray-700 p-4 flex flex-col">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium">⏱️ Timeline Workspace</span>
        <div className="space-x-2">
          <button className="px-3 py-1 bg-gray-700 rounded hover:bg-gray-600 text-sm">▶️ Play</button>
          <button className="px-3 py-1 bg-gray-700 rounded hover:bg-gray-600 text-sm">✂️ Split</button>
          <button 
            onClick={handleExport}
            className="px-3 py-1 bg-blue-600 rounded hover:bg-blue-500 text-sm"
          >
            📥 Export
          </button>
        </div>
      </div>
      <div className="flex-1 bg-gray-900 rounded-lg p-2 border border-gray-700 overflow-x-auto relative">
        <div className="absolute top-2 bottom-2 left-1/3 w-0.5 bg-red-500 z-10"></div>
        <div className="h-12 bg-blue-900/40 border border-blue-500/50 rounded mb-2 p-1 text-xs flex items-center justify-between">
          <span>🎬 Video Track 1</span>
          <span className="text-gray-400">00:00 - 00:10</span>
        </div>
        <div className="h-12 bg-green-900/40 border border-green-500/50 rounded p-1 text-xs flex items-center justify-between">
          <span>🎵 Audio Track 1</span>
          <span className="text-gray-400">00:00 - 00:10</span>
        </div>
      </div>
    </div>
  );
}
