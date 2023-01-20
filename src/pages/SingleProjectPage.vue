<template>
    <section v-if="project">
        <div class="show-hero">
            <div class="my-container">
                <h2>{{project.title}}</h2>
                 <p>{{project.content }}</p>
            </div>
        </div>
        <div class="project-img">
            <img :src="`${store.imageBasePath}${project.cover_image}`" class="card-img-top" :alt="project.title">
        </div>
         <div v-if="project.category" class="my-container my-5">
             <h5>Category: {{project.category.name }}</h5>
         </div>
         <div v-if="project.tags && project.tags.length > 0" class="my-container mb-5">
             <h5 class="mb-3">Tags :</h5>
             <div>
                 <span v-for="(tag,index) in project.tags" :key="index" class="badge bg-light text-dark me-2">{{tag.name }}</span>
             </div>
         </div>
    </section>
    <div v-else class="loader-container">
        <div class="ring"></div>
        <div class="ring"></div>
        <div class="ring"></div>
        <span class="loading">Loading...</span>
    </div>
 </template>
 
 <script>
 import axios from 'axios';
 import {store} from '../store';
 
     export default {
         name: 'SingleProject',
         data(){
             return{
                 store,
                 project: null
 
             }
         },
         methods:{
             getProject(){
                 // console.log(this.$route);
                 axios.get(`${this.store.apiBaseUrl}/projects/${this.$route.params.slug}`).then((response)=>{
                     if(response.data.success){
                         // console.log(response.data.results);
                         this.project = response.data.results;
                     } else {
                         // console.log(this.$router);
                         this.$router.push({name: 'not-found'});
                     }
                 });
             }
         },
         mounted(){
             this.getProject();
         }
     }
 </script>
 
 <style lang="scss" scoped>
 @use '../assets/styles/partials/variables' as *;
@use '../assets/styles/partials/mixins' as *;

    .show-hero{
        width: 100%;
        height: 500px;
        // background-color: $bg-color-pink;
        background-image: url(../assets/img/web-dev-05.png);
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;

        h2{
            padding-top: 8rem;
        }
        p{
            max-width: 600px;
            margin-top: 1.5rem;
        }
    }
    .project-img{
       max-width: 1170px;
        margin: 0 auto;
        padding: 0 3rem;
    }

    //loader
    .loader-container{
        width: 100%;
        height: calc(100vh - 120px);
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .ring{
        position: absolute;
        width: 200px;
        height: 200px;
        border: 0 solid $bg-color-white;
        border-radius: 50%;
    }
    .ring:nth-child(1){
        border-bottom-width: 8px;
        border-color: $bg-color-coral;
        animation: rotate1 2s linear infinite;
    }
    .ring:nth-child(2){
        border-bottom-width: 8px;
        border-color: $bg-color-mint;
        animation: rotate2 2s linear infinite;
    }
    .ring:nth-child(3){
        border-bottom-width: 8px;
        border-color: $bg-color-pink;
        animation: rotate3 2s linear infinite;
    }
    .loading{
        color: $text-color-gray;
    }

    @keyframes rotate1{
        0%{
            transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
        }
        100%{
            transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
        }
    }
    @keyframes rotate2{
        0%{
            transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
        }
        100%{
            transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
        }
    }
    @keyframes rotate3{
        0%{
            transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
        }
        100%{
            transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
        }
    }
    
 </style>