'use client';

import {useIdeaDetailStore} from '@/hooks/stores/useIdeaDetailStore';
import ChevronRight from '@/assets/chevrons/chevron-right.svg';
import Plus from '@/assets/idea/add-plus.svg';
import {useState} from 'react';

interface IdeaVersionHistoryProps {
  versions: {
    version: number;
    registerDate: string;
    tags?: string[];
  }[];
}

export const IdeaVersionHistory = ({versions}: IdeaVersionHistoryProps) => {
  const {currentVersion, setVersion} = useIdeaDetailStore();
  const [editingVersion, setEditingVersion] = useState<number | null>(null);
  const [inputValue, setInputValue] = useState<string>('');

  const handleAddTag = (version: number) => {
    setEditingVersion(version);
    setInputValue('');
  };

  const handleSubmit = () => {
    if (!inputValue.trim()) {
      setEditingVersion(null);
      return;
    }

    // TODO: api post
    console.log('추가할 태그:', inputValue);
    setEditingVersion(null);
    setInputValue('');
  };

  const formatDate = (dateString: string) => {
    return dateString.split('T')[0].replace(/-/g, '.');
  };

  return (
    <div className='flex w-[304px] flex-col gap-4 rounded-xl border px-6 py-8'>
      {versions.map((v) => {
        const isOpen = v.version === currentVersion;
        const isEditing = editingVersion === v.version;
        const tags = v.tags ?? [];

        return (
          <div key={v.version} className='w-full'>
            <button
              onClick={() =>
                setVersion(currentVersion === v.version ? null : v.version)
              }
              className='flex w-full items-center gap-3 text-[16px] font-medium'>
              <span
                className={`transition-transform duration-200 ${
                  isOpen ? 'rotate-90' : ''
                }`}>
                <ChevronRight />
              </span>
              <span>
                ver.{v.version} ({formatDate(v.registerDate)})
              </span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                isOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
              }`}>
              <div className='mt-3 flex flex-col gap-2'>
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className='bg-primary-2 rounded-[4px] px-3 py-[10px] text-[16px]'>
                    # {tag}
                  </span>
                ))}

                {isEditing && (
                  <input
                    autoFocus
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onBlur={handleSubmit}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') handleSubmit();
                      if (e.key === 'Escape') setEditingVersion(null);
                    }}
                    placeholder='# 태그를 입력해 주세요.'
                    className='bg-primary-2 rounded-[4px] px-3 py-[10px] text-[16px] outline-none'
                  />
                )}

                {/* 태그 추가 버튼 */}
                {!isEditing && (
                  <button
                    onClick={() => handleAddTag(v.version)}
                    className='text-gray flex flex-row gap-3 px-3 py-2 text-[16px]'>
                    <Plus />
                    <p>#태그 추가</p>
                  </button>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
