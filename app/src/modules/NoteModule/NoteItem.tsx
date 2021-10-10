import React, { useState } from 'react';
import CRUDButtonController from '../../components/CRUDButtonController';
import TextInput from '../../components/TextInput';

export interface NoteItemPros {

}

const NoteItem:React.FC = (props: NoteItemPros) => {
    const [isEditing, setIsEditing] = useState(false)
    const [itemValue, setItemValue] = useState("Item")
    const [newVal, setNewVal] = useState(itemValue)

    const onEdit = () => {
        console.log(isEditing)
        setIsEditing(true)
    }

    const onDelete = () => {
        console.log("Delete")
    }

    const onSave = () => {
        setIsEditing(false)
        setItemValue(newVal)
    }

    const onCancel = () => {
        setIsEditing(false)
        setNewVal(itemValue)
    }

    return (
        <div>
            <TextInput 
                initialValue={itemValue}
                isEditable={isEditing}
                newVal={newVal}
                setNew={setNewVal}
            />
            <CRUDButtonController
                onEdit={onEdit}
                onDelete={onDelete}
                onSave={onSave}
                onCancel={onCancel}
                isActive={isEditing}
            />
        </div>
    )
}

export default NoteItem;