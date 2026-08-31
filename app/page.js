'use client';
import { useState } from 'react';

export default function VideoEditor() {
  const [activeTab, setActiveTab] = useState('media');

  return (
    <div className="flex h-screen bg-gray-900 text-white font-sans">
      {/* Sidebar Toolbar */}
      <aside className="w-16 bg-gray-800 flex flex-col items-center py-4 space-y-6 border-r border-gray-700">
        <button 
          onClick={() => setActiveTab('media')} 
          className={`p-3 rounded-lg ${activeTab === 'media' ? 'bg-blue-600' : 'hover:bg-gray-700'}`}
          title="Media Library"
        >
          📁
        </button>
        <button 
          onClick={() => setActiveTab('text')} 
          className={`p-3 rounded-lg ${activeTab === 'text' ? 'bg-blue-600' : 'hover:bg-gray-700'}`}
          title="Text & Titles"
        >
          ✍️
        </button>
        <button 
          onClick={() => setActiveTab('effects')} 
          className={`p-3 rounded-lg ${activeTab === 'effects' ? 'bg-blue-600' : 'hover:bg-gray-700'}`}
          title="Effects"
        >
          ✨
        </button>
      </aside>

      {/* Main Workspace */}
      <div className="flex-1 flex flex-col">
        {/* Top Section: Preview & Panel */}
        <div className="flex-1 flex">
          {/* Dynamic Panel */}
          <section className="w-80 bg-gray-850 p-4 border-r border-gray-700 overflow-y-auto">
            <h2 className="text-lg font-semibold mb-4 capitalize">{activeTab} Library</h2>
            <div className="border-2 border-dashed border-gray-600 rounded-lg p-6 text-center text-gray-400 cursor-pointer hover:border-blue-500">
              Drag & drop files here or click to upload
            </div>
          </section>

          {/* Video Preview Canvas */}
          <main className="flex-1 bg-black flex items-center justify-center relative">
            <div className="w-3/4 h-3/4 bg-gray-950 rounded-lg flex items-center justify-center border border-gray-800 text-gray-500">
              Video Preview Screen 🖥️
            </div>
          </main>
        </div>

        {/* Bottom Section: Timeline Multi-track */}
        <footer className="h-64 bg-gray-800 border-t border-gray-700 p-4 flex flex-col">
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
        </footer>
      </div>
    </div>
  );
 }
