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
import Messages from "../../components/messages/messages";
import SettingsWindow from "../../components/settings/settings";

interface windowParams {
    id: string;
    title: string;
    onClose(): void;
}
export interface App {
    id: string;
    name: string;
    title: string;
    src: string;
    window(params: windowParams): React.Component | React.ReactElement;
}

const errorComp = (params: windowParams) => (
    <ErrorWindow onClose={params.onClose} title={params.title} text="Something was wrong. This program can not be oppened." />
);

const settingsComp = (params: windowParams) => (
    <SettingsWindow onClose={params.onClose} title={params.title} text="Something was wrong. This program can not be oppened." />
);

const applications: App[] = [
    { id: "facetime", name: "FaceTime", title: "FaceTime", src: FaceTimeIcon, window: errorComp },
    { id: "imovie", name: "iMovie", title: "iMovie", src: IMovieIcon, window: errorComp },
    { id: "photos", name: "Photos", title: "Photos", src: PhotosIcon, window: errorComp },
    { id: "reminders", name: "Reminders", title: "Reminders", src: RemindersIcon, window: errorComp },
    { id: "safari", name: "Safari", title: "Safari", src: SafariIcon, window: errorComp }
];

const messagesComp = (params: windowParams) => (
    <Messages onClose={params.onClose} title={params.title} />
);

const finderComp = (params: windowParams) => (
    <Finder onClose={params.onClose} title={params.title} />
);

export const appsWithContacts: App[] = [
    { id: "messages", name: "Messages", title: "Messages", src: MessagesIcon, window: messagesComp },
    { id: "contacts", name: "Contacts", title: "Contacts", src: ContactsIcon, window: errorComp },
    { id: "mail", name: "Mail", title: "Mail", src: MailIcon, window: errorComp },
    ...applications
];

export const appsWithSecurity: App[] = [
    { id: "padlock", name: "PadLock", title: "PadLock", src: PadLockIcon, window: settingsComp },
    { id: "calendar", name: "Calendar", title: "Calendar", src: CalendarIcon, window: errorComp },
    {
        id: "timemachine",
        name: "TimeMachine", title: "TimeMachine",
        src: TimeMachineIcon,
        window: errorComp
    },
    ...applications
];

export const appsWithFiles: App[] = [
    { id: "textedit", name: "TextEdit", title: "TextEdit - Open file",src: TextEditIcon, window: finderComp },
    { id: "preview", name: "Preview",title: "Preview - Open file", src: PreviewIcon, window: finderComp },
    { id: "pages", name: "Pages", title: "Pages - Open file",src: PagesIcon, window: finderComp },
    { id: "numbers", name: "Numbers", title: "Numbers - Open file",src: NumbersIcon, window: finderComp },
    ...applications
];