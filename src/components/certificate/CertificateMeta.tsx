import {CertificateMetaRow} from '@/components/certificate/CertificateMetaRow';
import {CertificateMetaRowWithNote} from '@/components/certificate/CertificateMetaRowWithNote';
import {IdeaCertificateType} from '@/schemas/idea';

interface CertificateMetaProps {
  data: IdeaCertificateType;
}

export const CertificateMeta = ({data}: CertificateMetaProps) => {
  return (
    <section className='flex flex-col gap-1'>
      <CertificateMetaRow
        label='제출자 :'
        subLabel='Submission'
        value={data.submitter}
      />

      <CertificateMetaRow
        label='아이디어 명 :'
        subLabel='Idea Title'
        value={data.ideaTitle}
      />

      <CertificateMetaRow
        label='제출 일시 :'
        subLabel='Submission Time'
        value={data.submissionDate}
      />

      <CertificateMetaRowWithNote
        label='문서 식별 해시 :'
        subLabel='Hash'
        value={data.documentHash}
        note='해시는 원본 파일 전체를 기반으로 생성되며, 단 한 글자라도 변경될 경우 값이 완전히 달라집니다.'
      />

      <CertificateMetaRow
        label='네트워크 :'
        subLabel='Network'
        value={data.network}
      />

      <CertificateMetaRow
        label='커밋 :'
        subLabel='Commit'
        value={data.commit}
      />

      <CertificateMetaRow
        label='스마트 컨트랙트 주소 :'
        subLabel='Contract Address'
        value={data.contractAddress}
      />

      <CertificateMetaRow
        label='트랜잭션 해시 :'
        subLabel='Transaction Hash'
        value={data.txHash}
      />

      <CertificateMetaRow
        label='블록 번호 :'
        subLabel='Block Number'
        value={data.blockNumber}
      />

      <CertificateMetaRowWithNote
        label='온체인 기록 시각 :'
        subLabel='On-Chain Timestamp'
        value={data.onChainTimestamp}
        note='온체인 기록은 삭제·수정이 불가능한 영구 데이터입니다.'
      />
    </section>
  );
};
