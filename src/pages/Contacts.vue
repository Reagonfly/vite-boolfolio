<script>
import axios from 'axios';
import { store } from '../store';
export default {
    name: 'Contacts',
    data(){
        return{
            store,
            name: '',
            surname: '',
            email: '',
            phone: '',
            message: '',
            errors: null
        }
    },
    methods:{
        sendForm(){
            const data = {
                name: this.name,
                surname: this.surname,
                email: this.email,
                phone: this.phone,
                message: this.message,
                success: false,
            }

            this.loading = true;

            axios.post(`${this.store.baseUrl}/api/contacts`, data).then((response) => {
                if(!this.success){
                    this.errors = response.data.errors
                    this.loading = false;
                }
                else{
                    this.name = '';
                    this.surname = '';
                    this.email = '';
                    this.phone = '';
                    this.message = '';
                    this.success = true;
                    this.loading = false;
                    
                }
            });
        }
    }
}
</script>

<template lang="">
    <div class="container my-2">
        <div class="row">
            <div class="col-12 text-center" v-if="success">
                Message sent Correctly
            </div>
            <div class="col-12">
                <h2 class="text-center">Contacts Page</h2>
            </div>
            <div class="col-12">
                <h4 class="text-center">Contacts Informations</h4>
                <div class="row d-flex justify-content-between">
                    <div class="col-6">
                        <div class="text-center">
                            <i class="fas fa-map"></i> <strong>Adress: </strong> Manhattan Strt. 12312 Napoli City 31097 (NY)
                        </div>
                        <div class="text-center">
                           <i class="fas fa-money-check-dollar"></i> <strong>Accountability code:</strong> 3698431679
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="text-center">
                            <i class="fas fa-phone"></i> <strong>Phone nr: </strong> 9583627410
                        </div>
                        <div class="text-center">
                           <i class="fas fa-paper-plane"></i> <strong>Mail:</strong> howimgonnaphukyou@nowinda.azz
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12">
                <h5 class="text-center my-4">Write us a Mail</h5>
                <form @submit.prevent="sendForm">
                    <div class="row g-3">
                        <div class="col-12 col-md-6 my-2">
                            <label class="control-label" for="name">Name</label>
                            <input type="text" class="form-control" name="name" id="name" placeholder="Name" v-model="name">
                            <div v-if="errors != null" v-for="(error, index) in errors.name" :key="`message-error-${index}`" class="text-danger">
                                {{ error }}
                            </div>
                        </div>
                        <div class="col-12 col-md-6 my-2">
                            <label class="control-label" for="surname">Surname</label>
                            <input type="text" class="form-control" name="surname" id="surname" placeholder="Surname" v-model="surname">
                            <div v-if="errors != null" v-for="(error, index) in errors.surname" :key="`message-error-${index}`" class="text-danger">
                                {{ error }}
                            </div>
                        </div>
                        <div class="col-12 col-md-6 my-2">
                            <label class="control-label" for="email">Email</label>
                            <input type="mail" class="form-control" name="email" id="email" placeholder="Email" v-model="email">
                            <div v-if="errors != null" v-for="(error, index) in errors.email" :key="`message-error-${index}`" class="text-danger">
                                {{ error }}
                            </div>
                        </div>
                        <div class="col-12 col-md-6 my-2">
                            <label class="control-label" for="phone">Phone nr.</label>
                            <input type="phone" class="form-control" name="phone" id="phone" placeholder="Phone nr." v-model="phone">
                            <div v-if="errors != null" v-for="(error, index) in errors.phone" :key="`message-error-${index}`" class="text-danger">
                                {{ error }}
                            </div>
                        </div>
                        <div class="col-12 my-2">
                            <label class="control-label" for="message">Write your Message here</label>
                            <textarea class="form-control" name="message" id="message" placeholder="Message" v-model="message"></textarea>
                            <div v-if="errors != null" v-for="(error, index) in errors.message" :key="`message-error-${index}`" class="text-danger">
                                {{ error }}
                            </div>
                        </div>
                        <div class="col-12 my-2">
                            <button type="submit" class="btn btn-sm btn-secondary px-3" :disabled="loading">{{ loading ? 'sending...' : 'Send'}}</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @use '../styles/generals.scss' as *; 
    
    .container{
        background-color: rgb(24, 81, 185);
    }
    
</style>