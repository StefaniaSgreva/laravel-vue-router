<template>
    <header>
       
        <!-- <img src="../assets/images/" alt="logo" class="header-logo"> -->
        <i class="fa-solid fa-code"></i>
        
        <nav>
            <ul>
                <li class="ms-5" v-for="(item, index) in menuItems" :key="index">
                    <router-link :to="{name : item.routeName}" active-class="active" class="strike">
                    {{ item.label }}
                    </router-link>
                </li>
            </ul>
        </nav>
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
@use '../assets/styles/partials/variables' as *;
@use '../assets/styles/partials/mixins' as *;

header{
    width: 100%;
    margin: 0 auto;
    padding: 0 30px;
    height: 60px;
    @include dflex-between;
    // padding-top: 2.5rem;

    i{
        font-size: 2rem;
        padding-top: 1rem;
     
    }

    ul{
        padding-top: 2.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: .85rem;
        font-weight: 700;


        
            li a{
                text-transform: uppercase;
                margin-left: 3rem;
                letter-spacing: .10rem;
                display: inline-block;
                position: relative;

                &:hover{
                    color: $text-color;
                }
            }
            .strike::after{
                content: '';
                display: block;
                width: 0%;
                height: 6px;
                background: $bg-color-mint;
                position: absolute;
                bottom: 0;
                z-index: -1;
                transition: 400ms ease-in-out;
            }           
            .strike:hover::after{
                content: '';
                display: block;
                width: 100%;
                height: 6px;
                background: $bg-color-mint;
                position: absolute;
                bottom: 0;
                z-index: -1;
            } 
            .strike.active::after{
                width: 100%;
            }
    }

}
</style>