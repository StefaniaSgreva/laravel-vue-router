<template>
    <div>
        <section id="featured-project-one">
        <div class="project my-container">
            <div class="descriptions">
                <small>Featured Project</small>
                <h2>Hetre Website Redesign</h2>
                <p>Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Donec rutrum congue leo eget malesuada. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur non nulla sit amet nisl tempus </p>
                <a href=""><i class="fa-solid fa-desktop"></i>Live Website</a>
                <button>View Full Project<i class="fa-solid fa-angles-right"></i></button>
            </div>
            <div class="project-image">
                <img src="../assets/img/web-dev-10.png" alt="">
            </div>
        </div>
    </section>
    <section id="featured-project-two">
        <div class="project my-container">
            <div class="project-image">
                <img src="../assets/img/web-dev-14.png" alt="">
            </div>
            <div class="descriptions">
                <small>Featured Project</small>
                <h2>G.Film Productions Website<br>UI/UX Design</h2>
                <p>Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Donec rutrum congue leo eget malesuada. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur non nulla sit amet nisl tempus </p>
                <a href=""><i class="fa-solid fa-desktop"></i>Live Website</a>
                <button>View Full Project<i class="fa-solid fa-angles-right"></i></button>
            </div>
        </div>
    </section>
    </div>
</template>

<script>
    export default {
        name: 'HomePage'
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
@use '../assets/styles/partials/mixins' as *;

#featured-project-one{
        width: 100%;
        height: 600px;
        background-color: $bg-color-light-gray;

        .project{
            // border: 1px solid red;
            height: 100%;
            @include dflex-between;

            .descriptions{
                width: 45%;
                padding-right: 5rem;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                line-height: 4rem;

                small{
                    text-transform: uppercase;
                    color: $text-color-gray;
                    letter-spacing: .25rem;
                }
                p{
                    color: $text-color;
                    margin-top: 1.5rem;
                }
                a{  
                    text-transform: uppercase;
                    font-weight: 600;
                    letter-spacing: .10rem;
                    i{
                        margin-right: 1rem;
                        color: $aside-menu;
                    }  
                }
                button{
                    align-self: flex-end;
                    padding: 0 2rem;
                    text-transform: uppercase;
                    font-weight: 600;
                    color: $aside-menu;
                    border: 2px solid $aside-menu;
                    border-radius: 20px;
                    outline: 2px solid $bg-color-mint;
                    text-shadow: 2px 2px $bg-color-mint;
                    font-family: inherit;
                    background-color: transparent;


                    i{
                        margin-left: .5rem;
                    }
                }
            }
            .project-image{
                width: 65%;
               
            }
        }
    }
    #featured-project-two{
        width: 100%;
        height: 600px;
        background-color: $bg-color-white;
        margin: 8rem 0;

        .project{
            // border: 1px solid red;
            height: 100%;
            @include dflex-between;
           

            .descriptions{
                width: 45%;
                padding-left: 5rem;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                line-height: 4rem;

                small{
                    text-transform: uppercase;
                    color: $text-color-gray;
                    letter-spacing: .25rem;
                }
                p{
                    color: $text-color;
                    margin-top: 1.5rem;
                }
                a{  
                    text-transform: uppercase;
                    font-weight: 600;
                    letter-spacing: .10rem;
                    i{
                        margin-right: 1rem;
                        color: $aside-menu;
                    }  
                }
                button{
                    align-self: flex-end;
                    padding: 0 2rem;
                    text-transform: uppercase;
                    font-weight: 600;
                    color: $aside-menu;
                    border: 2px solid $aside-menu;
                    border-radius: 20px;
                    outline: 2px solid $bg-color-mint;
                    text-shadow: 2px 2px $bg-color-mint;
                    font-family: inherit;
                    background-color: transparent;

                    i{
                        margin-left: .5rem;
                    }
                }
            }
            .project-image{
                width: 65%;
               
            }
        }

    }

</style>