import React from 'react';
import NoteItem from './NoteItem';

export interface NoteModulePros {

}

const NoteModule:React.FC = (props: NoteModulePros) => {

    return (
        <div>
            <NoteItem />
            <NoteItem />
            <NoteItem />
        </div>
    )
}

export default NoteModule;