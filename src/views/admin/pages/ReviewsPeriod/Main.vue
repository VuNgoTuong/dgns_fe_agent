<template lang="">
    <section>
        <router-view></router-view>
    </section>
</template>
<script>
import Icons from '@Admin/common/js/Icons';
import axios from 'axios'

const PATH_API_DATA = import.meta.env.VITE_API_PATH_DATA;
const PATH_API_USER = import.meta.env.VITE_API_PATH_USER;

export default {

    data(){
        return {
            token : null,
        }
    },
    async created(){
        // await this._Init()
    },
    components : {...Icons},
}
</script>
<style lang="">
    
</style>