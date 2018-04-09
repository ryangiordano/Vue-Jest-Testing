<template>
    <div class="">
        <h1>These are test cards</h1>
        <test-card v-for="(card, index) in cards" :key="index" :card="card" @toggled="toggled()">
        </test-card>
    </div>

</template>
<script>
import Card from './Cards/Card';
    export default {
        name:'TestComponent',
        components:{
            'test-card':Card
        },
        props:[],
        data(){
            return {
                active:false,
                cards:[
                    {
                        title:"Title 1",
                        details:"This is the detail of a card.",
                        active:false
                    },
                                        {
                        title:"Title 2",
                        details:"This is the detail of a card.",
                        active:false
                    },
                                        {
                        title:"Title 3",
                        details:"This is the detail of a card.",
                        active:false
                    },
                                        {
                        title:"Title 4",
                        details:"This is the detail of a card.",
                        active:false
                    }
                ]
            }
        },
        methods:{
            toggled(card){
                this.$children.map(c=>c.active=false);
            }
        }
    }
</script>
<style lang="scss">

</style>
