<template>
  <v-app>
    <HeaderComponent/>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
</script>

<style>
</style>
<!-- package.json dependencies설명
    router : url패턴에 따른 화면을 routing해주도록 하는 툴
    vuetify : 디자인 툴 
    axios : 프론트에서 서버로 http요청을 보내기 위한 툴
    jwt decode : token을 까보기 위한 툴
    sockjs-client : 
    webstomp-client : 채팅을 위한 툴(나중에 설명)--->