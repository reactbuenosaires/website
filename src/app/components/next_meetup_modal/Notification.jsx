import style from "@/app/components/next_meetup_modal/notification.module.css";
import CloseNotification from "@/app/components/next_meetup_modal/CloseNotification";
import NextMeetUp from './RenderNotificacion'

export default function Notification() {
  return (
    <section>
      <CloseNotification>
        <NextMeetUp />
      </CloseNotification>
    </section>
  );
}
