export default function Timeline() {
  return (
    <div className="h-64 bg-gray-800 border-t border-gray-700 p-4 flex flex-col">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium">⏱️ Timeline Workspace</span>
        <div className="space-x-2">
          <button className="px-3 py-1 bg-gray-700 rounded hover:bg-gray-600 text-sm">▶️ Play</button>
          <button className="px-3 py-1 bg-blue-600 rounded hover:bg-blue-500 text-sm">💾 Export</button>
        </div>
      </div>
      <div className="flex-1 bg-gray-900 rounded-lg p-2 border border-gray-700 overflow-x-auto relative">
        <div className="absolute top-2 bottom-2 left-1/3 w-0.5 bg-red-500 z-10"></div>
        <div className="h-12 bg-blue-900/40 border border-blue-500/50 rounded mb-2 p-1 text-xs flex items-center">
          🎬 Video Track 1
        </div>
        <div className="h-12 bg-green-900/40 border border-green-500/50 rounded p-1 text-xs flex items-center">
          🎵 Audio Track 1
        </div>
      </div>
    </div>
  );
}
