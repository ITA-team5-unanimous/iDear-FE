import {useState} from 'react';
import UrlDeleteButton from '@/assets/register/url-delete-icon.svg';

interface UrlAttachModalProps {
  onConfirm: (url: string) => void;
}

export const UrlAttachModal = ({onConfirm}: UrlAttachModalProps) => {
  const [url, setUrl] = useState<string>('');

  const handleUrlClear = () => setUrl('');

  const handleSubmit = () => {
    if (!url) return;
    onConfirm(url);
  };

  return (
    <div className='flex w-[800px] flex-col gap-3 rounded-lg bg-white px-6 py-3 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]'>
      <div className='relative w-full'>
        <input
          className='border-primary placeholder:text-gray h-[42px] w-full items-center rounded-sm border px-3.5 focus:outline-none'
          placeholder='URL을 붙여넣으세요(http://...)'
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />

        {url && (
          <button
            className='absolute top-1/2 right-3 -translate-y-1/2'
            onClick={handleUrlClear}
            aria-label='URL 삭제 버튼'>
            <UrlDeleteButton />
          </button>
        )}
      </div>

      <button
        onClick={handleSubmit}
        disabled={!url}
        className='bg-primary h-[42px] items-center justify-center rounded-sm text-xl text-white'
        aria-label='링크 버튼'>
        링크
      </button>
    </div>
  );
};
