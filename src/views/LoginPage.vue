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
            const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/member/doLogin`, data);
            localStorage.setItem("token", response.data.token);
            // 화면전체에 새로고침이 발생하는 라우팅방식.
            // 특징1. 화면상에 모든 컴포넌트가 새롭게 created 
            // 특징2. 화면에 깜빡임으로 인해 사용자경험이 떨어질 수 있음.
            window.location.href="/";
       }
    }
}
</script>