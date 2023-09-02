import { create } from "zustand";
import { persist } from "zustand/middleware";
import { axiosMusic } from "../utils/configAxios";

const INITIAL_INFO = {
  title: "",
  message: "",
  to: "",
};

export const usePlaylistCart = create(
  persist(
    (set, get) => ({
      info: INITIAL_INFO,
      tracks: [],
      isLoading: false,
      addTrack: (newTrack) => {
        const { tracks } = get();
        const isTrackAlreadyAdded = tracks.some(
          (track) => track.id === newTrack.id
        );
        if (isTrackAlreadyAdded) return;
        const newTracks = [...tracks, newTrack];
        set({ tracks: newTracks });
      },
      deleteTrack: (idToEdit) => {
        const { tracks } = get();
        const newTracks = tracks.filter((track) => track.id !== idToEdit);
        set({ tracks: newTracks });
      },
      resetStart: () => {
        set({ info: INITIAL_INFO, tracks: [], isLoading: false });
      },
      createPlaylist: async () => {
        try {
          const { info, tracks, resetStart } = get();
          const data = {
            ...info,
            tracks,
          };
          set({ isLoading: true });
          await axiosMusic.post("/api/playlists", data);
          resetStart();
        } catch (e) {
          console.log(e);
        } finally {
          set({ isLoading: false });
        }
      },
      setInfo: (newInfo) => {
        set({ info: newInfo });
      },
    }),
    {
      name: "playlistCart",
    }
  )
);
