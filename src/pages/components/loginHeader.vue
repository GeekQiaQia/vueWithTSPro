<template>
    <div class="content-container-left">
       <div class="head">
           <slot name="title">

           </slot>
           <div   class="qrcode">
               <slot name="qrcode">

               </slot>
           </div>
       </div>
        <div class="container">
            <slot name="container">

            </slot>
        </div>
        <slot name="extra">

        </slot>
    </div>

</template>

<script lang="ts" >
    import {Component,Prop,Emit,Vue } from 'vue-property-decorator'
    @Component({
        components:{}
    })
    export default  class layoutHeader  extends Vue{
        // @Prop() private loginWay!:boolean;
        // @Emit('clickChange')
        // clickChange(){
        //     this.loginWay= !this.loginWay
        // }
    };

</script>

<style lang="scss" scoped>
    .content-container-left{
        width: 410px;
        float:left;
        min-height: 360px;
        background: #fff;
        box-shadow: 0 0 6px rgba(0,0,0,.08);
        margin: 40px 20px 0 20px;
        box-sizing: border-box;
        padding: 15px;
        .head{
            position:relative;
            ul{
                overflow: hidden;
                li{
                    float:left;
                    font-size:18px;
                    line-height:20px;
                    position: relative;
                    margin-top:15px;
                    padding:0 15px;
                    color:#999;
                    cursor: pointer;
                }
            }

        }
        .container{
            position:relative;
            padding: 20px 15px 0;
            .qrcode-content{
                text-align: center;
                .step-1{
                    margin-top:10px;
                    .qrcode-box{
                        width:152px;
                        height:152px;
                        position: relative;
                        margin: 0 auto;
                        .qrcode-img{
                            display: block;
                            width:130px;
                            height:130px;
                            padding: 10px;
                            border: 1px solid #e5e5e5;
                            margin: 0 auto;
                        }
                        img{
                            width:130px;
                            height:130px;
                            cursor: pointer;
                        }

                    }
                    .platform{
                        h4{
                            font-size: 14px;
                            color: #999;
                            line-height: 20px;
                            margin: 20px 0 10px 0 ;
                            font-weight: 400;

                        }
                        & > ul{
                            width:120px;
                            margin: 0 auto;
                            // li 的最后一个li margin-right:0px ;
                            & :last-child {
                                margin-right:0px;
                            }
                            & > li{
                                position:relative;
                                float: left;
                                margin-right: 24px;

                                & > img{
                                    width:24px;
                                    height:24px;
                                    display: block;
                                    cursor: pointer;
                                }
                            }



                        }
                    }
                }
            }
        }
        .qrcode{
            width:40px;
            height:40px;
            position:absolute;
            right:0px;
            top:0px;
            img{
                cursor: pointer;
                width:inherit;
                height:inherit;
            }
        }
    }

</style>
