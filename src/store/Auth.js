import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const createSelectors = (_store) => {
  let store = _store;
  store.use = {};

  for (let k of Object.keys(store.getState())) {
    store.use[k] = () => store((s) => s[k]);
  }

  return store;
};

const store = create(
  persist(
    (set, get) => ({
      token: "",
      expiresIn: 0,
      updateAuth: ({ token, expiresIn }) =>
        set((state) => ({
          token: token ? token : state.token,
          expiresIn: expiresIn ? expiresIn : state.expiresIn,
        })),
    }),
    {
      name: "raven-auth",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        token: state.token,
        expiresIn: state.expiresIn,
      }),
    },
  ),
);

const useAuthStore = createSelectors(store);

export default useAuthStore;
