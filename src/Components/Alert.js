
export default function Alert(props){
  

    return(
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
             <strong className="text-center">{props.alert.msg}</strong>
        </div>
      
    )
}