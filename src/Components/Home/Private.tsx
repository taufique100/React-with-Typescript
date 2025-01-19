import React from 'react'
import About from '../About/About'
import { ProfileProps } from './Profile'

type PrivateProps={
    isLoggedIn: boolean,
    component: React.ComponentType<ProfileProps>
}

export default function Private({isLoggedIn, component:Component}: PrivateProps) {

    if(isLoggedIn){
        return  <Component name='Taufique Ali'/>
    }
  return (<About/>)
}
