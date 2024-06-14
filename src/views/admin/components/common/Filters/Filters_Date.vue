<template lang="">
    <div>
        <div class="d-flex flex-column gap-1">
            <label class="text-nowrap label text-muted">Ngày bắt đầu :</label>
            <el-date-picker
                v-model="search_value"
                range-separator="Đến"
                type="daterange"
                start-placeholder="Ngày bắt đầu"
                end-placeholder="Ngày kết thúc"
                unlink-panels
                class="w-100"
                size="small"
                @change="ChangeFilter"
                value-format="YYYY-MM-DD"
                format="DD-MM-YYYY"
            />
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
        ChangeFilter(){
            this.$emit('FilterData',{name_field:'start_date',search_value : this.search_value[0]});
            this.$emit('FilterData',{name_field:'end_date',search_value : this.search_value[1]});
        },

        RemoveFilter(){
            this.search_value = ""
        }
    }
}
</script>
<style lang="">
    
</style>