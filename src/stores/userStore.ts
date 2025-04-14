import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface User {
    id: string,
    name: string,
    email: string,
    phone: string,
    gender: string,
    dob: string,
    emergency_contact: string,
}

interface UserStore {
  user: User | null;
  setUser: (user:User | null) => void;
  accessToken: string | null;
  setAccessToken: (accessToken: string | null) => void;
  reset: () => void;
}

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      accessToken: null,
      setAccessToken: (accessToken) => set({ accessToken }),
      reset: () =>
        set({
          user: null,
          accessToken: null,
        }),
    }),
    {
      name: 'user',
      storage: createJSONStorage(() => localStorage),
    }
  )
);