<template>
    <header>
        <ul class="d-flex">
            <li class="ms-5" v-for="(item, index) in menuItems" :key="index">
                <router-link :to="{name : item.routeName}" active-class="active" class="nav-link">
                {{ item.label }}
                </router-link>
            </li>
        </ul>
   
    </header>
</template>

<script>
    export default{
    name: 'AppHeader',
    data(){
        return{
            menuItems:[
                {
                    label: 'Home',
                    routeName: 'home'
                },
                {
                    label: 'About',
                    routeName: 'about'
                },
                {
                    label: 'Portfolio',
                    routeName: 'projects'
                },
                {
                    label: 'Contacts',
                    routeName: 'contact'
                },
            ]
        }
    }
   
    }
</script>

<style lang="scss" scoped>

</style>