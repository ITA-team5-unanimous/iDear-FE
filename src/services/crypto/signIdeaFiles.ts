import {postIdeaSignatures} from '@/services/api/idea/ideaApi';
import {signMessage} from '@/services/crypto/sign';
import {loadPrivateKey} from '@/utils/indexedDb';
import {IdeaFile} from '@/schemas/idea';

export const signIdeaFiles = async (ideaId: number, files: IdeaFile[]) => {
  const privateKey = await loadPrivateKey();

  if (!privateKey) {
    throw new Error('전자서명을 위한 개인키를 찾을 수 없습니다.');
  }

  const signatures = await Promise.all(
    files.map(async (file) => {
      const message = `${file.fileHash}|${file.timestamp}`;

      const userSignature = await signMessage(privateKey, message);

      return {
        ideaFileId: file.ideaFileId,
        userSignature,
      };
    })
  );

  return postIdeaSignatures(ideaId, signatures);
};
