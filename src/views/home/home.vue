<script setup>
import { onMounted, computed } from 'vue'
import Sidebar from '../../components/sidebar.vue'
import {useUsersStore} from '../../stores/users'
import {usePostsStore} from '../../stores/posts'

let usersStore = useUsersStore();
usersStore.getUser();
let email = computed(() =>(usersStore.user.email));


let postsStore = usePostsStore();
postsStore.getPosts();
let posts = computed(() => (postsStore.posts));

onMounted(() => {
    console.log('home', posts);
})
   
</script>

<template>
    <Sidebar />
    {{email}}
    <router-link to="/signup">TEST</router-link>
    <div class="stream">
        <div class="post" v-for="post in posts">
            <div class="post-title"><a :href="post.link" target="_blank">{{post.title}}</a></div>
            <div class="post-source">{{post.feed.title}}</div>
            <div class="post-date">{{post.pubDate}}</div>
            <div class="post-content" v-html="post.content"></div>
        </div>
    </div>
</template>

<style>
html{
    display: flex;
}
.post{
    border: 1px solid black;
    margin: 3% 0;
}

.post-title{
    font-size: 20px;
    font-weight: 700;;
}
</style>