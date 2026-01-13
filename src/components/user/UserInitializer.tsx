'use client';

import {useUser} from '@/hooks/queries/useUser';
import {useUserStore} from '@/hooks/stores/useUserStore';
import {useEffect} from 'react';

export const UserInitializer = () => {
  const {data} = useUser();
  const setUserProfile = useUserStore((state) => state.setUserProfile);

  useEffect(() => {
    if (!data) return;

    setUserProfile({
      profileImageUrl: data.data.profileImageUrl,
      email: data.data.email,
    });
  }, [data, setUserProfile]);

  return null;
};
