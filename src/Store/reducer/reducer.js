

const initialStale={
    userss:[],
}

const reducer = (state=initialStale,action)=>{
    switch(action.type){
        case ("ADD__user") :
            return  {
                userss:[...state.userss,action.payload]
            }
            case ("DELETE__user") :

            const temp =state.userss.filter((item,index)=>{
                   return index !== action.payload;
            })
                return  {
                    userss:temp
                }

        default :
        {
            return state;
        }
            
        
    }
}

export default reducer;