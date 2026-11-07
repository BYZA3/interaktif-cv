import { useState, useEffect } from 'react';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
    const savedMessage = localStorage.getItem('draft_message');
    if (savedMessage) setMessage(savedMessage);
  }, []);

  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    setDarkMode(!darkMode);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    localStorage.setItem('draft_message', e.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300 font-sans p-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-end mb-8">
          <button onClick={toggleTheme} className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
            {darkMode ? '☀️ Aydınlık Mod' : '🌙 Karanlık Mod'}
          </button>
        </div>
        <header className="mb-12 border-b border-gray-300 dark:border-gray-700 pb-8">
          <h1 className="text-5xl font-extrabold text-blue-600 dark:text-blue-400 mb-2">Beyza Harman</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">Yeni Medya ve İletişim Öğrencisi | İçerik Geliştirme & Yapay Zeka Stajyeri</p>
        </header>
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Deneyim & Projeler</h2>
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-blue-500">TNC Group</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Yapay Zeka Stajyeri (2026)</p>
              <p>Python, Makine Öğrenmesi ve Web Geliştirme süreçlerinde yapay zeka entegrasyonları üzerinde çalışıldı.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-blue-500">TetraLearn</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Eğitim ve İçerik Geliştirme Stajyeri</p>
              <p>Google Flow, Imagen 3 ve Veo araçlarıyla e-öğrenme modülleri ve görsel materyal tasarımları yapıldı.</p>
            </div>
          </div>
        </section>
        <section>
          <h2 className="text-3xl font-bold mb-6">İletişim (LocalStorage Demo)</h2>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <textarea className="w-full p-4 border rounded-lg dark:bg-gray-700 dark:border-gray-600 mb-2" rows="4" placeholder="Bana bir mesaj taslağı yazın..." value={message} onChange={handleMessageChange}></textarea>
            <p className="text-sm text-gray-500 dark:text-gray-400">* Bu forma yazdığınız metin tarayıcınızın LocalStorage belleğine kaydedilir.</p>
          </div>
        </section>
      </div>
    </div>
  );
}
