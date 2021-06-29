import {NotificationText} from'./Notification.styles';

const Notification = ({message}) =>{
    return(
        <>
        <NotificationText>{message}</NotificationText>
        </>
    )
}

export default Notification;