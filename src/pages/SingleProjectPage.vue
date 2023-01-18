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
 </style>