import Dashboard from "@/components/Dashboard";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-dashboard-bg text-gray-900 font-sans">
      <main className="flex-grow w-full max-w-[1920px] mx-auto p-0 sm:p-4 lg:p-8 flex flex-col">
         <div className="w-full lg:h-full lg:aspect-[16/9] flex flex-col flex-grow">
           <Dashboard />
         </div>
      </main>
      
      <footer className="bg-white border-t border-gray-200 mt-auto shrink-0 py-4 sm:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-xs text-gray-500">
            <span className="font-medium text-gray-700">出典・参照:</span>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
              <a 
                href="https://sagisi4.sakura.ne.jp/haguruma/teni/kyara-d.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-brand-300 transition-colors underline decoration-gray-300 underline-offset-4"
              >
                テニスの王子様キャラデータ一覧
              </a>
              <a 
                href="https://www.digital.go.jp/resources/dashboard-guidebook" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-brand-300 transition-colors underline decoration-gray-300 underline-offset-4"
              >
                ダッシュボードデザインの実践ガイドブック
              </a>
            </div>
          </div>
          <p className="text-xs text-gray-400">© 2026 テニプリ年齢比較ダッシュボード</p>
        </div>
      </footer>
    </div>
  );
}
