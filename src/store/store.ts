import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User } from '../interfaces/user.interface';

type AuthStore = {
  logged: boolean;
  user: User | null;
  changeLogged: () => void;
  setUser: (newUser: User) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      logged: false,
      user: null,
      changeLogged: () => {
        set((state) => ({
          logged: !state.logged,
        }));
      },
      setUser: (newUser: User) => {
        set(() => ({
          user: newUser,
          logged: true,
        }));
      },
      logout: () => {
        set(() => ({
          user: null,
          logged: false,
        }));
      },
    }),
    {
      name: 'auth-storage',
    }
  )
);
