import {
  IdeaRegisterResponse,
  IdeaRegisterResponseSchema,
  IdeaSignatureResponse,
  IdeaSignatureResponseSchema,
  IdeaListResponse,
  IdeaListResponseSchema,
  IdeaDetailResponse,
  IdeaDetailResponseSchema,
  IdeaTagCreateResponse,
  IdeaTagCreateResponseSchema,
  IdeaUpdateResponse,
  IdeaUpdateResponseSchema,
} from '@/schemas/idea';
import {axiosInstance} from '@/services/config/axios';
import {API_ENDPOINTS} from '@/services/constant/endpoint';

export const postIdeaRegister = async (
  formData: FormData
): Promise<IdeaRegisterResponse> => {
  const {data} = await axiosInstance.post(API_ENDPOINTS.idea.ideas, formData, {
    headers: {
      'Content-Type': undefined,
    },
  });

  return IdeaRegisterResponseSchema.parse(data);
};

export const postIdeaSignatures = async (
  ideaId: number,
  signatures: {
    ideaFileId: number;
    userSignature: string;
  }[]
): Promise<IdeaSignatureResponse> => {
  const {data} = await axiosInstance.post(
    API_ENDPOINTS.idea.signatures(ideaId),
    {signatures}
  );

  return IdeaSignatureResponseSchema.parse(data);
};

export const getIdeas = async (page: number): Promise<IdeaListResponse> => {
  const {data} = await axiosInstance.get(API_ENDPOINTS.idea.ideas, {
    params: {
      page,
      size: 8,
    },
  });
  return IdeaListResponseSchema.parse(data);
};

export const getIdeaDetail = async (
  ideaId: number
): Promise<IdeaDetailResponse> => {
  const {data} = await axiosInstance.get(API_ENDPOINTS.idea.detail(ideaId));

  return IdeaDetailResponseSchema.parse(data);
};

export const postIdeaVersionTag = async (
  versionId: number,
  tag: string
): Promise<IdeaTagCreateResponse> => {
  const {data} = await axiosInstance.post(API_ENDPOINTS.idea.tags(versionId), {
    tag,
  });

  return IdeaTagCreateResponseSchema.parse(data);
};

export const patchIdea = async (
  ideaId: number,
  formData: FormData
): Promise<IdeaUpdateResponse> => {
  const {data} = await axiosInstance.patch(
    API_ENDPOINTS.idea.detail(ideaId),
    formData,
    {
      headers: {
        'Content-Type': undefined,
      },
    }
  );

  return IdeaUpdateResponseSchema.parse(data);
};

export const deleteIdea = async (ideaId: number) => {
  const {data} = await axiosInstance.delete(API_ENDPOINTS.idea.detail(ideaId));

  return data;
};
