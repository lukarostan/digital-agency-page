<template>
    <div class="container">
        <div class="hero-text">
            <div class="hero-title">
                <h1>Let's talk</h1>
                <h1>Contact</h1>
            </div>
            <p>Deep light land beginning form fish there brought fifth 
                forth earth us make cattle seasons every spirit one can't 
                behold, creepeth fish thing male his him.</p>
        </div>
        <div class="form-container">
            <form @submit.prevent="formSubmit">
                <div class="form-grid">
                    <div class="form-item">
                        <input class="input-field" type="text" v-model="name" name="name">
                        <span v-if="!$v.name.$required && $v.name.$dirty">NAME REQUIRED</span>
                        <label for="name">Your name*</label>
                    </div>
                    <div class="form-item">
                        <input class="input-field" type="email" v-model="email" name="email">
                        <label for="email">Email address*</label>
                        <span v-if="!$v.email.$required  && $v.email.$dirty">Email is required</span>
                    </div>
                    <div class="form-item">
                        <input class="input-field" type="number" v-model="phone" name="phone">
                        <label for="phone">Phone number</label>
                    </div>
                    <div class="form-item">
                        <input class="input-field" type="text" v-model="company" name="company">
                        <label for="company">Company</label>
                    </div> 
                </div>
                <div class="form-item">
                    <input class="input-field" type="text" v-model="title" name="title*">
                    <span v-if="!$v.title.$required && $v.title.$dirty">title is required</span>
                    <label for="title">Title*</label>
                </div>
                <div class="form-item">
                    <textarea class="input-field" name="message" id="" cols="30" rows="10" ></textarea>
                    <span v-if="!$v.message.$required && $v.message.$dirty">message is required</span>
                    <label for="message">Message*</label>
                </div>
                <input type="submit" class="btn-submit">
            </form>
        </div>
    <offices/>
    </div>
    
</template>
<script>
import { required, email } from 'vuelidate/lib/validators'
import offices from './offices.vue'
export default {
    name: "contact",
    components:{
        offices,
    },
    data: function() {
        return{
            name: '',
            email: '',
            phone: '',
            company: '',
            title: '',
            message: ''
        }
    },
    validations: {
        name: {
            required,
        },
        email: {
            required,
            email
        },
        phone: {
            
        },
        company: {
        },
        title: {
            required, 
        },
        message: {
            required,
        }
    },
    methods: {
        formSubmit(){
            console.log("fun")
            this.$v.$touch();
            if(!this.$v.$invalid){
                alert("submit success");
            }
        }
    }
}
</script>
<style lang="sass" scoped>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button 
    -webkit-appearance: none
    margin: 0
/* Firefox */
input[type=number] 
    -moz-appearance: textfield

@media screen and (max-width: 768px)
    .form-grid
        grid-template-columns: 1fr
@media screen and (min-width: 768px)
    .hero-text
        p
            width: 50%
    .form-grid
        grid-template-columns: 1fr 1fr
        width: 92%
        margin: auto
    

@media screen and (max-width: 1200px)
    .hero-title
        h1:nth-of-type(2)
            display: none

.container
    display: flex
    flex-direction: column
    margin: auto
    .hero-text
        margin: 5% auto
        width: 85%
        .hero-title
            display: flex 
            flex-direction: row
            width: fit-content
            h1
                font-size: 4.3rem
                line-height: 5.2rem
                color: #1d1d1d
                margin: 40px 0px
                width: fit-content
            h1:nth-of-type(2)
                -webkit-text-stroke: 1px #e5e5e5
                -webkit-text-fill-color: white
                position: absolute
                left: 80%
                font-size: 130px
        p
            font-size: 20px
            line-height: 30px
            color: #525252
    .form-container
        width: 90%
        height: fit-content
        background-color: #f5f5f5
        margin: 0px auto
        .form-item
            display: flex
            width: 85%
            margin: auto
            flex-direction: column-reverse
            span
                color: red
        label
            position: relative
            top: 40px
            font-weight: bold
            transition: transform .3s, font-size .3s, color .3s
        .input-field
            background-color: transparent
            border: none
            border-bottom: 1px solid #d6d6d6
            margin: 15px 0px
            font-size: 16px
            font-weight: bold
            padding: 12px 0px
            z-index: 2
        .input-field:focus 
            outline: none
        .input-field:focus + label
            animation: shrink-label 300ms
            -webkit-animation: shrink-label 300ms
            animation-fill-mode: forwards
        form
            display: flex
            flex-direction: column
            margin: 10px auto
            .btn-submit
                width: 220px
                height: 60px
                margin: 10px auto
                background-color: #1d1d1d
                color: white
                font-size: 18px
                font-weight: bold
                border: none
        .form-grid
            display: grid
            input
                margin: 10px 0px 
@keyframes shrink-label
    100%
        transform: translateY(-35px)
        font-size: 12px
        color: #b3b3b3
    0%
        transform: translateY(0px)
        font-size: 16pxpx
        color: #1d1d1d

</style>