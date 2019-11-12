import React from "react";

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
import ErrorWindow from "../../components/window-error/window-error";
import Finder from "../../components/finder/finder";

interface windowParams {
    id: string;
    title: string;
    onClose(): void;
}
export interface App {
    id: string;
    name: string;
    src: string;
    window(params: windowParams): React.Component | React.ReactElement;
}

const errorComp = (params: windowParams) => (
    <ErrorWindow onClose={params.onClose} title={params.title} text="Something was wrong. This program can not be oppened." />
);

const finderComp = (params: windowParams) => (
    <Finder onClose={params.onClose} title={params.title} />
);

export const applications: App[] = [
    { id: "calendar", name: "Calendar", src: CalendarIcon, window: errorComp },
    { id: "contacts", name: "Contacts", src: ContactsIcon, window: errorComp },
    { id: "facetime", name: "FaceTime", src: FaceTimeIcon, window: errorComp },
    { id: "imovie", name: "iMovie", src: IMovieIcon, window: errorComp },
    { id: "mail", name: "Mail", src: MailIcon, window: errorComp },
    { id: "messages", name: "Messages", src: MessagesIcon, window: errorComp },
    { id: "numbers", name: "Numbers", src: NumbersIcon, window: errorComp },
    { id: "padlock", name: "PadLock", src: PadLockIcon, window: finderComp },
    { id: "pages", name: "Pages", src: PagesIcon, window: errorComp },
    { id: "photos", name: "Photos", src: PhotosIcon, window: errorComp },
    { id: "preview", name: "Preview", src: PreviewIcon, window: errorComp },
    { id: "reminders", name: "Reminders", src: RemindersIcon, window: errorComp },
    { id: "safari", name: "Safari", src: SafariIcon, window: errorComp },
    { id: "textedit", name: "TextEdit", src: TextEditIcon, window: errorComp },
    {
        id: "timemachine",
        name: "TimeMachine",
        src: TimeMachineIcon,
        window: errorComp
    }
];
