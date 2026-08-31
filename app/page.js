'use client';
import { useState } from 'react';
import Timeline from '../components/Timeline';

export default function VideoEditor() {
  const [activeTab, setActiveTab] = useState('media');

  return (
    <div className="flex h-screen bg-gray-900 text-white font-sans">
      {/* Sidebar Toolbar */}
      <aside className="w-16 bg-gray-800 flex flex-col items-center py-4 space-y-4">
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
            <h2 className="text-lg font-semibold mb-4 capitalize">{activeTab}</h2>
            <div className="border-2 border-dashed border-gray-600 rounded-lg p-6 text-center text-gray-400">
              Drag & drop files here or click to upload
            </div>
          </section>

          {/* Video Preview Canvas */}
          <main className="flex-1 bg-black flex items-center justify-center relative">
            <div className="w-3/4 h-3/4 bg-gray-950 rounded-lg flex items-center justify-center border border-gray-800">
              Video Preview Screen 🖥️
            </div>
          </main>
        </div>

        {/* Timeline Component */}
        <Timeline />
      </div>
    </div>
  );
}
