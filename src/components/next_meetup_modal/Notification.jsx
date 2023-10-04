import CloseNotification from "@/components/next_meetup_modal/CloseNotification";
import DataRedered from "@/components/next_meetup_modal/DataRendered";

export default function Notification() {
  return (
    <>
      <CloseNotification>
        <DataRedered />
      </CloseNotification>
    </>
  );
}
