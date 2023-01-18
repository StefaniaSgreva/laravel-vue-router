<template>
    
    <div class="about-wrapper">
        <div class="about-left">
            <div class="about-left-content">
                <div>
                    <div class="about-img">
                        <img src="../assets/img/pusheen.jpg" alt="about image">
                    </div>
                    
                    <h2>Stefania<br>Sgreva</h2>
                    <h3>Front End Developer</h3>
                </div>

                <ul class="icons">
                    <li><a href=""><i class="fa-brands fa-linkedin"></i></a></li>
                    <li><a href=""><i class="fa-brands fa-github"></i></a></li>
                    <li><a href=""><i class="fa-solid fa-at"></i></a></li>
                    <li><a href=""><i class="fa-brands fa-imdb"></i></a></li>
                    <li><a href=""><i class="fa-brands fa-vimeo-v"></i></a></li>
                </ul>
            </div>
        </div>

        <div class="about-right">
            <h1><i class="fa-solid fa-chevron-left"></i>Hi<i class="fa-solid fa-chevron-right"></i></h1>
            <h2 class="mt-4">Here's something about me & what I do</h2>
            <div class="about-btns">
                <button type="button" class="btn btn-pink">Resume</button>
                <button type="button" class="btn btn-white">Projects</button>
            </div>

            <div class="about-para mt-4">
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, incidunt accusamus tenetur aliquam magnam totam itaque dolorum officiis ipsam vel cupiditate ipsa illo sequi velit culpa assumenda, aspernatur excepturi expedita.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit et dolorum, odio vel fuga perferendis.</p>
            </div>
        </div>

        
    </div>
    
</template>

<script>
    export default {
        name: 'AboutUs'
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
@use '../assets/styles/partials/mixins' as *;

    .about-left{
        background: $bg-color-mint;
       @include dflex-center-col;
        height: 100%;
    }
    .about-left-content > div{
        // background: $bg-color-mint;
        padding: 4rem 4rem 2.5rem 5rem;
        text-align: center;
    }
    .about-left-content{
        box-shadow: 0px 0px 18px -1px rgba(0, 0, 0, 0.39);
        -webkit-box-shadow: 0px 0px 18px -1px rgba(0, 0, 0, 0.39);
        -moz-box-shadow: 0px 0px 18px -1px rgba(0, 0, 0, 0.39);
    }
    .about-img{
        width: 200px;
        height: 200px;
        overflow: hidden;
        // border-radius: 50%;
        margin: 0 auto;
        transition: all 0.5s ease-in-out;
    }
    .about-left-content h2{
        font-size: 2rem;
        margin: 2.2rem 0 0.6rem 0;
        line-height: 1.2;
        padding-bottom: 1rem;
        border-bottom: 2px solid $bg-color-white;
    }
    .about-left-content h3{
        text-transform: uppercase;
        font-weight: 300;
        letter-spacing: 5px;
        margin-top: 2rem;
        font-size: 1rem;
    }
    .icons{
        background: $bg-color-white;
        display: flex;
        justify-content: center;
        padding: 0.8rem 0;
    }
    .icons li{
        background: $bg-color-pink;
        color: $bg-color-white;
        width: 40px;
        height: 40px;
        margin: 0 0.5rem;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.2rem;
        cursor: pointer;
        transition: all 0.5s ease-in-out;
    }
    .icons li:hover{
        background: $bg-color-coral;
    }
    .icons a:hover{
      color: $bg-color-white;
    }
    .about-right{
        background: $bg-color-white;
        height: calc(100vh - 120px);
       @include dflex-center-col;
        padding: 0 5rem;
        text-align: center;
    }
    .about-right h1{
        font-size: 6rem;
        text-transform: uppercase;
    }
    .about-right h2{
        font-weight: 600;
    }
    .about-btns{
        display: flex;
        margin: 2rem 0;
    }
    .btn{
        border: none;
        font-size: 0.9rem;
        text-transform: uppercase;
        color: $bg-color-coral;
        border: 2px solid $bg-color-coral;
        border-radius: 20px;
        padding: 0.55rem 0;
        width: 130px;
        font-weight: 900;
        font-family: inherit;
        background: transparent;
        margin: 0 0.5rem;
        cursor: pointer;
    }
    .btn.btn-pink{
        background: $bg-color-coral;
        color: $bg-color-white;
        border-color: $bg-color-coral;
        transition: all 0.5s ease-in-out;
    }
    .btn.btn-pink:hover{
        background: transparent;
        border-color: $bg-color-coral;
        color: $bg-color-coral;
    }
    .btn.btn-white{
        transition: all 0.5s ease-in-out;
    }
    .btn.btn-white:hover{
        background: $bg-color-coral;
        border-color: $bg-color-coral;
        color: $bg-color-white;
    }


    @media screen and (min-width: 992px){
        .about-wrapper{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
        }
        .about-left{
            position: relative;
        }
        .about-left-content{
            position: absolute;
            right: -50px;
        }
    }

</style>