import React, { useState } from 'react'

type EventHandler = () => void

export interface CRUDButtonControllerProps {
    onDetails?:EventHandler
    onEdit?:EventHandler
    onDelete?:EventHandler
    onSave?:EventHandler
    onCancel?:EventHandler
    isActive:boolean
    disabled?:boolean
}

const hasValue = (item:any):boolean => item === undefined ? false : true;

const callIfExists = (func:EventHandler | undefined) => func !== undefined ? func() : null

const CRUDButtonController:React.FC<CRUDButtonControllerProps> = (props) => {
    const [isActive, setIsActive] = useState(false);
    const [disabled] = useState(hasValue(props.disabled))

    const [details] = useState(hasValue(props.onDetails))
    const [edit] = useState(hasValue(props.onEdit))
    const [del] = useState(hasValue(props.onDelete))

    const onActivation = (func:EventHandler | undefined) => {
        setIsActive(true)
        callIfExists(func)
    }

    const onDeactivation = (func:EventHandler | undefined) => {
        setIsActive(false)
        callIfExists(func)
    }

    const onDetails = () => onActivation(props.onDetails)
    const onEdit = () => onActivation(props.onEdit)
    const onDelete = () => callIfExists(props.onDelete)

    const onCancel = () => onDeactivation(props.onCancel)

    const onSave = () => onDeactivation(props.onSave)

    return disabled ? null : (
        <div>
            {isActive || !details ? null : (<button onClick={onDetails}>Details</button>)}
            {isActive || !edit ? null : (<button onClick={onEdit}>Edit</button>)}
            {isActive || !del ? null : (<button onClick={onDelete}>Delete</button>)}
            {!isActive ? null : 
            (<>
                <button onClick={onSave}>Save</button>
                <button onClick={onCancel}>Cancel</button>
            </>)}
        </div>
    )
}

export default CRUDButtonController;