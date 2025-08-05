declare module '*.module.styl' {
  const classes: { readonly [key: string]: string }
  export default classes
}

declare module '*.styl' {
  const content: { [className: string]: string }
  export default content
}
