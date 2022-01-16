<template>
    <div class="services">
        <div class="hero-title">
            <h1>Building from idea to implementation</h1>
            <h1>Services</h1>
        </div>
        <div class="content">
            <serviceitem
                v-for="service in services"
                :key="service.id"
                :service="service"
                :class="{'flipped':service.flipped}"
            >
            </serviceitem>
            
        </div>
        <div class="steps-bg">
            <div class="steps">
                <div class="step">
                    <h2>01</h2>
                    <h3>Analysis &amp; Idea</h3>
                    <span>Branding and digital are forte, given 
                        the state of the world, think.</span>
                </div>
                <div class="step">
                    <h2>02</h2>
                    <h3>Analysis &amp; Idea</h3>
                    <span>Branding and digital are forte, given 
                        the state of the world, think.</span>
                </div>
                <div class="step">
                    <h2>03</h2>
                    <h3>Analysis &amp; Idea</h3>
                    <span>Branding and digital are forte, given 
                        the state of the world, think.</span>
                </div>
            </div>            
        </div>
        <div class="discuss" v-bind:style="{ backgroundImage: 'url(' + discussbg + ')' }">
            <h2>Interested in discussing a project?</h2>
            <p>Do you have a creative challenge for us? Get in touch 
                with a member of the team.</p>
            <button type="button" onclick="location.href='#/contact'">Get in touch</button>
        </div>
    </div>
</template>
<script>
import serviceitem from './service-item.vue'
import discussbg from '@/assets/discussbg.png'
import img1 from '@/assets/development1.png'
import img2 from '@/assets/development2.png'
import img3 from '@/assets/marketing1.png'
import img4 from '@/assets/marketing2.png'
import img5 from '@/assets/design1.png'
import img6 from '@/assets/design2.png'
export default {
    name: 'services',
    components:{
        serviceitem
    },data: function (){
        return{
            discussbg,
            services:[
                {
                    id: 1,
                    title: 'Software & App Development',
                    paragraph: 'Delivering tailored engineering solutions to your business challenges, whether it is architectural design or web application development.',
                    features: [
                        {
                            id:1, content: 'FRONTEND DEVELOPMENT'
                        },
                        {
                            id:2, content: 'BACKEND DEVELOPMENT'
                        },
                        {
                            id:3, content: 'MOBILE DEVELOPMENT'
                        },
                        {
                            id:4, content: 'BLOCKCHAIN DEVELOPMENT'
                        },
                    ],
                    images:[
                        {
                            id:1, link: img1
                        },
                        {
                            id:2, link: img2, imgMargin: 'margin-left: -100px'
                        },
                    ],
                    flipped: false,
                },
                {
                    id: 2,
                    title: 'Product Marketing',
                    paragraph: 'Your potential users are already here. We can help you reach them through different marketing channels and convert them to profitable customers.',
                    features:[
                        {
                            id:1, content:'SEO & SEARCH MARKETING'
                        },
                        {
                            id:2, content:'SOCIAL MEDIA MARKETING'
                        },
                        {
                            id:3, content:'CONTENT MARKETING'
                        },
                        {
                            id:4, content:'INBOUND MARKETING'
                        },
                        {
                            id:5, content:'PAID ADVERTISING'
                        }
                    ],
                    images:[
                        {
                            id:1, link: img3
                        },
                        {
                            id:2, link: img4 ,imgMargin: 'margin-right: -100px'
                        },
                    ],
                    flipped: true,
                },
                {
                    id: 3,
                    title: 'Digital Design',
                    paragraph: 'From UX to visual design, we create digital products people love to use.',
                    features:[
                        {
                            id:1, content:'USER INTERFACE DESIGN'
                        },
                        {
                            id:2, content:'USER EXPERIENCE DESIGN'
                        },
                        {
                            id:3, content:'GRAPHIC DESIGN'
                        }
                    ],
                    images:[
                        {
                            id:1, link: img5
                        },
                        {
                            id:2, link: img6, imgMargin: 'margin-left: -100px'
                        },
                    ],
                    flipped: false,
                }
            ]
        }
    },
    props:{
    }
    
}
</script>
<style lang="sass" scoped>
@media screen and (max-width: 768px)
    .services
        .hero-title
            h1:nth-of-type(1)
                margin: 0px auto
                font-size: 36px
            h1:nth-of-type(2)
                display: none
    .steps
        flex-direction: column
        .step
            align-items: center
    .discuss
        height: 70vh
        > * 
            top: 10vh
            width: 90%
@media screen and (min-width: 768px)
    .hero-title
        h1:nth-of-type(1)
        margin: 10px 10%
        font-size: 35px
    .steps
        flex-direction: row
    .discuss
        height: 55vh
        > * 
            top: 30%
            width: fit-content
    .content
        display: flex
        flex-direction: column
        margin-top: 5%

.services
    width: 100%
    margin: auto
    .hero-title
        display: flex 
        flex-direction: row
        width: fit-content
        h1
            color: #1d1d1d
            width: 80%
        h1:nth-of-type(2)
            -webkit-text-stroke: 1px #e5e5e5
            -webkit-text-fill-color: white
            position: absolute
            left: 80%
            font-size: 130px
    .steps-bg
        background-color: #1d1d1d
        .steps
            margin: auto
            width: fit-content
            display: flex
            .step
                width: fit-content
                padding: 5% 0
                color: white
                display: flex
                flex-direction: column
                h2
                    font-size: 9rem
                    -webkit-text-stroke: 1px #e5e5e5
                    -webkit-text-fill-color: transparent
                    height: fit-content
                    width: fit-content
                h3
                    font-size: 1.5rem
                    position: relative
                    top: -95px
                    width: fit-content
                span
                    width: 60%
                    position: relative
                    top: -15%
    .discuss
        color: white
        > *
            margin: auto
            position: relative
            text-align: center
        h2
            font-size: 46px
            font-weight: bold
        p
            font-size: 20px
            margin: 20px auto
        button
            display: block
            width: 220px
            height: 60px
            margin: 40px auto
            background-color: white
            color: #1d1d1d
            font-size: 18px
            font-weight: bold
            border: none
            transition: box-shadow 0.2s ease-in-out, color 0.2s
        button:hover
            cursor: pointer
            box-shadow: inset 220px 0 0 0 #000
            color: white
</style>