<template>
     <div class="card m-auto" style="width: 18rem;">
        <div class="img-box">
            <img  v-if="project.cover_image" :src="`${store.imageBasePath}${project.cover_image}`" :alt="project.title">
            <img v-else src="https://picsum.photos/id/20/1920/1080" alt="default image">
        </div>
        <!-- <img :src="`${store.imageBasePath}${project.cover_image}`" class="card-img-top" :alt="project.title"> -->
        <div class="card-body">
            <h5 class="card-title">{{ project.title}}</h5>
            <p class="card-text">{{truncateContent}}</p>
            <router-link class="btn btn-primary" :to="{name: 'single-project', params:{slug:project.slug}}">
                Show Project
            </router-link>
        </div>
    </div>
</template>

<script>
import {store} from '../store';

    export default {
        name: 'ProjectCard',
        props: ['project'],
        data(){
            return {
                store,
                contentMaxLen: 100
            }
        },
        computed:{
            truncateContent(){
                if(this.project.content.length > this.contentMaxLen){
                    return this.project.content.substr(0,this.contentMaxLen) + '...';
                }
                return this.project.content;            
            }
        }
        
        
    }
</script>

<style lang="scss" scoped>

</style>

