export const user =(user)=>{
    return{
        type:'ADD__user',
        payload:user,
    }    
}
export const deleteuser =(id)=>{
    return{
        type:'DELETE__user',
        payload:id,
    }    
}