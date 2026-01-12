import {create} from 'zustand';

interface UserStore {
  profileImageUrl: string | null;
  email: string | null;

  setUserProfile: (payload: {
    profileImageUrl: string | null;
    email: string | null;
  }) => void;

  clearUserProfile: () => void;
}

export const useUserStore = create<UserStore>((set) => ({
  profileImageUrl: null,
  email: null,

  setUserProfile: ({profileImageUrl, email}) =>
    set({
      profileImageUrl,
      email,
    }),

  clearUserProfile: () =>
    set({
      profileImageUrl: null,
      email: null,
    }),
}));
