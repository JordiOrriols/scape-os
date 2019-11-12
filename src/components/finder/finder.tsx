
import React from "react";
import FinderNav from "../finder-nav/finder-nav";
import FinderFiles, { FinderFile } from "../finder-files/finder-files";
import AppWindow from "../window/window";
import "./finder.scss";


const getSize = () => Math.floor(Math.random() * 1000)

const files: FinderFile[] = [
    { name: 'encryped-file-plan-2025.pdf', kind: 'PDF', size: getSize() },
    { name: 'encryped-file-plan-2024.pdf', kind: 'PDF', size: getSize() },
    { name: 'foto-paciente-08.jpeg', kind: 'JPEG', size: getSize() },
    { name: 'foto-paciente-05.jpeg', kind: 'JPEG', size: getSize() },
    { name: 'foto-paciente-04.jpeg', kind: 'JPEG', size: getSize() },
    { name: 'foto-paciente-02.jpeg', kind: 'JPEG', size: getSize() },
    { name: 'foto-paciente-01.jpeg', kind: 'JPEG', size: getSize() }
];

interface Props {
    title: string;
    onClose(): void;
}

const Finder: React.FC<Props> = props => {
    return <AppWindow height="400px" width="650px" padding="none" title={props.title} onClose={props.onClose}>
        <FinderNav></FinderNav>
        <FinderFiles files={files}></FinderFiles>
    </AppWindow>;
};

export default Finder;

