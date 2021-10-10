import React, { ChangeEvent } from 'react'

export interface TextInputProps {
    initialValue: string
    isEditable: boolean
    newVal: string
    setNew: (val: string) => void
}

const TextInput:React.FC<TextInputProps> = (props) => {
    const onChange = (event:ChangeEvent<HTMLInputElement>) => { 
        props.setNew(event.target.value)
    }

    return props.isEditable ?
    (<input type="text" value={props.newVal} onChange={onChange} />) :
    (<div>{props.initialValue}</div>)
}

export default TextInput