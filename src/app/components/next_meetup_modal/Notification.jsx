import CloseNotification from "@/app/components/next_meetup_modal/CloseNotification";
import DataRedered from "@/app/components/next_meetup_modal/DataRendered";

export default function Notification() {
  return (
    <section>
      <CloseNotification>
        <DataRedered />
      </CloseNotification>
    </section>
  );
}
