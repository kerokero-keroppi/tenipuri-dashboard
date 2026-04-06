import Dashboard from "@/components/Dashboard";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-dashboard-bg text-gray-900 font-sans">
      {/* デジタル庁ガイドライン: ブランドカラー(濃)をヘッダーに */}
      <header className="bg-brand-500 text-white px-6 py-4 shadow-sm shrink-0">
        <div className="max-w-7xl mx-auto flex items-center">
          <h1 className="text-lg md:text-xl font-bold tracking-tight">テニプリ年齢比較ダッシュボード</h1>
        </div>
      </header>
      
      <main className="flex-grow w-full max-w-[1920px] mx-auto p-4 sm:p-6 lg:p-8 flex flex-col">
         {/* レイアウト: 大画面時は16:9を意識したアスペクト比枠内へ */}
         <div className="w-full h-full lg:aspect-[16/9] flex flex-col flex-grow">
           <Dashboard />
         </div>
      </main>
      
      <footer className="bg-white border-t border-gray-200 mt-auto shrink-0">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-center">
          <p className="text-xs md:text-sm text-gray-500">© 2026 テニプリ年齢比較ダッシュボード</p>
        </div>
      </footer>
    </div>
  );
}
