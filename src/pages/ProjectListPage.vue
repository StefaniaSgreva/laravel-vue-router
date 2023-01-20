<template>
    <section id="my-work-hero">
        <h2>My Work</h2>
        <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Pellentesque in dapibus. Pellentesque in ipsum id orci porta dapibus. Proin eget te tu</p>
    </section>
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
    <section id="projects">
        <div class="row">
            <div class="col-4">
                
            </div>
        </div>
    </section>
    
    <div class="container">
        <div class="row my-5">
            <div class="col-12 col-md-4" v-for="(project, index) in projects" :key="index">
                
                <ProjectCard :project="project"/>
    
            </div>
        </div>

        <!-- <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center">
                <li class="page-item" :class="{'disabled': currentPage === 1}">
                    <button class="page-link" :disabled="currentPage === 1" @click="getProjects(currentPage - 1)">Previous
                    </button>
                </li>
                <li class="page-item" v-for="n in lastPage">
                    <button class="page-link" @click="getProjects(n)">{{n}}</button>
                 </li>
                 <li class="page-item" :class="{'disabled': currentPage === lastPage}">
                    <button class="page-link" :disabled="currentPage === lastPage" @click="getProjects(currentPage + 1)">Next
                    </button>
                 </li>  
            </ul>
        </nav> -->

    </div>
    
    
</template>

<script>
import axios from 'axios';
import {store} from '../store';
import ProjectCard from '../components/ProjectCard.vue';

    export default {
        name: 'ProjectList',
        components: {
            ProjectCard
        },
        data(){
            return {
                store,
                projects: [],
                currentPage: 1,
                lastPage: null,
                totlal: 0,
                // contentMaxLen: 100
            }
        },
        methods:{
            getProjects(pagenum){
                axios.get(`${this.store.apiBaseUrl}/projects`, {params:{
                    page: pagenum
                }}).then((response)=>{
                    // console.log(response.data.results);
                    this.projects = response.data.results.data;
                    this.currenPage = response.data.results.current_page;
                    this.lastPage = response.data.results.last_page;
                    this.total = response.data.results.total;

                })
            },
        },
        mounted(){
            this.getProjects(1);
        },
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
@use '../assets/styles/partials/mixins' as *;
    #my-work-hero{
        width: 100%;
        height: 500px;
        // background-color: $bg-color-pink;
        background-image: url(../assets/img/web-dev-24.png);
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;

        h2{
            text-align: center;
            padding-top: 8rem;
        }

        p{
            max-width: 600px;
            margin: 0 auto;
            margin-top: 1.5rem;
            text-align: center;
        }
    }
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