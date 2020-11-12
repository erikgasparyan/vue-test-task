<template>
    <div>
        <b-navbar type="dark" variant="dark">
            <b-navbar-brand to="/">NavBar</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item to="/">Config</b-nav-item>
                    <b-nav-item to="/live-view" v-if="$store.state.companyId && $store.state.sortType">Live Item
                    </b-nav-item>
                </b-navbar-nav>

            </b-collapse>
        </b-navbar>
    </div>
</template>
<script>
    export default {
        name: 'navBar'
    }
</script>