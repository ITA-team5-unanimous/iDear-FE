'use client';

import {useIdeaDetailStore} from '@/hooks/stores/useIdeaDetailStore';
import ChevronRight from '@/assets/chevrons/chevron-right.svg';
import Plus from '@/assets/idea/add-plus.svg';
import {useState} from 'react';
import {useAddIdeaTag, useIdeaDetail} from '@/hooks/queries/useIdea';
import {IdeaVersionDetail} from '@/schemas/idea';

interface IdeaVersionHistoryProps {
  ideaId: number;
  versions: IdeaVersionDetail[];
}

export const IdeaVersionHistory = ({ideaId}: IdeaVersionHistoryProps) => {
  const {currentVersion, setVersion} = useIdeaDetailStore();
  const [editingVersionId, setEditingVersionId] = useState<number | null>(null);
  const [inputValue, setInputValue] = useState<string>('');

  const {data, isLoading} = useIdeaDetail(ideaId);
  const versions = data?.versions ?? [];
  const {mutate: addTag} = useAddIdeaTag(ideaId);

  const handleAddTag = (versionId: number) => {
    setEditingVersionId(versionId);
    setInputValue('');
  };

  const handleSubmit = (versionId: number) => {
    if (!inputValue.trim()) {
      setEditingVersionId(null);
      return;
    }

    addTag(
      {versionId, tag: inputValue},
      {
        onSuccess: () => {
          setEditingVersionId(null);
          setInputValue('');
        },
      }
    );
  };

  const formatDate = (dateString: string) => {
    return dateString.split('T')[0].replace(/-/g, '.');
  };

  if (isLoading) return;

  return (
    <div className='flex w-[304px] flex-col gap-4 rounded-xl border px-6 py-8'>
      {versions.map((v) => {
        const isOpen = v.versionNumber === currentVersion;
        const isEditing = editingVersionId === v.ideaVersionId;

        return (
          <div key={v.ideaVersionId} className='w-full'>
            <button
              onClick={() => setVersion(isOpen ? null : v.versionNumber)}
              className='flex w-full items-center gap-3 text-[16px] font-medium'>
              <span
                className={`transition-transform duration-200 ${
                  isOpen ? 'rotate-90' : ''
                }`}>
                <ChevronRight />
              </span>
              <span>
                ver.{v.versionNumber} ({formatDate(v.requestedAt)})
              </span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                isOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
              }`}>
              <div className='mt-3 flex flex-col gap-2'>
                {v.tags?.map((tagObj) => (
                  <span
                    key={tagObj.ideaVersionTagId}
                    className='bg-primary-2 rounded-[4px] px-3 py-[10px] text-[16px]'>
                    # {tagObj.tag}
                  </span>
                ))}

                {isEditing && (
                  <input
                    autoFocus
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onBlur={() => handleSubmit(v.ideaVersionId)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') handleSubmit(v.ideaVersionId);
                      if (e.key === 'Escape') setEditingVersionId(null);
                    }}
                    placeholder='# 태그를 입력해 주세요.'
                    className='bg-primary-2 rounded-[4px] px-3 py-[10px] text-[16px] outline-none'
                  />
                )}

                {/* 태그 추가 버튼 */}
                {!isEditing && (
                  <button
                    onClick={() => handleAddTag(v.ideaVersionId)}
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
