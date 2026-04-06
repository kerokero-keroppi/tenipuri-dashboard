'use client';

import React, { useMemo } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  LabelList
} from 'recharts';
import { Character } from '../data/characters';

interface ChartsProps {
  characters: Character[];
  userAge?: number | null;
}

// カスタムラベルのためのコンポーネント (吹き出し)
const CustomTooltipBadge = (props: any) => {
  const { x, y, width, value, viewBox } = props; // value is boolean (isUser)
  if (!value) return null;
  
  const radius = 4;
  const boxWidth = 72;
  const boxHeight = 22;
  const arrowSize = 5;
  
  // Barの中央のX座標（矢印はここから）
  const centerX = x + width / 2;
  // BoxTopのY座標 (Barの上)
  const boxY = y - boxHeight - arrowSize - 2;

  // チャートの右端を超えないようにバッジのX位置をクランプ
  const chartRight = viewBox ? viewBox.x + viewBox.width : Infinity;
  const rawLeft = centerX - boxWidth / 2;
  const clampedLeft = Math.min(rawLeft, chartRight - boxWidth);
  const badgeCenterX = clampedLeft + boxWidth / 2;
  
  return (
    <g>
      {/* 吹き出しの背景 */}
      <rect
        x={clampedLeft}
        y={boxY}
        width={boxWidth}
        height={boxHeight}
        fill="#EF4444"
        rx={radius}
        ry={radius}
      />
      {/* 吹き出しの矢印（下向きの三角形）：常にbarの中央から */}
      <polygon
        points={`
          ${centerX - arrowSize},${boxY + boxHeight} 
          ${centerX + arrowSize},${boxY + boxHeight} 
          ${centerX},${boxY + boxHeight + arrowSize}
        `}
        fill="#EF4444"
      />
      {/* 吹き出しのテキスト */}
      <text
        x={badgeCenterX}
        y={boxY + boxHeight / 2 + 3}
        fill="#FFFFFF"
        textAnchor="middle"
        fontSize="10px"
        fontWeight="bold"
      >
        あなたの年齢
      </text>
    </g>
  );
};

export default function Charts({ characters, userAge }: ChartsProps) {
  // 年齢別データの集計
  const ageData = useMemo(() => {
    // 存在する全キャラクターの年齢のセット
    const charAges = characters.map(c => c.ageCurrent);
    
    // min と max の決定
    let allAges = [...charAges];
    if (userAge !== null && userAge !== undefined) {
      allAges.push(userAge);
    }
    
    // データがない場合は空配列
    if (allAges.length === 0) return [];
    
    const minAge = Math.min(...allAges);
    const maxAge = Math.max(...allAges);
    
    // 最小から最大まですべての年齢を配列化し、存在しない年齢も0としてマッピングする
    // これにより年齢が大きく離れている場合、隙間がしっかりと空いて距離感を認識しやすくなる。
    const data = [];
    for (let currentAge = minAge; currentAge <= maxAge; currentAge++) {
      data.push({
        name: `${currentAge}歳`,
        count: characters.filter(c => c.ageCurrent === currentAge).length,
        isUser: currentAge === userAge,
      });
    }
    return data;
  }, [characters, userAge]);

  const brandColor = 'var(--color-brand-300)';
  const accentColor = '#EF4444'; // Tailwind text-red-500
  const gridColor = '#E5E7EB'; // gray-200
  const labelStyle = { fontSize: '10px', fill: '#6B7280' }; // gray-500

  // ユーザーの年齢が大きく離れている場合、ツールチップのフォーマットなどを変更する機能
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white p-2 border border-gray-200 rounded shadow-sm text-xs">
          <p className="font-bold text-gray-700">{label}</p>
          <p className="text-brand-500">キャラクター: {data.count} 人</p>
          {data.isUser && (
            <p className="text-red-500 font-bold mt-1">あなたの年齢</p>
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="flex flex-col gap-4 h-full">
      {/* 年齢分布を画面全体に表示 */}
      <div className="bg-white p-4 rounded-lg border border-brand-100 shadow-sm flex flex-col h-full w-full">
        <h3 className="text-xs font-bold text-gray-700 mb-3 sm:mb-4 border-l-4 border-brand-400 pl-2 flex flex-col sm:flex-row sm:justify-between gap-1">
          <span>年齢分布（人）</span>
          {userAge !== null && userAge !== undefined && (
            <span className="text-gray-400 font-normal text-[10px] sm:text-xs">
              緑はキャラクター、赤はあなたの年齢
            </span>
          )}
        </h3>
        <div className="w-full pt-6 sm:pt-8"> {/* 吹き出しのために上部に余白を確保 */}
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={ageData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={gridColor} />
              <XAxis
                dataKey="name"
                tick={labelStyle}
                axisLine={{ stroke: gridColor }}
                tickLine={false}
                minTickGap={-100} // 大きすぎると省略されてしまうためマイナスにして全表示しやすくする
              />
              <YAxis tick={labelStyle} axisLine={false} tickLine={false} allowDecimals={false} />
              <Tooltip
                cursor={{ fill: 'rgba(var(--color-brand-100), 0.1)' }}
                 content={<CustomTooltip />}
              />
              <Bar dataKey="count" radius={[4, 4, 0, 0]} barSize={24} minPointSize={userAge ? 2 : 0}>
                {ageData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.isUser ? accentColor : brandColor} />
                ))}
                {/* 吹き出しを表示 */}
                <LabelList dataKey="isUser" content={<CustomTooltipBadge />} />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
