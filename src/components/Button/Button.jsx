export const Button = ({children, type="button", ...otherProps}) =>{
    return (
            <button type={type} {...otherProps}>
              {children}
            </button>
        
    )
}