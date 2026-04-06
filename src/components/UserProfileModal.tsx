import React from 'react';

export type UserProfile = {
  age: number | null;
  school: string;
  grade: string;
  height: number | null;
  weight: number | null;
  bloodType: string;
  dominantArm: string;
  family: string[];
  familyOther: string;
};

interface UserProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: UserProfile;
  setProfile: React.Dispatch<React.SetStateAction<UserProfile>>;
}

const FAMILY_OPTIONS = ['祖父', '祖母', '父', '母', '兄', '姉', '弟', '妹', '犬', '猫'];
const BLOOD_TYPES = ['A', 'B', 'O', 'AB'];
const DOMINANT_ARMS = ['右', '左', '両'];
const GRADES = ['1年', '2年', '3年', 'その他'];

export default function UserProfileModal({ isOpen, onClose, profile, setProfile }: UserProfileModalProps) {
  if (!isOpen) return null;

  const handleFamilyToggle = (member: string) => {
    setProfile(prev => {
      if (prev.family.includes(member)) {
        return { ...prev, family: prev.family.filter(m => m !== member) };
      } else {
        return { ...prev, family: [...prev.family, member] };
      }
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 overflow-y-auto">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl m-4 border border-brand-200 flex flex-col max-h-[90vh]">
        <div className="p-4 border-b border-brand-100 flex justify-between items-center bg-brand-50 rounded-t-lg">
          <h2 className="text-xl font-bold text-brand-500">あなたのプロフィール設定</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 font-bold p-1">
            ✕
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto flex-1 flex flex-col gap-6">
          <p className="text-sm text-gray-600 mb-2">
            ここで設定したプロフィールは、キャラクター一覧表に「あなた」として強調表示されます。<br/>
            ※すべて任意項目です。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* 学校 */}
            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-gray-500">学校</label>
              <input
                type="text"
                className="w-full px-3 py-2 rounded border border-brand-200 focus:border-brand-400 focus:ring-1 focus:ring-brand-400"
                value={profile.school}
                onChange={e => setProfile({...profile, school: e.target.value})}
                placeholder="例: 青春学園"
              />
            </div>

            {/* 学年 */}
            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-gray-500">学年</label>
              <div className="flex gap-2">
                {GRADES.map(g => (
                  <label key={g} className="flex items-center gap-1 text-sm cursor-pointer">
                    <input
                      type="radio"
                      name="grade"
                      value={g}
                      checked={profile.grade === g}
                      onChange={e => setProfile({...profile, grade: e.target.value})}
                      className="text-brand-500 focus:ring-brand-500"
                    /> {g}
                  </label>
                ))}
              </div>
            </div>

            {/* 身長・体重 */}
            <div className="flex gap-4">
              <div className="flex flex-col gap-1 flex-1">
                <label className="text-xs font-bold text-gray-500">身長</label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    className="w-24 px-3 py-2 rounded border border-brand-200 focus:border-brand-400 focus:ring-1 focus:ring-brand-400"
                    value={profile.height ?? ''}
                    onChange={e => setProfile({...profile, height: e.target.value ? parseInt(e.target.value) : null})}
                    placeholder="--"
                  />
                  <span className="text-sm">cm</span>
                </div>
              </div>
              <div className="flex flex-col gap-1 flex-1">
                <label className="text-xs font-bold text-gray-500">体重</label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    className="w-24 px-3 py-2 rounded border border-brand-200 focus:border-brand-400 focus:ring-1 focus:ring-brand-400"
                    value={profile.weight ?? ''}
                    onChange={e => setProfile({...profile, weight: e.target.value ? parseInt(e.target.value) : null})}
                    placeholder="--"
                  />
                  <span className="text-sm">kg</span>
                </div>
              </div>
            </div>

            {/* 血液型 */}
            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-gray-500">血液型</label>
              <div className="flex gap-3">
                {BLOOD_TYPES.map(b => (
                  <label key={b} className="flex items-center gap-1 text-sm cursor-pointer">
                    <input
                      type="radio"
                      name="bloodType"
                      value={b}
                      checked={profile.bloodType === b}
                      onChange={e => setProfile({...profile, bloodType: e.target.value})}
                      className="text-brand-500 focus:ring-brand-500"
                    /> {b}型
                  </label>
                ))}
              </div>
            </div>

            {/* 利き腕 */}
            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-gray-500">利き腕</label>
              <div className="flex gap-3">
                {DOMINANT_ARMS.map(a => (
                  <label key={a} className="flex items-center gap-1 text-sm cursor-pointer">
                    <input
                      type="radio"
                      name="dominantArm"
                      value={a}
                      checked={profile.dominantArm === a}
                      onChange={e => setProfile({...profile, dominantArm: e.target.value})}
                      className="text-brand-500 focus:ring-brand-500"
                    /> {a}
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-brand-100 my-2 pt-4"></div>

          {/* 家族構成 (チェックボックス + 自由入力) */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-brand-500">家族構成</label>
            <div className="flex flex-wrap gap-2 mb-2">
              {FAMILY_OPTIONS.map(m => (
                <label key={m} className={`px-3 py-1.5 rounded-full text-xs font-bold cursor-pointer border transition-colors ${
                  profile.family.includes(m) ? 'bg-brand-500 text-white border-brand-500' : 'bg-gray-50 text-gray-600 border-gray-200 hover:border-brand-300'
                }`}>
                  <input
                    type="checkbox"
                    className="hidden"
                    checked={profile.family.includes(m)}
                    onChange={() => handleFamilyToggle(m)}
                  />
                  {m}
                </label>
              ))}
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-gray-500">その他 (自由入力)</label>
              <input
                type="text"
                className="w-full px-3 py-2 rounded border border-brand-200 focus:border-brand-400 focus:ring-1 focus:ring-brand-400"
                value={profile.familyOther}
                onChange={e => setProfile({...profile, familyOther: e.target.value})}
                placeholder="例: インコ、曽祖父 など"
              />
            </div>
          </div>

        </div>
        
        <div className="p-4 border-t border-brand-100 flex justify-end gap-3 bg-gray-50 rounded-b-lg">
          <button 
            onClick={onClose}
            className="px-6 py-2 bg-brand-500 text-white font-bold rounded hover:bg-brand-600 transition-colors"
          >
            完了
          </button>
        </div>
      </div>
    </div>
  );
}
