<template>
    <div class="offices">
        <div class="office-box">
            <h2>London, UK</h2>
            <div class="office-info">
                <span>Vlaška ulica, 70 E</span>
                <a href="mailto:hello@asynclabs.co">hello@asynclabs.co</a>
                <a href="tel:+385994936071">+385994936071</a>
            </div>
        </div>
        <div class="office-box">
            <h2>Zagreb, Croatia</h2>
            <div class="office-info">
                <span>Vlaška ulica, 70 E</span>
                <a href="mailto:hello@asynclabs.co">hello@asynclabs.co</a>
                <a href="tel:+385994936071">+385994936071</a>
            </div>
        </div>
        <div class="office-box">
            <h2>Zagreb, Croatia</h2>
            <div class="office-info">
                <span>Lipovečka, 1</span>
                <a href="mailto:hello@asynclabs.co">hello@asynclabs.co</a>
                <a href="tel:+385994936071">+385994936071</a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"offices"
}
</script>
<style lang="sass" scoped>
@media screen and (max-width: 768px)
    .offices
        flex-direction: column
        .office-box
            width: 75vw
@media screen and (min-width: 768px)
    .offices
        flex-direction: row
        .office-box
            width: 25vw

.offices
    display: flex
    margin: 5% auto
    width: fit-content
    .office-box:hover
        background-color: #1d1d1d
        > * 
            color: white
        .office-info
            a
                color: white
    .office-box
        margin: 15px 15px
        height: 250px
        background-color: #f5f5f5
        display: flex
        flex-direction: column
        color: #525252
        font-size: 18px
        transition: background-color 0.3s, color 0.3s
        h2
            font-size: 24px
            color: #1d1d1d
            padding: 8% 30% 0px 10%  
            width: fit-content
        .office-info
            width: fit-content
            display: flex
            flex-direction: column
            padding: 8% 30% 8% 10%
            > *
                margin: 3px 0px
            a
                color: #525252
</style>