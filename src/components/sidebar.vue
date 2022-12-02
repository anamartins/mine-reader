<script setup>
import {onMounted, computed} from 'vue';
import Logo from './logo.vue';
import {useFeedsStore} from '../stores/feeds';

let feedsStore = useFeedsStore();
let feeds = computed(() => (feedsStore.feeds))
feedsStore.getFeeds();
let totalFeeds = computed(() => (feedsStore.totalFeeds));
let readLater = computed(() => (feedsStore.readLater));


onMounted(() => {})
</script>

<template>
    <div class="sidebar">
        <Logo />
        <section class="side-sub">
            <h2>all feeds ({{totalFeeds}})</h2>
            <ul class="allfeeds-list" v-for="feed in feeds">
                <li>{{feed.title}} ({{feed.unreadCount}})</li>
            </ul>
        </section>
        <section class="side-sub">
            <h2>tags</h2>
            <ul>
                <li>tag1</li>
                <li>tag2</li>
            </ul>
        </section>
        <section class="side-sub">
            <h2>mine</h2>
            <ul>
                <li>read later ({{readLater}})</li>
                <li>one</li>
                <li>two</li>
            </ul>
        </section>
        <section class="side-sub">
            <h2>theirs</h2>
            <ul>
                <li>one</li>
                <li>two</li>
            </ul>
        </section>
    </div>
</template>

<style scoped>
    .sidebar{
        width: 30%;
        /* background-color: deeppink; */
    }
    h2{
        font-size: 30px;
        font-weight: 700;
    }
    ul{
        font-size: 20px;
        font-weight: 400;
        list-style-type: none;   
    }
    .side-sub{
        margin: 5% 5% 5% 0;

    }
</style>