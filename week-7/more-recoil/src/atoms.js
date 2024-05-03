import { atom, selector } from "recoil";

export const networkAtom = atom({
  key: "networkAtom",
  default: 104,
});

export const messagingAtom = atom({
  key: "messagingAtom",
  default: 0,
});

export const jobsAtom = atom({
  key: "jobsAtom",
  default: 0,
});

export const notificationsAtom = atom({
  key: "notificationsAtom",
  default: 12,
});

export const totalNotificationSelector = selector({
  key: "totalNotificationSelector",
  get: ({ get }) => {
    const networkAtomCount = get(networkAtom);
    const jobAtomCount = get(jobsAtom);
    const messagingAtomCount = get(messagingAtom);
    const notificationAtomCount = get(notificationsAtom);
    return networkAtomCount + jobAtomCount + messagingAtomCount + notificationAtomCount;
  }
});
