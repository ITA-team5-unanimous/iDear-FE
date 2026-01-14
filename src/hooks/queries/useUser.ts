import {useUserStore} from '@/hooks/stores/useUserStore';
import {getUsers, postProfileImage} from '@/services/api/user/userApi';
import {useMutation, useQuery} from '@tanstack/react-query';

export const USER_QUERY_KEY = ['user'];

export const useUser = () => {
  return useQuery({
    queryKey: USER_QUERY_KEY,
    queryFn: getUsers,
  });
};
export const useUploadProfileImage = () => {
  const setUserProfile = useUserStore((state) => state.setUserProfile);

  return useMutation({
    mutationFn: postProfileImage,

    onSuccess: (res) => {
      const {profileImageUrl} = res.data;

      setUserProfile({
        profileImageUrl,
        email: useUserStore.getState().email,
      });
    },
  });
};
