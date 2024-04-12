"use client";
import HomeCard from "./HomeCard";

const MeetingTypeList = () => {
  const list = [
    {
      img: "/icons/add-meeting.svg",
      title: "New Meeting",
      desc: "Start an instant meeting",
      className: "bg-orange-1",
      onClick: () => {},
    },
    {
      img: "/icons/schedule.svg",
      title: "Schedule Meeting",
      desc: "Plan your meeting",
      className: "bg-blue-1",
      onClick: () => {},
    },
    {
      img: "/icons/recordings.svg",
      title: "View recordings",
      desc: "check your recordings",
      className: "bg-purple-1",
      onClick: () => {},
    },
    {
      img: "/icons/join-meeting.svg",
      title: "Join Meeting",
      desc: "via invitation link",
      className: "bg-yellow-1",
      onClick: () => {},
    },
  ];
  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      <HomeCard />
    </section>
  );
};

export default MeetingTypeList;
