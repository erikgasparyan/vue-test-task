<template>
    <div>
        <navBar/>
        <b-container class="bv-example-row">
            <b-row>
                <b-col>
                    <router-view/>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>
<script>
    import navBar from './navBar';

    export default {
        components: {
            navBar,
        }

    }
</script>