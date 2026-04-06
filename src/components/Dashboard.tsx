'use client';

import React, { useState, useMemo } from 'react';
import { characters } from '../data/characters';
import SummaryCards from './SummaryCards';
import CharacterTable from './CharacterTable';
import Charts from './Charts';

export default function Dashboard() {
  // ユーザーの年齢ステート
  const [age, setAge] = useState<number | null>(null);

  // 定数の抽出
  const schools = useMemo(() => Array.from(new Set(characters.map(c => c.school))), []);
  const grades = useMemo(() => Array.from(new Set(characters.map(c => c.grade))).sort(), []);

  // フィルター用のステート
  const [filters, setFilters] = useState({
    school: [] as string[],
    grade: [] as string[],
    position: 'all' as 'all' | 'above' | 'below' | 'same',
  });

  // フィルター処理 (学校と学年のみ)
  const filteredByScope = useMemo(() => {
    return characters.filter(c => {
      const schoolMatch = filters.school.length === 0 || filters.school.includes(c.school);
      const gradeMatch = filters.grade.length === 0 || filters.grade.includes(c.grade);
      return schoolMatch && gradeMatch;
    });
  }, [filters.school, filters.grade]);
  // フィルタリングロジック
  const filteredCharacters = useMemo(() => {
    return characters.filter((char) => {
      const schoolMatch = filters.school.length === 0 || filters.school.includes(char.school);
      const gradeMatch = filters.grade.length === 0 || filters.grade.includes(char.grade);
      
      let ageMatch = true;
      if (age !== null) {
        if (filters.position === 'above') ageMatch = char.ageCurrent > age;
        else if (filters.position === 'below') ageMatch = char.ageCurrent < age;
        else if (filters.position === 'same') ageMatch = char.ageCurrent === age;
      }
      
      return schoolMatch && gradeMatch && ageMatch;
    });
  }, [filters.school, filters.grade, filters.position, age]);

  // ハンドラー
  const toggleFilter = (type: 'school' | 'grade', value: string) => {
    setFilters(prev => {
      const current = prev[type];
      const next = current.includes(value)
        ? current.filter(v => v !== value)
        : [...current, value];
      return { ...prev, [type]: next };
    });
  };

  return (
    <div className="w-full min-h-screen bg-dashboard-bg p-4 md:p-8 flex items-center justify-center">
      {/* 16:9比率を意識したメインコンテナ */}
      <div className="dashboard-container bg-white shadow-xl rounded-lg overflow-hidden border border-brand-200 grid grid-cols-6 grid-rows-6">
        
        {/* Header Area (Row 1, Cols 1-6) */}
        <header className="col-span-6 row-span-1 border-b border-brand-100 bg-brand-500 text-white p-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold tracking-tight">テニプリ キャラクター年齢比較ダッシュボード</h1>
            <p className="text-xs opacity-80">デジタル庁ダッシュボードデザイン 実践ガイドブック準拠</p>
          </div>
          
          <div className="flex items-center gap-4">
            <label htmlFor="user-age" className="text-sm font-medium">あなたの年齢:</label>
            <input
              id="user-age"
              type="number"
              className="w-20 px-2 py-1 rounded bg-white text-brand-500 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-brand-300"
              placeholder="歳"
              value={age ?? ''}
              onChange={(e) => setAge(e.target.value ? parseInt(e.target.value) : null)}
            />
          </div>
        </header>

        {/* Sidebar / Filter Area (Rows 2-6, Col 1) */}
        <aside className="col-span-1 row-span-5 border-r border-brand-100 bg-brand-100/30 p-4 flex flex-col gap-6">
          <div>
            <h2 className="text-xs font-bold text-brand-500 uppercase tracking-wider mb-3">絞り込み</h2>
            
            <div className="flex flex-col gap-4">
              {/* 学校フィルター */}
              <div className="flex flex-col gap-1">
                <span className="text-[10px] text-gray-500 font-bold uppercase">学校</span>
                <div className="flex flex-col gap-1 max-h-40 overflow-y-auto pr-1">
                  {schools.map(school => (
                    <label key={school} className="flex items-center gap-2 text-xs cursor-pointer hover:text-brand-500">
                      <input
                        type="checkbox"
                        className="w-3 h-3 rounded border-brand-200 text-brand-500 focus:ring-brand-500"
                        checked={filters.school.includes(school)}
                        onChange={() => toggleFilter('school', school)}
                      />
                      {school}
                    </label>
                  ))}
                </div>
              </div>
              
              {/* 学年フィルター */}
              <div className="flex flex-col gap-1">
                <span className="text-[10px] text-gray-500 font-bold uppercase">学年</span>
                <div className="flex flex-wrap gap-2">
                  {grades.map(grade => (
                    <button
                      key={grade}
                      onClick={() => toggleFilter('grade', grade)}
                      className={`px-2 py-1 text-[10px] rounded border transition-colors ${
                        filters.grade.includes(grade)
                          ? 'bg-brand-500 text-white border-brand-500'
                          : 'bg-white text-gray-600 border-brand-200 hover:border-brand-400'
                      }`}
                    >
                      {grade}
                    </button>
                  ))}
                </div>
              </div>

              {/* 年齢ポジション */}
              <div className="flex flex-col gap-1">
                <span className="text-[10px] text-gray-500 font-bold uppercase">表示順位</span>
                <div className="flex flex-col gap-1">
                  {[
                    { id: 'all', label: 'すべて' },
                    { id: 'same', label: '同い年のみ' },
                    { id: 'above', label: '年上のみ' },
                    { id: 'below', label: '年下のみ' },
                  ].map(pos => (
                    <label key={pos.id} className="flex items-center gap-2 text-xs cursor-pointer hover:text-brand-500 p-1 rounded hover:bg-white transition-colors">
                      <input
                        type="radio"
                        name="position"
                        className="w-3 h-3 border-brand-200 text-brand-500 focus:ring-brand-500"
                        checked={filters.position === pos.id}
                        onChange={() => setFilters(prev => ({ ...prev, position: pos.id as 'all' | 'above' | 'below' | 'same' }))}
                      />
                      {pos.label}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-auto pt-4 border-t border-brand-200 text-[10px] text-gray-400">
            データ件数: {characters.length} 件
          </div>
        </aside>

        {/* Main Content Area (Rows 2-6, Cols 2-6) */}
        <main className="col-span-5 row-span-5 p-6 bg-gray-50/30 overflow-auto">
          {/* グリッドレイアウト内部のコンテンツ (次セッションで実装) */}
          <div className="grid grid-cols-5 grid-rows-5 gap-4 h-full">
            {/* 重要指標 (KPIカード Area) */}
            <div className="col-span-2 row-span-2">
              <SummaryCards characters={filteredByScope} userAge={age} />
            </div>

            {/* チャートエリア */}
            <div className="col-span-3 row-span-2">
              <Charts characters={filteredByScope} userAge={age} />
            </div>

            {/* キャラクターリスト */}
            <div className="col-span-5 row-span-3 overflow-hidden">
              <CharacterTable characters={filteredCharacters} userAge={age} />
            </div>
          </div>
        </main>

      </div>
    </div>
  );
}
