import React from 'react';
import { Character } from '../data/characters';

interface CharacterTableProps {
  characters: Character[];
  userAge: number | null;
}

/**
 * テニスの王子様キャラクター一覧表示テーブル
 * デジタル庁ダッシュボードデザインガイドラインに準拠した設計
 */
export default function CharacterTable({ characters, userAge }: CharacterTableProps) {
  const renderAgeDiff = (charAge: number) => {
    if (userAge === null) return null;
    const diff = charAge - userAge;
    if (diff > 0) return <span className="text-brand-500 font-bold">+{diff} (年上)</span>;
    if (diff < 0) return <span className="text-green-600 font-bold">{diff} (年下)</span>;
    return <span className="text-gray-500 font-medium">同い年</span>;
  };

  return (
    <div className="w-full h-full overflow-auto border border-brand-100 rounded-lg shadow-sm bg-white">
      <table className="w-full text-sm text-left border-collapse">
        <thead className="sticky top-0 bg-brand-500 text-white z-10">
          <tr>
            <th className="px-4 py-3 font-bold border-b border-brand-400">名前</th>
            <th className="px-4 py-3 font-bold border-b border-brand-400">学校</th>
            <th className="px-4 py-3 font-bold border-b border-brand-400">学年</th>
            <th className="px-4 py-3 font-bold border-b border-brand-400 text-right">年齢</th>
            {userAge !== null && (
              <th className="px-4 py-3 font-bold border-b border-brand-400 text-center">年齢差</th>
            )}
            <th className="px-4 py-3 font-bold border-b border-brand-400 text-right">身長</th>
            <th className="px-4 py-3 font-bold border-b border-brand-400 text-right">体重</th>
            <th className="px-4 py-3 font-bold border-b border-brand-400 text-center">血液型</th>
            <th className="px-4 py-3 font-bold border-b border-brand-400 text-center">利き腕</th>
            <th className="px-4 py-3 font-bold border-b border-brand-400">家族</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {characters.map((char, index) => (
            <tr 
              key={`${char.name}-${char.school}`} 
              className="hover:bg-brand-50 transition-colors even:bg-brand-100/10"
            >
              <td className="px-4 py-3 font-medium text-gray-900">{char.name}</td>
              <td className="px-4 py-3 text-gray-600">{char.school}</td>
              <td className="px-4 py-3 text-gray-600">{char.grade}</td>
              <td className="px-4 py-3 text-gray-900 text-right font-bold">{char.ageCurrent}歳</td>
              {userAge !== null && (
                <td className="px-4 py-3 text-center text-xs whitespace-nowrap">
                  {renderAgeDiff(char.ageCurrent)}
                </td>
              )}
              <td className="px-4 py-3 text-gray-600 text-right">{char.height ? `${char.height}cm` : '--'}</td>
              <td className="px-4 py-3 text-gray-600 text-right">{char.weight ? `${char.weight}kg` : '--'}</td>
              <td className="px-4 py-3 text-gray-600 text-center">{char.bloodType}型</td>
              <td className="px-4 py-3 text-gray-600 text-center">{char.dominantArm}手</td>
              <td className="px-4 py-3 text-gray-500 text-xs truncate max-w-[150px]" title={char.family}>
                {char.family || '--'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {characters.length === 0 && (
        <div className="p-12 text-center flex flex-col items-center justify-center h-full">
          <span className="text-gray-300 text-4xl mb-4 italic font-bold">No Data</span>
          <p className="text-gray-400">条件に一致するキャラクターは存在しません</p>
        </div>
      )}
    </div>
  );
}
