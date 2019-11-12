
import React from "react";
import "./finder-files.scss";

export interface FinderFile {
    name: string;
    size: number;
    kind: string;
}

interface Props {
    files: FinderFile[];
}

const FinderFiles: React.FC<Props> = props => {
    return (
        <div className="pane">
            <table className="table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Kind</th>
                        <th>File Size</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.files.map(file =>
                            <tr>
                                <td>{file.name}</td>
                                <td>{file.kind}</td>
                                <td>{file.size}kb</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default FinderFiles;


