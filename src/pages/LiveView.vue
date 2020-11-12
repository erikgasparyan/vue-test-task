<template>
    <div>
        <div class="d-flex justify-content-center mb-3" v-if="$store.state.loader">
            <b-spinner label="Loading..."></b-spinner>
        </div>
    <b-table-simple
            v-if="!$store.state.loader"
             class="dynamicsStyle mt-5 mb-2"
             :style="{ color: $store.state.activeColor, fontSize: $store.state.fontSizeText + 'px' }"
            responsive="true" hover outlined >
        <b-thead>
            <b-th :key="index" v-for="(filde,index) in fields">{{filde}}</b-th>
        </b-thead>
        <b-tbody v-for="(item,index) in $store.state.items" :key="index">
            <b-tr>
                <b-td>{{item.CreatorName}}</b-td>
                <b-td>{{item.Total}}</b-td>
                <b-td>
                    <b-img :src="item.ImagePath" width="90"></b-img>

                </b-td>
            </b-tr>
        </b-tbody>

    </b-table-simple>
    </div>
</template>
<script>
    export default {
        name:'LiveView',
        data() {
            return {
                fields: [' Name of the individual/team', 'Total raised', 'Image'],
                actionData:{
                    componentThis:this,
                }
            }
        },
        mounted() {
            if(!this.$store.state.companyId || !this.$store.state.sortType){
                        this.$router.push('/')
            }else{
                this.$store.dispatch('actionItems',this.actionData)
            }
        },

    }
</script>
<style>
    .dynamicsStyle .table {
        font-size: inherit;
        color: inherit;
    }
</style>