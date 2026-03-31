<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="12" sm="4" md="6">
                <v-card>
                    <v-card-title class="text-h5 text-center">로그인</v-card-title>
                       <v-card-text>
                    <v-form @submit.prevent="memberLogin">
                        <v-text-field
                        label="이메일"
                        v-model="email"
                        type="email"
                        required>
                        </v-text-field>
                                                <v-text-field
                        label="비밀번호"
                        v-model="password"
                        type="password"
                        required>
                        </v-text-field>
                        <v-btn type="submit" color="primary" block>
                            등록
                        </v-btn>
                    </v-form>
                </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import axios from 'axios';
export default{
    data(){
        return{
            email:"",
            password:"",
        }
    },
    methods:{
       async memberLogin(){
            const data = {
                email : this.email,
                password : this.password
            }
            const response = await axios.post("http://localhost:8081/member/doLogin", data);
            console.log(response);
       }
    }
}
</script>