import speaker from "@/app/assets/images/speaker.jpg";
import stage from "@/app/assets/images/conferenceRoom.jpg";
import people from "@/app/assets/images/people.jpg";
import code from "@/app/assets/images/code.jpg";
import speaker_about from "@/app/assets/images/about_images/meetup_speaker.jpeg"
import stage_about from "@/app/assets/images/about_images/meetup_place.jpeg"
import people_about from "@/app/assets/images/about_images/meetup_people.jpeg"
import content_about from "@/app/assets/images/about_images/meetup_content.jpeg"

export const aboutUsImages = [
  { description: "Speaker", img: speaker_about },
  { description: "Conference stage", img: stage_about },
  { description: "People in Meetup", img: people_about },
  { description: "Code Screen", img: content_about },
];

export const statsImages = [
  { description: "People in Meetup", src: people, text: "+7700 Miembros" },
  { description: "Conference stage", src: stage, text: "+80 Eventos" },
  { description: "Code Screen", src: code, text: "+7 años" },
  { description: "Speaker", src: speaker, text: "Eventos mensuales" },
];
