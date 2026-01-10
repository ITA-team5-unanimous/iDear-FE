'use client';

import GlobalButton from '@/components/buttons/GlobalButton';
import {useState} from 'react';
import {FileBoxType} from '@/schemas/support';
import {AttachmentList} from '@/app/idea/[id]/_components/AttachmentList';
import {Attachment, IdeaVersionDetail} from '@/schemas/idea';
import {useParams, useRouter} from 'next/navigation';
import {ROUTES} from '@/constants/routes';
import {ModalWrapper} from '@/components/common/wrappers/ModalWrapper';
import {EditCompleteModal} from '@/components/common/modal/EditCompleteModal';
import {FileUploadSection} from '@/components/common/file/FileUploadSection';
import {ImageUploadSection} from '@/components/common/file/ImageUploadSection';
import {UrlUploadSection} from '@/components/common/file/UrlUploadSection';

interface IdeaDetailMetaEditProps {
  version: IdeaVersionDetail;
}

export const IdeaDetailMetaEdit = ({version}: IdeaDetailMetaEditProps) => {
  const router = useRouter();
  const params = useParams();

  const [title, setTitle] = useState<string>(version.shortDescription);
  const [description, setDescription] = useState<string>(version.description);
  const [isEditCompleteModalOpen, setIsEditCompleteModalOpen] =
    useState<boolean>(false);
  const [images, setImages] = useState<FileBoxType[]>([]);
  const [file, setFile] = useState<File | null>(null);
  const [isFileDeleted, setIsFileDeleted] = useState<boolean>(false);
  const [githubUrl, setGithubUrl] = useState<string | undefined>(
    version.githubUrl ?? undefined
  );
  const [figmaUrl, setFigmaUrl] = useState<string | undefined>(
    version.figmaUrl ?? undefined
  );

  const [imageAttachments, setImageAttachments] = useState<Attachment[]>(
    version.images.map((img) => ({
      name: img.fileName,
      url: img.filePath,
    }))
  );

  const fileAttachments = version.files.map((file) => ({
    name: file.fileName,
    url: file.filePath,
    status: file.status,
  }));

  const isFileChanged = file !== null || isFileDeleted;

  const handleSave = () => {
    if (
      !title.trim() ||
      !description.trim() ||
      !(file || (version.files.length > 0 && !isFileDeleted))
    ) {
      alert('아이디어 제목, 아이디어 설명, 파일이 필수로 있어야 저장됩니다.');
      return;
    }

    setIsEditCompleteModalOpen(true);
  };

  const handleCorfirmSave = () => {
    setIsEditCompleteModalOpen(false);
    router.push(`${ROUTES.IDEA}/${params.id}`);
  };

  const handleDeleteImage = (index: number) => {
    setImageAttachments((prev) => prev.filter((_, i) => i !== index));
  };

  const handleDeleteFile = () => {
    setIsFileDeleted(true);
    setFile(null);
  };

  const handleDeleteLink = (type: 'github' | 'figma') => {
    if (type === 'github') setGithubUrl(undefined);
    if (type === 'figma') setFigmaUrl(undefined);
  };

  return (
    <section className='border-gray flex w-full flex-col gap-12 rounded-[8px] border p-6'>
      <div className='flex flex-col gap-6'>
        <div className='flex flex-row items-center justify-between'>
          <strong className='flex text-2xl font-bold'>
            <span>ver.{version.versionNumber} :</span>
            <input
              className='ml-3 w-[646px]'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </strong>
        </div>
        <p>
          등록 날짜 : {version.requestedAt.split('T')[0].replace(/-/g, '.')}
        </p>
      </div>

      <div className='flex flex-col gap-6'>
        <strong className='text-2xl font-bold'>아이디어 설명</strong>
        <textarea
          className='min-h-[200px] w-full'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className='flex flex-col gap-6'>
        <strong className='text-2xl font-bold'>이미지</strong>
        {imageAttachments.length > 0 ? (
          <AttachmentList
            attachments={imageAttachments}
            isEditable
            onDelete={handleDeleteImage}
          />
        ) : (
          <ImageUploadSection images={images} setImages={setImages} />
        )}
      </div>

      <div className='flex flex-col gap-6'>
        <strong className='text-2xl font-bold'>파일</strong>
        {!isFileDeleted ? (
          <AttachmentList
            attachments={fileAttachments}
            isEditable
            onDelete={handleDeleteFile}
          />
        ) : (
          <FileUploadSection file={file} setFile={setFile} />
        )}
        <span className='text-primary text-base'>
          ※ 문서 파일 변경시에만 새로운 버전이 생성됩니다.
        </span>

        {githubUrl ? (
          <AttachmentList
            attachments={[{name: githubUrl, url: githubUrl}]}
            isEditable
            onDelete={() => handleDeleteLink('github')}
          />
        ) : (
          <UrlUploadSection
            type='github'
            url={githubUrl}
            setUrl={setGithubUrl}
          />
        )}

        {figmaUrl ? (
          <AttachmentList
            attachments={[{name: figmaUrl, url: figmaUrl}]}
            isEditable
            onDelete={() => handleDeleteLink('figma')}
          />
        ) : (
          <UrlUploadSection type='figma' url={figmaUrl} setUrl={setFigmaUrl} />
        )}
      </div>
      <div className='flex w-full justify-center'>
        <GlobalButton text='저장하기' onClick={handleSave} />
      </div>

      {isEditCompleteModalOpen && (
        <ModalWrapper
          isOpen={isEditCompleteModalOpen}
          onClose={() => setIsEditCompleteModalOpen(false)}>
          <EditCompleteModal
            onClose={handleCorfirmSave}
            isFileChanged={isFileChanged}
          />
        </ModalWrapper>
      )}
    </section>
  );
};
