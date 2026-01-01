import {IdeaVersionDetail} from '@/schemas/idea';

interface IdeaTimelineProps {
  versions: IdeaVersionDetail[];
}

export const IdeaTimeline = ({versions}: IdeaTimelineProps) => {
  const sortedVersions = [...versions].sort(
    (a, b) => b.versionNumber - a.versionNumber
  );

  const formatDate = (dateString: string) => {
    return dateString.split('T')[0].replace(/-/g, '.');
  };

  return (
    <section className='border-gray overflow-y-auto border-y'>
      <ul className='relative flex flex-col px-[117px] pb-[64px]'>
        {sortedVersions.map((version) => (
          <li
            key={version.ideaVersionId}
            className='grid h-[146px] grid-cols-[120px_40px_1fr] gap-12'>
            <div className='flex items-center text-xl font-medium'>
              <p>{formatDate(version.requestedAt)}</p>
            </div>
            <div className='relative flex justify-center'>
              <div className='bg-gray absolute top-0 bottom-0 w-[2px]' />

              <div className='bg-gray absolute top-1/2 z-10 box-border h-4 w-4 -translate-y-1/2 rounded-full border-2 border-white' />
            </div>

            <div className='flex flex-col justify-center gap-6'>
              <p className='text-2xl font-bold'>
                ver.{version.versionNumber}.0
              </p>
              <p className='text-xl font-medium'>
                {/* {version.tags?.length ? ` ${version.tags.join(' / ')}` : ''} */}
                {version.shortDescription}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
