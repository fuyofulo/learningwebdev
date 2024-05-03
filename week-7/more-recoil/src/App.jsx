import { RecoilRoot, useRecoilValue } from "recoil";
import { jobsAtom, messagingAtom, networkAtom, notificationsAtom, totalNotificationSelector } from "./atoms";

function App () {

  return <RecoilRoot>
    <MainApp />
  </RecoilRoot>
}

function MainApp() {
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobNotificationCount = useRecoilValue(jobsAtom);
  const messageNotificationCount = useRecoilValue(messagingAtom);
  const notificationsNotificationCount = useRecoilValue(notificationsAtom);
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  return <div>
    <button>Home</button>

    <button>My network ({networkNotificationCount > 100 ? "99+" : networkNotificationCount})</button>
    <button>Jobs {jobNotificationCount == 0 ? null: jobNotificationCount}</button>
    <button>Messaging {messageNotificationCount == 0 ? null: messageNotificationCount}</button>
    <button>Notifications ({notificationsNotificationCount == 0 ? null : notificationsNotificationCount})</button>

    <button>Me({totalNotificationCount})</button>
  </div>
}

export default App;

