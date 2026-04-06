import React from 'react';
import { Character } from '../data/characters';

interface SummaryCardsProps {
  characters: Character[];
  userAge: number | null;
}

/**
 * SummaryCards Component
 * Calculates and displays KPI cards based on filtered characters and user's age.
 * Adheres to Digital Agency Dashboard guidelines for KPI display.
 */
export default function SummaryCards({ characters, userAge }: SummaryCardsProps) {
  // Calculations
  const sameAge = userAge !== null ? characters.filter(c => c.ageCurrent === userAge).length : 0;
  const older = userAge !== null ? characters.filter(c => c.ageCurrent > userAge).length : 0;
  const younger = userAge !== null ? characters.filter(c => c.ageCurrent < userAge).length : 0;
  const total = characters.length;

  // 平均年齢差の計算
  let averageDiffText = "--";
  let averageDiffValue = null;
  if (userAge !== null && total > 0) {
    const totalAge = characters.reduce((sum, c) => sum + c.ageCurrent, 0);
    const avgAge = totalAge / total;
    averageDiffValue = Math.abs(avgAge - userAge).toFixed(1);
    if (userAge > avgAge) {
      averageDiffText = `平均より 約${averageDiffValue}歳 年上`;
    } else if (userAge < avgAge) {
      averageDiffText = `平均より 約${averageDiffValue}歳 年下`;
    } else {
      averageDiffText = `平均と ほぼ同い年`;
    }
  }

  const cardStyle = "bg-white rounded-lg border border-brand-100 shadow-sm p-3 sm:p-4 flex flex-col justify-center transition-all hover:bg-brand-50/30";
  const labelStyle = "text-[10px] sm:text-xs text-gray-500 font-bold mb-1 uppercase tracking-wider";
  const valueStyle = "text-lg sm:text-xl md:text-2xl font-bold text-brand-500 leading-none";
  const unitStyle = "text-[10px] text-gray-400 ml-1 font-normal";

  return (
    <div className="flex flex-col gap-3 h-full">
      {/* 比較結果メッセージ (上部固定) */}
      <div className={`${cardStyle} bg-brand-50/50 border-brand-200 justify-start py-3`}>
        <span className={labelStyle}>年齢比較サマリ</span>
        {userAge !== null ? (
          <div className="flex flex-col gap-2 mt-1">
            <p className="text-sm font-medium text-gray-700 leading-snug">
              あなたより年下のキャラクターは <span className="text-red-500 font-bold text-lg">{younger}</span> 人います。
            </p>
            <div className="flex flex-col gap-0.5">
              <p className="text-[10px] text-gray-500 font-bold uppercase tracking-tight">平均年齢との比較</p>
              <p className="text-lg font-black text-brand-600 bg-white px-3 py-1.5 rounded-lg border-2 border-brand-200 shadow-sm w-fit flex items-center gap-2">
                <span className="w-2 h-2 bg-brand-400 rounded-full animate-pulse"></span>
                {averageDiffText}
              </p>
            </div>
          </div>
        ) : (
          <div className="flex items-center text-center justify-center py-4 min-h-[3rem]">
             <p className="text-sm text-gray-400 break-words leading-relaxed">
                年齢を入力すると、具体的な比較結果が表示されます。
             </p>
          </div>
        )}
      </div>

      {/* 指標グリッド (2x2) */}
      <div className="grid grid-cols-2 gap-2 flex-1">
        {/* 表示対象 */}
        <div className={`${cardStyle} py-2`}>
          <span className={labelStyle}>表示対象</span>
          <div className="flex items-baseline">
            <span className={valueStyle}>{total}</span>
            <span className={unitStyle}>人</span>
          </div>
        </div>

        {/* 年下 */}
        <div className={`${cardStyle} py-2`}>
          <span className={labelStyle}>年下</span>
          <div className="flex items-baseline">
            <span className={`${valueStyle} ${userAge !== null && younger > 0 ? 'text-red-500' : 'text-gray-300'}`}>
              {userAge === null ? '--' : younger}
            </span>
            <span className={unitStyle}>人</span>
          </div>
        </div>

        {/* 同い年 */}
        <div className={`${cardStyle} py-2`}>
          <span className={labelStyle}>同い年</span>
          <div className="flex items-baseline">
            <span className={`${valueStyle} ${userAge !== null && sameAge > 0 ? 'text-brand-400' : 'text-gray-300'}`}>
              {userAge === null ? '--' : sameAge}
            </span>
            <span className={unitStyle}>人</span>
          </div>
        </div>

        {/* 年上 */}
        <div className={`${cardStyle} py-2`}>
          <span className={labelStyle}>年上</span>
          <div className="flex items-baseline">
            <span className={`${valueStyle} ${userAge !== null && older > 0 ? 'text-brand-600' : 'text-gray-300'}`}>
              {userAge === null ? '--' : older}
            </span>
            <span className={unitStyle}>人</span>
          </div>
        </div>
      </div>
    </div>
  );
}
