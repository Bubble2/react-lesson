

export const handleInputChanges = (data) =>{
    return {type: 'HANDLE_CHANGE',data}
}
export const handleAdds = (data) =>{
    return {type: 'HANDLE_ADD',data}
}
export const handleChecks = (data) =>{
   return {type: 'HANDLE_CHECK',data}
}
export const handleDeletes = (data) =>{
   return {type: 'HANDLE_DELETE',data} 
}
