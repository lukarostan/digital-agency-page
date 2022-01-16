<template>
    <div class="pageheader">
        <a class="logo" href="/">
            <img  :src="logo" alt="company logo">
        </a>
        <div class="menu-button">
            <div class="menu-button_line"></div>
            <div class="menu-button_line"></div>
        </div>
    </div>
</template>
<script>
import logo from '@/assets/logo.png'
export default {
    name: 'pageheader',
    data: function(){
        return{
            logo: logo
        }
    }
}
</script>
<style lang="sass" scoped>
.pageheader
    width: 100%
    height: 100px
    display: flex
    flex-direction: row
    background-color: transparent
    position: sticky
    top: 0
    z-index: 2
    img
        width: 105px
        height: 30px
    .logo
        margin: 28px 0px
        margin-left: 5%
    .menu-button:hover
        cursor: pointer
        .menu-button_line:nth-of-type(1)
            transform: translateX(14px)
        .menu-button_line:nth-of-type(2)
            transform: scaleX(2)
    .menu-button
        width: 35px
        height: fit-content
        display: flex
        flex-direction: column
        margin: 39px 0px
        position: absolute
        right: 5%
        overflow: hidden
        .menu-button_line
            height: 1px
            border: 1px solid #1d1d1d
            width: 40px
            margin: 3px 0px
            background-color: black
            transition: transform 0.4s
        .menu-button_line:nth-of-type(2)
            width: 20px
            position: relative
            left: 14px
</style>