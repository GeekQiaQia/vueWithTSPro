<template>
    <div class="content-container-left">
        <slot name="title">

        </slot>
        <slot name="container">

        </slot>
    </div>

</template>

<script lang="ts" >
    import {Component,Vue } from 'vue-property-decorator'
    @Component({
        components:{}
    })
    export default  class layoutHeader  extends Vue{

    };

</script>

<style lang="scss" scoped>
    .content-container-right{
        width: 410px;
        float:left;
        min-height: 360px;
        background: #fff;
        box-shadow: 0 0 6px rgba(0,0,0,.08);
        margin: 40px 20px 0 20px;
        box-sizing: border-box;
        padding: 15px;
    }

</style>