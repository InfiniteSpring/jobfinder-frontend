'use client';

import { IoMdNotificationsOutline } from "react-icons/io";

export default function NotificationHeaderComponent() {
  return (
    <div className="flex items-center space-x-[2vw]">
      <IoMdNotificationsOutline className="w-[3.2vh] h-[3.2vh]" 
      onClick={() => console.log('Notification')} />
    </div>
  );
}