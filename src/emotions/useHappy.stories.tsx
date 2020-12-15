import React from 'react'
import { useHappy } from "./useHappy";

export default {
    title: 'useHappy',
    component: useHappy
}

export const Basic = () => {
    const happyFace = useHappy()
    return <div>
        {happyFace}
    </div>
}