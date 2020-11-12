const mutations={
    COMPANY_ID(state,companyId){
        state.companyId=companyId
    },
    FONT_SIZE(state,size){
        state.fontSizeText=size
    },
    TEXT_COLOR(state,color){
        state.activeColor=color
    },
    LIMIT(state,limit){
        state.limit=limit
    },
    SORT_TYPE(state,sortType){
        state.sortType=sortType
    },
    ITEMS(state,items){
        state.items=items
    },
    LOADER(state,load){
        state.loader=load
    }
}
export default mutations;
