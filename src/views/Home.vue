<template>
  <div class="home">
     <br>
    <section class="title">
      <h1>Parent Application</h1>
      <h3>Set mood</h3>
    </section>
    <section class="buttons">
      <ion-button v-on:click="neutral" expand="block" color="primary" class="btn-width default"> 
        <font-awesome-icon class="icon" icon="smile-beam" /> Neutral
      </ion-button>
      <br>
      <ion-button v-on:click="calm" expand="block" color="primary" class="btn-width calm">
      <font-awesome-icon class="icon" icon="meh-blank" />   Calm
      </ion-button>
      <br>
      <ion-button v-on:click="active" expand="block" color="primary" class="btn-width active">
        <font-awesome-icon class="icon" icon="laugh-beam" /> Active
      </ion-button> 
      </section>
  </div>
</template>

<script>
/* eslint-disable */
import * as pubNeutral from '../services/publishNeutral.js'
import * as pubCalm from '../services/publishCalm.js'
import * as pubActive from '../services/publishActive.js'
import * as cred from '../services/credentials.js'

export default {
  name: 'home',
    create() {
        pubcred.default.credentials()
      }, 
    methods: {
      neutral () {
        pubNeutral.default.publishNeutralMood()
      },
      calm(){
        pubCalm.default.publishCalmMood()
      },
      active(){
        pubActive.default.publishActiveMood()
      },
    }
}
</script>

<style media="screen">

  .title{
    position: relative;
    top: -20px;
  }

  .title h1{
    font-size: 2em;
    font-weight: 900;
  }

  .title h3{
    font-size: 1.7em;
    padding-top: 30px;
    padding-bottom: 0;
    
  }

  .icon{
    padding-right: 10px;
  }

  .btn-width{
    position: relative;
    width: 80vw;
    height: 100px;
    margin-bottom: 20px;
    font-size: 2em;
    font-weight: 900;
    color: white;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 10px;
    box-shadow: 0 20px 50px -15px rgba(0,0,0,0.3);
    overflow: hidden;
    transition: 0.3s;
  }

  .btn-width:hover{
    box-shadow: 0 20px 50px -10px rgba(0,0,0,0.5);
  }

  .default{
  background-color: #7044ff;
  }

  .calm{
    background-color: #0cd1e8;
  }

  .active{
    background-color: #B5CE00;
  }

  :root{
    --ion-color-primary: #4DC5E2;
  --ion-color-primary-rgb: 77,197,226;
  --ion-color-primary-contrast: #4DC5E2;
  --ion-color-primary-contrast-rgb: 0,0,0;
  --ion-color-primary-shade: #44adc7;
  --ion-color-primary-tint: #5fcbe5;

  --ion-color-secondary: #0cd1e8;
  --ion-color-secondary-rgb: 12,209,232;
  --ion-color-secondary-contrast: #ffffff;
  --ion-color-secondary-contrast-rgb: 255,255,255;
  --ion-color-secondary-shade: #0bb8cc;
  --ion-color-secondary-tint: #24d6ea;

  --ion-color-tertiary: #7044ff;
  --ion-color-tertiary-rgb: 112,68,255;
  --ion-color-tertiary-contrast: #ffffff;
  --ion-color-tertiary-contrast-rgb: 255,255,255;
  --ion-color-tertiary-shade: #633ce0;
  --ion-color-tertiary-tint: #7e57ff;
  }
</style>
