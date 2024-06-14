<template lang="">
    <div>
        <div class="d-flex flex-column gap-1">
            <label class="text-nowrap label text-muted">Người phê duyệt :</label>
            <el-input 
                v-model="search_value"
                placeholder="Nhập tên người phê duyệt..."
                @input="$emit('FilterData',{name_field:'tenLanhDao',search_value : search_value})"
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