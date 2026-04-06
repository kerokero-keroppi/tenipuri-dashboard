'use client';

import React, { useState, useMemo } from 'react';
import { characters } from '../data/characters';
import SummaryCards from './SummaryCards';
import CharacterTable from './CharacterTable';
import Charts from './Charts';
import UserProfileModal, { UserProfile } from './UserProfileModal';

export default function Dashboard() {
  // ユーザーのプロファイルステート
  const [userProfile, setUserProfile] = useState<UserProfile>({
    age: null,
    school: '',
    grade: '',
    height: null,
    weight: null,
    bloodType: '',
    dominantArm: '',
    family: [],
    familyOther: ''
  });
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);

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
      if (userProfile.age !== null) {
        if (filters.position === 'above') ageMatch = char.ageCurrent > userProfile.age;
        else if (filters.position === 'below') ageMatch = char.ageCurrent < userProfile.age;
        else if (filters.position === 'same') ageMatch = char.ageCurrent === userProfile.age;
      }
      
      return schoolMatch && gradeMatch && ageMatch;
    });
  }, [filters.school, filters.grade, filters.position, userProfile.age]);

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

  // アクティブフィルター数
  const activeFilterCount = filters.school.length + filters.grade.length + (filters.position !== 'all' ? 1 : 0);

  return (
    <div className="w-full lg:min-h-0 flex flex-col lg:items-center lg:justify-center flex-grow">
      {/* メインコンテナ */}
      <div className="dashboard-container bg-white shadow-xl lg:rounded-lg lg:overflow-hidden border border-brand-200 flex flex-col lg:grid lg:grid-cols-6 lg:grid-rows-[auto_1fr] flex-grow">
        
        {/* Header Area */}
        <header className="lg:col-span-6 border-b border-brand-100 bg-brand-500 text-white p-3 sm:p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 min-w-0">
          <div className="min-w-0 w-full sm:w-auto">
            <h1 className="text-sm sm:text-xl font-bold tracking-tight break-words leading-snug">テニプリ キャラクター年齢比較ダッシュボード</h1>
            <p className="text-[10px] sm:text-xs opacity-80 mt-1">デジタル庁ダッシュボードデザイン 実践ガイドブック準拠</p>
          </div>
          
          <div className="flex flex-wrap items-center gap-3 sm:gap-6 w-full sm:w-auto">
            {/* 年齢入力 (直接入力) */}
            <div className="flex items-center gap-2 sm:gap-3">
              <label htmlFor="user-age" className="text-sm sm:text-base font-bold whitespace-nowrap">あなたの年齢:</label>
              <div className="relative flex items-center">
                <input
                  id="user-age"
                  type="number"
                  className="w-20 sm:w-24 px-2 sm:px-3 py-1.5 rounded-lg bg-white text-brand-500 text-base sm:text-lg font-black focus:outline-none focus:ring-4 focus:ring-brand-200 transition-all border-2 border-brand-100 focus:border-brand-400"
                  placeholder="--"
                  value={userProfile.age ?? ''}
                  onChange={(e) => setUserProfile(prev => ({ ...prev, age: e.target.value ? parseInt(e.target.value) : null }))}
                />
                <span className="ml-1.5 sm:ml-2 text-sm font-bold opacity-90 whitespace-nowrap">歳</span>
              </div>
            </div>

            {/* 詳細プロフィールボタン */}
            <button
              onClick={() => setIsProfileOpen(true)}
              className="px-3 py-1.5 bg-brand-400/20 text-white rounded-lg font-bold border border-white/30 hover:bg-brand-400/40 transition-colors text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2"
              title="学校・身長・体重・家族などを設定"
            >
              👤 <span className="hidden sm:inline">詳細</span>プロフィール設定
            </button>
          </div>
        </header>

        {/* SP: フィルタートグルボタン */}
        <button
          className="lg:hidden flex items-center justify-between w-full px-4 py-2.5 bg-brand-100/50 border-b border-brand-100 text-sm font-bold text-brand-500 active:bg-brand-100 transition-colors"
          onClick={() => setFilterOpen(!filterOpen)}
        >
          <span className="flex items-center gap-2">
            🔍 フィルター
            {activeFilterCount > 0 && (
              <span className="bg-brand-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[18px] text-center">
                {activeFilterCount}
              </span>
            )}
          </span>
          <span className="text-xs">{filterOpen ? '▲' : '▼'}</span>
        </button>

        {/* Sidebar / Filter Area */}
        <aside className={`${filterOpen ? 'block' : 'hidden'} lg:block lg:col-span-1 lg:row-span-1 border-b lg:border-b-0 lg:border-r border-brand-100 bg-brand-100/30 p-4 flex flex-col gap-4 lg:gap-6`}>
          <div>
            <h2 className="text-xs font-bold text-brand-500 uppercase tracking-wider mb-3">絞り込み</h2>
            
            <div className="flex flex-col gap-4">
              {/* 学校フィルター */}
              <div className="flex flex-col gap-1">
                <span className="text-[10px] text-gray-500 font-bold uppercase">学校</span>
                <div className="flex flex-wrap lg:flex-col gap-1.5 lg:gap-1 max-h-40 overflow-y-auto pr-1">
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
                <div className="flex flex-wrap lg:flex-col gap-2 lg:gap-1">
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

        {/* Main Content Area */}
        <main className="lg:col-span-5 lg:row-span-1 p-3 sm:p-4 lg:p-6 bg-gray-50/30 lg:overflow-auto flex-none lg:flex-1">
          <div className="flex flex-col lg:grid lg:grid-cols-5 gap-4 lg:h-full">
            {/* 重要指標 (KPIカード Area) */}
            <div className="lg:col-span-2 lg:row-span-2">
              <SummaryCards characters={filteredByScope} userAge={userProfile.age} />
            </div>

            {/* チャートエリア */}
            <div className="lg:col-span-3 lg:row-span-2 min-h-[280px] sm:min-h-[300px] min-w-0">
              <Charts characters={filteredByScope} userAge={userProfile.age} />
            </div>

            {/* キャラクターリスト */}
            <div className="lg:col-span-5 lg:row-span-3 min-w-0 lg:overflow-hidden">
              <CharacterTable characters={filteredCharacters} userProfile={userProfile} />
            </div>
          </div>
        </main>

        {/* Modal */}
        <UserProfileModal
          isOpen={isProfileOpen}
          onClose={() => setIsProfileOpen(false)}
          profile={userProfile}
          setProfile={setUserProfile}
        />

      </div>
    </div>
  );
}
