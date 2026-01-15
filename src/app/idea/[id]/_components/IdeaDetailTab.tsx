'use client';

import {IdeaCategoryButton} from '@/app/idea/[id]/_components/IdeaCategoryButton';
import GlobalButton from '@/components/buttons/GlobalButton';
import {ROUTES} from '@/constants/routes';
import {useParams, useRouter, useSearchParams} from 'next/navigation';
import {GlobalAlertModal} from '@/components/common/modal/GlobalAlertModal';
import {useState} from 'react';
import {ModalWrapper} from '@/components/common/wrappers/ModalWrapper';
import Download from '@/assets/idea/download.svg';
import {useDeleteIdea, useIdeaCertificate} from '@/hooks/queries/useIdea';
import {CertificatePdf} from '@/components/certificate/CertificatePdf';

type IdeaDetailTab = 'version' | 'timeline';

interface IdeaDetailTabProps {
  isLatestVersionRegistered: boolean;
}

export const IdeaDetailTab = ({
  isLatestVersionRegistered,
}: IdeaDetailTabProps) => {
  const {id} = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();
  const tabParam = searchParams.get('tab');

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  const [showCertificate, setShowCertificate] = useState<boolean>(false);
  const [isDownloading, setIsDownloading] = useState<boolean>(false);

  const ideaId = Number(id);
  const {mutate: deleteIdea, isPending} = useDeleteIdea();
  const {
    data: certificateResponse,
    refetch: fetchCertificate,
    isFetching,
  } = useIdeaCertificate(ideaId);

  const currentTab: IdeaDetailTab =
    tabParam === 'timeline' ? 'timeline' : 'version';

  const handleChangeTab = (tab: IdeaDetailTab) => {
    if (tab === 'version') {
      router.push(`${ROUTES.IDEA}/${id}`);
    } else {
      router.push(`${ROUTES.IDEA}/${id}?tab=timeline`);
    }
  };

  const handleDownloadCertificate = async () => {
    setIsDownloading(true);

    const result = await fetchCertificate();

    if (!result.data) {
      alert('증명서를 불러올 수 없습니다.');
      setIsDownloading(false);
      return;
    }

    setShowCertificate(true);
  };

  const handleDelete = () => {
    setIsDeleteModalOpen(true);
  };

  const handleConfirmDelete = () => {
    deleteIdea(ideaId, {
      onSuccess: () => {
        setIsDeleteModalOpen(false);
        router.push(ROUTES.IDEA);
      },
      onError: () => {
        alert('삭제 중 오류가 발생했습니다.');
      },
    });
  };

  return (
    <div className='flex justify-between'>
      <div className='flex flex-row gap-6'>
        <IdeaCategoryButton
          text='버전 히스토리'
          isSelected={currentTab === 'version'}
          onClick={() => handleChangeTab('version')}
        />
        <IdeaCategoryButton
          text='타임라인'
          isSelected={currentTab === 'timeline'}
          onClick={() => handleChangeTab('timeline')}
        />
      </div>
      <div className='flex flex-row gap-6'>
        <GlobalButton
          onClick={handleDelete}
          text='삭제하기'
          variant='gray'
          disabled={isPending}
        />
        <GlobalButton
          onClick={handleDownloadCertificate}
          text='확인증 다운받기'
          icon={<Download />}
          disabled={!isLatestVersionRegistered}
        />
      </div>
      {showCertificate && certificateResponse && (
        <CertificatePdf
          data={certificateResponse.data}
          onDownloaded={() => {
            setShowCertificate(false);
            setIsDownloading(false);
          }}
        />
      )}
      {isDeleteModalOpen && (
        <ModalWrapper
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}>
          <GlobalAlertModal
            withdrawText='계속 작성하기'
            strongText='정말 삭제하시겠습니까?'
            content='한 번 삭제하면 다시 되돌릴 수 없어요.'
            onClose={handleConfirmDelete}
            onContinue={() => setIsDeleteModalOpen(false)}
          />
        </ModalWrapper>
      )}
    </div>
  );
};
