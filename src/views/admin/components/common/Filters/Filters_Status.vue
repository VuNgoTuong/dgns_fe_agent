<template lang="">
    <div>
        <div class="d-flex flex-column gap-1">
            <label class="text-nowrap label text-muted">Trạng thái :</label>
            <el-select v-model="selected" class="w-100" placeholder="Chọn trạng thái..."
            @change="ChangeFilter"
            multiple
            collapse-tags
            collapse-tags-tooltip
            size="small"
            >
                <el-option
                    v-for="item in status"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                />
            </el-select>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            status : [
                {
                    value : 0,
                    label : 'Chưa diễn ra'
                },
                {
                    value : 1,
                    label : 'Đang diễn ra'
                },
                {
                    value : 2,
                    label : 'Đã kết thúc'
                },
            ],
            selected : [],
            search_value : ""
        }
    },
    methods : {
        ChangeFilter(){
            this.$emit('FilterData',{name_field:'status',search_value : this.selected.toString()});
        },
        RemoveFilter(){
            this.search_value = ""
        }
    }
}
</script>
<style lang="">
    
</style>