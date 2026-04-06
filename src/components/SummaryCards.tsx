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

  const cardStyle = "bg-white rounded-lg border border-brand-100 shadow-sm p-4 flex flex-col justify-center transition-all hover:bg-brand-50/30";
  const labelStyle = "text-[10px] sm:text-xs text-gray-500 font-bold mb-1 uppercase tracking-wider";
  const valueStyle = "text-xl sm:text-2xl font-bold text-brand-500 leading-none";
  const unitStyle = "text-[10px] text-gray-400 ml-1 font-normal";

  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-3 h-full">
      {/* Total Count */}
      <div className={cardStyle}>
        <span className={labelStyle}>表示対象</span>
        <div className="flex items-baseline">
          <span className={valueStyle}>{total}</span>
          <span className={unitStyle}>人</span>
        </div>
      </div>

      {/* Same Age */}
      <div className={cardStyle}>
        <span className={labelStyle}>同い年</span>
        <div className="flex items-baseline">
          <span className={`${valueStyle} ${userAge !== null && sameAge > 0 ? 'text-brand-400' : 'text-gray-300'}`}>
            {userAge === null ? '--' : sameAge}
          </span>
          <span className={unitStyle}>人</span>
        </div>
      </div>

      {/* Older */}
      <div className={cardStyle}>
        <span className={labelStyle}>年上</span>
        <div className="flex items-baseline">
          <span className={`${valueStyle} ${userAge !== null ? (older > 0 ? 'text-highlight' : 'text-brand-500') : 'text-gray-300'}`}>
            {userAge === null ? '--' : older}
          </span>
          <span className={unitStyle}>人</span>
        </div>
      </div>

      {/* Younger */}
      <div className={cardStyle}>
        <span className={labelStyle}>年下</span>
        <div className="flex items-baseline">
          <span className={`${valueStyle} ${userAge !== null ? (younger > 0 ? 'text-danger' : 'text-brand-500') : 'text-gray-300'}`}>
            {userAge === null ? '--' : younger}
          </span>
          <span className={unitStyle}>人</span>
        </div>
      </div>
    </div>
  );
}
