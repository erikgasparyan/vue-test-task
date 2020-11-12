<template>
    <div>

        <b-row class="mt-5 mb-2">
            <b-col>
                <b-form-group
                        class="mr-2"
                        id="input-group-1"
                        label="Company id:"
                        label-for="companyId"
                        description="Search in company id."
                >
                    <b-form-input
                            id="companyId"
                            v-model="$store.state.companyId"
                            type="number"
                            @input="(companyId)=>($store.commit('COMPANY_ID',companyId))"
                            required
                            placeholder="Company ID"
                    ></b-form-input>
                </b-form-group>
            </b-col>
            <b-form-group
                    class="mr-2"
                    id="input-group-1"
                    label="Font Size Text:"
                    label-for="fontSizeText"
                    description="Font Size Text."
            >
                <b-form-input
                        id="fontSizeText"
                        v-model="$store.state.fontSizeText"
                        type="number"
                        @input="(size)=>($store.commit('FONT_SIZE',size))"
                        required
                        placeholder="Font size"
                ></b-form-input>
            </b-form-group>
            <b-form-group
                    id="input-group-1"
                    label="Font color:"
                    label-for="activeColor"
                    description="Font Color."
            >
                <b-form-input
                        id="activeColor"
                        v-model="$store.state.activeColor"
                        @input=" (color)=>($store.commit('TEXT_COLOR',color))"

                        type="color"
                        required
                        placeholder="Font color"
                >
                </b-form-input>
            </b-form-group>

        </b-row>
        <b-row>
            <b-col>
                <b-form-group
                        label="Limit:"
                        label-for="limit"
                        description=" Number of fundraisers to show on the leaderboard."
                >
                    <b-form-input
                            id="activeColor"
                            v-model="$store.state.limit"
                            type="number"
                            @input="(limit)=>($store.commit('LIMIT',limit))"
                            required
                            placeholder=" Number of fundraisers to show on the leaderboard"
                    ></b-form-input>
                </b-form-group>
            </b-col>
            <b-col>
                <b-form-group
                        label="Sort Type:"
                        label-for="sortType"
                        description="Select between team leaderboard and individual leaderboard"
                >
                    <b-form-select
                            v-model="$store.state.sortType"
                            :options="options"
                            @change="selectedHandler"
                    ></b-form-select>
                </b-form-group>
            </b-col>

        </b-row>
    </div>

</template>
<script>
    export default {
        name: 'ConfigTab',
        data() {
            return {
                selected: null,
                options: [
                    {value: null, text: 'Please select an type'},
                    {value: 'S', text: 'Individual fundraising'},
                    {value: 'T', text: 'Team'},
                ]
            }
        },
        methods: {
            selectedHandler: function (sortType) {
                this.$store.commit('SORT_TYPE', sortType)
            }
        }
    }
</script>