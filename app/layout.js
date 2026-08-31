import './globals.css';

export const metadata = {
  title: 'Video Editor Pro',
  description: 'Aplikasi edit video profesional dengan fitur lengkap seperti CapCut',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="bg-gray-900 text-white">{children}</body>
    </html>
  );
}
