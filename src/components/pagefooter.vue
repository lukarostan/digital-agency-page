<template>
    <div class="footer">
        <div class="footer-content">
            <img class="footer-logo" :src="logowhite" alt="">
            <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#/contact">Contact</a></li>
            </ul>
            <ul>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">LinkedIn</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Instagram</a></li>
            </ul>
            <ul>
                <li><span >Async d.o.o</span></li>
                <li><span >Lipovečka 1,</span></li>
                <li><span >10000 Zagreb,</span></li>
                <li><span >Croatia</span></li>

            </ul>
            <ul>
                <li><a href="mailto:hello@asynclabs.co">hello@asynclabs.co</a></li>
            </ul>
            
            <span>© Async Labs. All rights reserved 2020.</span>
            <span></span>
            <span></span>
            <span></span>
            <span style="order: 10"><a href="#">Privacy Policy</a></span>
        </div>
    </div>
</template>

<script>
import logowhite from '@/assets/logowhite.png'
export default {
    name: 'pagefooter',
    data: function(){
        return{
            logowhite: logowhite
        }
    }
}
</script>

<style lang="sass" scoped>
@media screen and (max-width: 500px)
    .footer
        .footer-content
            grid-template-columns: 1fr
@media screen and (min-width: 500px) and (max-width: 600px)
    .footer
        .footer-content
            grid-template-columns: 1fr 1fr
@media screen and (min-width: 600px) and (max-width: 768px)
    .footer
        .footer-content
            grid-template-columns: 1fr 1fr 1fr
@media screen and (min-width: 768px) 
    .footer
        .footer-content
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr 

.footer
    width: 100%
    background-color: #1d1d1d
    .footer-content
        display: grid
        margin: auto
        width: 85%
        padding: 3% 0
        color: white
        > *
            margin: 5% 5%
        ul
            li
                margin: 10px 0px
                a
                    padding-bottom: 10px 
                    transition: padding-bottom 0.2s
                a:hover
                    border-bottom: 2px solid #fff
                    padding-bottom: 3px 
                    
        .footer-logo
            width: 105px
            height: 30px
        a
            color: white
</style>