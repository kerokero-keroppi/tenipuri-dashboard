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
} from 'recharts';
import { Character } from '../data/characters';

interface ChartsProps {
  characters: Character[];
}

export default function Charts({ characters }: ChartsProps) {
  // 学校別データの集計
  const schoolData = useMemo(() => {
    const schools = Array.from(new Set(characters.map((c) => c.school)));
    return schools
      .map((school) => ({
        name: school,
        count: characters.filter((c) => c.school === school).length,
      }))
      .sort((a, b) => b.count - a.count); // 人数が多い順
  }, [characters]);

  // 年齢別データの集計 (12歳〜15歳)
  const ageData = useMemo(() => {
    const ages = [12, 13, 14, 15];
    return ages.map((age) => ({
      name: `${age}歳`,
      count: characters.filter((c) => c.ageCurrent === age).length,
    }));
  }, [characters]);

  // デジタル庁ガイドラインを意識した配色 (ブランドカラー)
  const brandColor = 'var(--color-brand-300)';
  const gridColor = '#E5E7EB'; // gray-200
  const labelStyle = { fontSize: '10px', fill: '#6B7280' }; // gray-500

  return (
    <div className="flex flex-col gap-4 h-full">
      {/* 2つのグラフを横に並べる (グリッドに収めるため) */}
      <div className="grid grid-cols-2 gap-4 h-full">
        {/* 学校別キャラクター数 */}
        <div className="bg-white p-4 rounded-lg border border-brand-100 shadow-sm flex flex-col h-full">
          <h3 className="text-xs font-bold text-gray-700 mb-4 border-l-4 border-brand-400 pl-2">
            学校別キャラクター数
          </h3>
          <div className="flex-1 w-full min-h-[140px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={schoolData}
                layout="vertical"
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke={gridColor} />
                <XAxis type="number" hide />
                <YAxis
                  dataKey="name"
                  type="category"
                  width={70}
                  tick={labelStyle}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip
                  cursor={{ fill: 'rgba(var(--color-brand-100), 0.2)' }}
                  contentStyle={{ fontSize: '12px', borderRadius: '4px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Bar dataKey="count" fill={brandColor} radius={[0, 4, 4, 0]} barSize={12} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* 年齢分布 */}
        <div className="bg-white p-4 rounded-lg border border-brand-100 shadow-sm flex flex-col h-full">
          <h3 className="text-xs font-bold text-gray-700 mb-4 border-l-4 border-brand-400 pl-2">
            年齢分布（人）
          </h3>
          <div className="flex-1 w-full min-h-[140px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={ageData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={gridColor} />
                <XAxis
                  dataKey="name"
                  tick={labelStyle}
                  axisLine={{ stroke: gridColor }}
                  tickLine={false}
                />
                <YAxis tick={labelStyle} axisLine={false} tickLine={false} />
                <Tooltip
                  cursor={{ fill: 'rgba(var(--color-brand-100), 0.1)' }}
                  contentStyle={{ fontSize: '12px', borderRadius: '4px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Bar dataKey="count" fill={brandColor} radius={[4, 4, 0, 0]} barSize={30} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
