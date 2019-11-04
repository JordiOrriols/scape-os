import CalendarIcon from "./Calendar.png";
import ContactsIcon from "./Contacts.png";
import FaceTimeIcon from "./FaceTime.png";
import IMovieIcon from "./iMovie.png";
import MailIcon from "./Mail.png";
import MessagesIcon from "./Messages.png";
import NumbersIcon from "./Numbers.png";
import PadLockIcon from "./PadLock.png";
import PagesIcon from "./Pages.png";
import PhotosIcon from "./Photos.png";
import PreviewIcon from "./Preview.png";
import RemindersIcon from "./Reminders.png";
import SafariIcon from "./Safari.png";
import TextEditIcon from "./TextEdit.png";
import TimeMachineIcon from "./TimeMachine.png";

export interface App {
    id: string;
    name: string;
    src: string;
}

export const applications: App[] = [
    { id: 'calendar', name: 'Calendar', src: CalendarIcon },
    { id: 'contacts', name: 'Contacts', src: ContactsIcon },
    { id: 'facetime', name: 'FaceTime', src: FaceTimeIcon },
    { id: 'imovie', name: 'iMovie', src: IMovieIcon },
    { id: 'mail', name: 'Mail', src: MailIcon },
    { id: 'messages', name: 'Messages', src: MessagesIcon },
    { id: 'numbers', name: 'Numbers', src: NumbersIcon },
    { id: 'padlock', name: 'PadLock', src: PadLockIcon },
    { id: 'pages', name: 'Pages', src: PagesIcon },
    { id: 'photos', name: 'Photos', src: PhotosIcon },
    { id: 'preview', name: 'Preview', src: PreviewIcon },
    { id: 'reminders', name: 'Reminders', src: RemindersIcon },
    { id: 'safari', name: 'Safari', src: SafariIcon },
    { id: 'textedit', name: 'TextEdit', src: TextEditIcon },
    { id: 'timemachine', name: 'TimeMachine', src: TimeMachineIcon }
];