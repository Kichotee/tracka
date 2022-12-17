<template>
    <v-app>
        
        <div>
              <header>
               
                    <v-toolbar :elevation="25" class="" dense  dark color="#0bcb59">
                        <v-app-bar-nav-icon></v-app-bar-nav-icon>
  
                        <v-toolbar-title class="font-italic text-h4 font-weight-bold text-white pointer">Tracka</v-toolbar-title>

 

                       
                    </v-toolbar>
                    
             
    
                
            </header>
        </div>
        <div class="h-100">
            <slot></slot>
        </div>
        
    </v-app>
</template>

<script setup>
    
</script>

<style lang="scss" scoped>
</style>