export default function MediaLibrary() {
  return (
    <div className="space-y-4">
      <button className="w-full py-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-sm font-medium transition">
        ➕ Upload Media
      </button>
      <div className="grid grid-cols-2 gap-2">
        <div className="bg-gray-800 h-24 rounded border border-gray-700 flex items-center justify-center text-xs text-gray-400">
          Video 1.mp4
        </div>
        <div className="bg-gray-800 h-24 rounded border border-gray-700 flex items-center justify-center text-xs text-gray-400">
          Video 2.mp4
        </div>
      </div>
    </div>
  );
}
