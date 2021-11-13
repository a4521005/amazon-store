export const initialState ={
    basket:[],
    loggedinuser:null
}

const reducer = (state,action)=>{
    // console.log(action)=>測試add to basket是否正常
    switch(action.type){
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket:[...state.basket, action.item]
            }
        case 'SET_LOGIN':
            return{
                ...state,
                loggedinuser:action.user
            }
        case 'REMOVE_FROM_CART':
            let newcart =[...state.basket]
            const index = state.basket.findIndex((basketItem)=>basketItem.id===action.id)
            if(index >=0){
                newcart.splice(index,1)
            }else{
            console.log('There were errors while removing from shopping basket.')
            }
            return{...state,basket:newcart}
    }
}

export default reducer;