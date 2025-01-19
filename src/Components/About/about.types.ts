export type buttonProps={
    handleClick:(event: React.MouseEvent<HTMLButtonElement>)=>void
}

export type ContainerProps={
    style: React.CSSProperties
}

export type descriptionProps={
    children: string
}

export type InputProps={
    value:string,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>)=> void
}

export type oscarProps={
    children: React.ReactNode
}
