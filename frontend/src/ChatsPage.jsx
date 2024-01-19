import {MultiChatSocket,MultiChatWindow,useMultiChatLogic} from "react-chat-engine-advanced"

const ChatsPage=(props)=>{
    const chatProps=useMultiChatLogic('b086f575-086e-4664-bcfe-3325426a6724',props.user.username,props.user.secret);
    return(
        <div style={{height:'100vh'}}>
            <MultiChatSocket {...chatProps}/>
            <MultiChatWindow {...chatProps} style={{height:'100%'}}/>
        </div>
    )
}
export default ChatsPage;