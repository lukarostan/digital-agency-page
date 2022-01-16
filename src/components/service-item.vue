<template>
    <div class="container" >
        <div :style="{ 'flex-direction': service.flipped,}" class="images"> <!-- Dynamic style for rendering a component the other direction (text first, then images), can't include it yet as it ruins mobile view -->
            <img v-for="image in service.images"
            :key="image.id"
            :src="image.link" 
            :style="image.imgMargin"
            alt="service image">
        </div>
        <ul class="service-info">
            <li><h2>{{ service.title }}</h2></li>
            <li><p>{{ service.paragraph }}</p></li>
            <li v-for="feature in service.features "
                :key="feature.id"
            ><div class="line"></div><span>{{feature.content}}</span></li>
            <li><button type="button" onclick="location.href='#/singleservice'">View Service</button></li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'service-item',
    props:['service']
}

</script>
<style lang="sass" scoped>
@media screen and (max-width: 768px)
    .container
        margin: 0
        flex-direction: column
        .images
            width: fit-content
            img:nth-of-type(1)
                width: 100%
                
            img:nth-of-type(2)
                display: none
        .service-info
            width: 90%
            margin: 0px 5%
            p
                width: 95%
@media screen and (min-width: 768px)
    .container
        margin: 5% 15%
        .flipped
            flex-direction: row-reverse
        .images
            img:nth-of-type(1)
                height: 500px
        .service-info
            width: 35%
            margin: 0px 30%
            p
                width: 439px

.container
    display: flex
    .images
        display: flex
        img
            position: relative
        img:nth-of-type(1)
            z-index: 1
        img:nth-of-type(2)
            height: 292px
            margin-left: -100px
            margin-top: -100px
    .service-info
        display: flex
        flex-direction: column
        > *
            margin: 10px
        li
            display: flex
            flex-direction: row
            span
                letter-spacing: 2px
                color: #1d1d1d
                font-weight: bold
                margin: 10px 10px
            button
                width: 220px
                height: 60px
                margin: 10px 0
                background-color: #1d1d1d
                color: white
                font-size: 18px
                font-weight: bold
                border: none
                
            button:hover
                cursor: pointer
        h2
            font-size: 46px
        p
            color: #525252
            font-size: 20px
            line-height: 30px
        .line
            width: 11px
            height: 1px
            object-fit: contain
            border: solid 1px #2396b4
            margin: auto 0px
</style>