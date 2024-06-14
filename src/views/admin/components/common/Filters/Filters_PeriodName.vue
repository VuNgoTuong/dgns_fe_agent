<template lang="">
    <div>
        <div class="d-flex flex-column gap-1">
            <label class="text-nowrap label text-muted">Tên kỳ :</label>
            <el-input 
                v-model="search_value"
                placeholder="Nhập tên kỳ..."
                @input="$emit('FilterData',{name_field:'period_name',search_value:search_value});"
                @keyup.enter="$emit('ApplyEnter')"
                size="small"
            ></el-input>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            search_value : ""
        }
    },
    methods : {
        RemoveFilter(){
            this.search_value = ""
        }
    }
}
</script>
<style lang="">
    
</style>