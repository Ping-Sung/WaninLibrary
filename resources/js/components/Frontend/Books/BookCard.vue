<template>
<div class="book-card">
    <a :href="book.showURL" class="book-card-link">
        <div class="book-cover-image">
            <img :src="book.showCoverImage" :alt="book.title">
        </div>
        <div class="book-info" v-if="book.category != 11 && book.category != 12">
            <h4 class="book-title">{{ book.showTitle }}</h4>
            <span class="book-small" v-if="book.author != null">作者：{{ book.author }}著</span>
            <span class="book-small">出版商：{{ book.publisher }}</span>
            <span class="book-small">出版年：{{ book.published_date }}</span>
            <span class="book-small">書籍來源：{{ book.source }}</span>
        </div>
        <div class="book-info" v-else>
            <h4 class="book-title">{{ book.showTitle }}</h4>
            <span class="book-small">出版商：{{ book.publisher }}</span>
            <span class="book-small">期數/出版日期：{{ book.published_date }}</span>
            <span class="book-small">書籍來源：{{ book.source }}</span>
        </div>
    </a>
</div>
</template>

<script>
export default {
    props: ['book'],
    data(){
        return {

        }
    },
    methods: {

    },
    created(){

    },
    mounted(){

    }
}
</script>

<style>
</style>
