<template lang="">
    <div>
        <div class="d-flex flex-column gap-1">
            <label class="text-nowrap label text-muted">Mã nhân viên :</label>
            <el-input 
                v-model="search_value"
                placeholder="Nhập mã nhân viên..."
                @input="$emit('FilterData',{name_field:'employee_code',search_value:search_value});"
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