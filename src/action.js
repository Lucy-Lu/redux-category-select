//action
export function changeCategory(value){
    console.log('********action value is ',value)
    return{
        type:'CHANGE_CATEGORY',
        value:value
    }
}