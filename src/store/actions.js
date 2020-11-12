const actions = {
    actionItems({commit,state},{componentThis}){
        commit('LOADER',true)
        let url = 'https://api.gofundraise.com.au/v1/pages/search?eventcampaignid='+state.companyId+'&pagetype='+state.sortType+'&sortorder=desc&sortby=4&pagesize='+state.limit
        componentThis.$http.get(url).then((response) => {
            commit('ITEMS', response.data.Pages);
            commit('LOADER',false)

            console.log(response.data.Pages)
        })
    }
}
export default actions;