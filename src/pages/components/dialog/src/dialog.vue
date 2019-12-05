<template>
    <div class="dialog-wrap">
        <div v-if="visible" class="dialog" @click="handleWrapperClick">

            <div class="mask" :style="{zIndex:zIndex }"></div>
            <div class="dialog-content" :style="{width}">
                <div class="customer-dialog-title">
                    <template >
                        <span class="title">{{titleName}}</span>
                        <span   v-if="showClose" @click="handleClose" class="icon-close"><i  class="lx-iconfont "  >&#xe690;</i></span>
                    </template>
                </div>
                <div class="customer-dialog-body">
                    <template >
                        <div class="dialog-body">
                            <slot name="body"></slot>
                        </div>
                    </template>
                    <template>
                        <div class="dialog-footer">
                            <slot name="footer"></slot>
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue, Prop, Watch } from "vue-property-decorator"
    import { Getter, Action } from 'vuex-class'
    // import PopupManager from '../utils/popup/popup-manager.js';
    // import {  } from "./components" // 组件

    @Component({})
    export default class VDialog extends Vue {
        // prop 可以通过父子组件传值显示当前的Name;
        @Prop({
            required: false,
            default: ''
        }) width!: string;
        @Prop({
            required:false,
            default:''
        }) titleName!:string;
        @Prop({
            required:false,
            default:true,
        }) showClose!:boolean ;
        @Prop({
            required:false,
            default:false,
        }) visible!:boolean ;
        @Prop({
            required:false,
            default:false,
        }) closeOnClickModal!:boolean ;

        @Watch("zIndex")
        handleContentIndex(val:number){
            this.cIndex=this.zIndex++;
        }
        zIndex:number=1000;
        cIndex:number=1001;
        closed:boolean=true;
        handleWrapperClick() {
            if (!this.closeOnClickModal) return;
            this.handleClose();
        }
        afterEnter() {
            this.$emit('opened');
        };
        afterLeave() {
            this.$emit('closed');
        }
        public handleClose():void{
            console.log("close dialog");
            this.hide();
        }
        public hide():void{
            this.closed=true;
            this.$emit("close")
        }
        @Watch("visible")
        handleWatchVisible(newVal:boolean,oldVal:boolean){
            if(newVal){
                this.closed=false;
                this.$emit("open")
            }else{
               if(!this.closed){
                   this.$emit("close")
               }
            }
        }
        created() {
            //
        }

        activated() {
            //
        }

        mounted() {
            //
        }

    }
</script>

<style lang="less">

    @import "../../../../../assets/less/variables.less";


    .dialog-wrap {
        width: 100%;
        .dialog {
            position: relative;
            .dialog-content {
                position: fixed;
                box-sizing: border-box;
                width: 80%;
                height: auto;
                min-height: 250px;
                box-shadow:0px 5px 13px 0px rgba(20,63,11,0.47);
                background:rgba(255,251,241,1);
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                border-radius: 5px;
                z-index: 1001;
                .customer-dialog-title{
                    background:rgba(255,120,0,0.19);
                    border-radius:3px 3px 0px 0px;
                    width:100%;
                    height:33px;
                    .title{
                        margin: 2px 0px 9px 19px;
                        font-size: 14px;
                        font-family: Droid Sans Fallback;
                        font-weight: 400;
                        float: left;
                        color: #743c09;
                    }
                    .icon-close{
                        float: right;
                        margin: 10px 10px 10px 0px;

                    }
                }
                .customer-dialog-body{
                    width: inherit;
                    height: auto;
                    border-radius:2px;
                    .dialog-body{
                        width: inherit;
                        height: auto;
                    }
                    .dialog-footer{
                        width: inherit;
                        height: auto;
                        text-align: center;
                    }
                }
                .title {
                    font-size: 16px;
                    font-weight: 600;
                    line-height: 30px;
                }
                .text {
                    font-size: 14px;
                    line-height: 30px;
                    color: #555;
                }
                .btn-group {
                    display: flex;
                    position: absolute;
                    right: 0;
                    bottom: 10px;
                    .btn {
                        padding: 10px 20px;
                        font-size: 14px;
                        &:last-child {
                            color: #76D49B;
                        }
                    }
                }
            }
            .mask {
                position: fixed;
                top: 0;
                left: 0;
                bottom: 0;
                right: 0;
                z-index: 1000;
                background: rgba(0,0,0,.5);
            }
        }
    }
</style>

