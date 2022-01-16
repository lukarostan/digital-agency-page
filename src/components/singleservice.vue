<template>
    <div class="single-service" >
        <img class="topbanner" :src="topbanner" alt="">
        <div class="text-container">
            <div>
                <h4>DESCRIPTION</h4>
                <h2>Behold you lesser our let 
                    seed there for and light great 
                    lights that seasons.</h2>
            </div>
            <p>Gathered hath days beginning fowl divided image 
                i can't given is life air. Created without stars life 
                moved second two forth make.

                Creature also hath every fruitful them third own. 
                She'd called he created two after created morning 
                make also open stars upon, herb without fowl said 
                itself good. Fruitful seed of, blessed be were.</p>
            <span></span>
            <ul>
                <li><div class="line"></div> <span>USER INTERFACE DESIGN</span> </li>
                <li><div class="line"></div> <span>USER EXPERIENCE DESIGN</span> </li>
                <li><div class="line"></div> <span>GRAPHIC DESIGN</span> </li>
            </ul>
        </div>
        <div class="work">
            <h2>Work</h2>
            <div class="work-grid">
                <div class="work-item">
                    <div class="overlay"><span>Revuto</span></div>
                    <img :src="work1" alt="work showcase">
                </div>
                <div class="work-item">
                    <div class="overlay"><span>Dubrovnik</span> </div>
                    <img :src="work2" alt="work showcase">
                </div>
                <div class="work-item">
                    <div class="overlay"><span>Mobile App</span></div>
                    <img :src="work3" alt="work showcase">
                </div>
                <div class="work-item">
                    <div class="overlay"><span>PIMSF</span></div>
                    <img :src="work4" alt="work showcase">
                </div>
            </div>
            <a href="#">See all projects <div class="arrow"></div></a>
        </div>
        <div class="service-navigation">
            <div class="service-navigation-item">
                <div class="overlay"></div>
                <img :src="nav1" alt="first navigation">
                <span><a href="#">Software &amp; App Development <div class="arrow"></div> </a></span>
            </div>
            <div class="service-navigation-item">
                <div class="overlay"></div>
                <img :src="nav2" alt="second navigation">
                <span><a href="#">Product Marketing <div class="arrow"></div> </a></span>
            </div>
        </div>
    </div>
</template>
<script>
import topbanner from '@/assets/topbanner.png';
import work1 from '@/assets/revuto.png'
import work2 from '@/assets/dubrovnik.png'
import work3 from '@/assets/fence.png'
import work4 from '@/assets/app.png'
import nav1 from '@/assets/servicenav1.png'
import nav2 from '@/assets/servicenav2.png'
export default {
    name: 'singleservice',
    data: function() {
        return{
            topbanner,
            work1,
            work2,
            work3,
            work4,
            nav1,
            nav2
        }
    }
}
</script>
<style lang="sass" scoped>
@media screen and (max-width: 768px)
    .topbanner
        height: 20%
    .text-container
        grid-template-columns: 1fr
        width: 90%
        margin: 25% auto auto auto
    .work
        margin: auto
        h2
            margin: 10% auto
        .work-grid
            margin-left: 10%
            grid-template-columns: 1fr
            width: fit-content
            .overlay
                width: 90%
            img
                width: 90%
    .service-navigation
        grid-template-columns: 1fr
@media screen and (min-width: 768px)
    .text-container
        grid-template-columns: 1fr 1fr
        width: 60%
        margin: 35% auto auto auto
    .work
        h2
            margin: auto 50% auto
        .work-grid
            grid-template-columns: 1fr 1fr
            width: 80%
            margin: auto
            .overlay
                width: 80%
            img
                width: 80%
    .service-navigation
        grid-template-columns: 1fr 1fr

.single-service
    .topbanner
        width: 100%
        position: absolute
        top: 0
        z-index: -1
    .text-container
        display: grid
        h4
            font-size: 13px
            color: #2396b4
            letter-spacing: 2px
            font-weight: bold
            width: fit-content
        h2
            font-weight: bold
            font-size: 26px
            width: fit-content
        p
            font-size: 20px
            color: #525252
            width: fit-content
            line-height: 1.5
        ul
            margin-top: 5%
            li
                display: flex
                flex-direction: row
                margin: 22px 0px
                .line
                    width: 11px
                    height: 1px
                    object-fit: contain
                    border: solid 1px #2396b4
                    margin: auto 0px
                span
                    margin: auto 5px
    .work
        margin-top: 5%
        h2
            font-size: 130px
            line-height: 58px
            width: fit-content
        a
            margin: 2% auto
            width: fit-content
            display: flex
            flex-direction: row
            font-weight: bold
            .arrow
                margin: auto 5px
                width: 13px
                height: 13px
                border: 2px solid #1d1d1d
                border-bottom: none
                border-left: none
            .arrow:after
                content: ""
                position: absolute
                border-top: 2px solid #1d1d1d
                width: 15px
                transform: rotate(315deg)
                transform-origin: 0% 0%
                margin-top: 9.5px
        .work-grid
            display: grid
            align-items: center
            .work-item
                position: relative
                margin: 2% 0
            .overlay
                position: absolute
                top: 0
                left: 0
                height: 100%
                opacity: 0
                transition: .4s ease-in-out
                background-color: #2396b4
                span
                    color: white
                    font-weight: bold
                    font-size: 25px
                    position: absolute
                    top: 50%
                    left: 40%
                img
                    margin: auto
            .work-item:hover .overlay
                opacity: 0.9
                cursor: pointer
    .service-navigation
        display: grid
        .service-navigation-item:hover
            cursor: pointer
        .service-navigation-item
            display: flex
            flex-direction: column
            align-items: center
            font-weight: bold
            font-size: 18px
            color: white
            width: fit-content
            position: relative
            span
                position: absolute
                top: 50%
                a
                    color: white
                    text-shadow: 1px 1px 6px rgba(150, 150, 150, 1)
            img
                position: relative
                width: 50vw
                z-index: -1
                width: 100%
                display: block
            .overlay
                position: absolute
                top: 0
                height: 100%
                width: 100%
                opacity: 0
                transition: .4s ease-in-out
                background-color: #2396b4
        .service-navigation-item:hover .overlay
            opacity: 0.9

</style>