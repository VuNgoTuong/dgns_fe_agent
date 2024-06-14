<template lang="">

    <div v-if="type == 'reviews-period'" style="width:90px">
        <span class="badge bg-gradient-light p-2 w-100"        v-if="value == 0">Chưa diễn ra</span>
        <span class="badge bg-gradient-success p-2 w-100"     v-if="value == 1">Đang diễn ra</span>
        <span class="badge bg-gradient-danger p-2 w-100"      v-if="value == 2">Đã kết thúc</span>
    </div>

    <div v-if="type == 'list-reviews'" style="width:120px">
        <span class="badge bg-gradient-light p-2 w-100"       v-if="value == 0">Chưa đánh giá</span>
        <span class="badge bg-gradient-primary p-2 w-100"     v-if="value == 1">Đang đánh giá</span>
        <span class="badge bg-gradient-success p-2 w-100"     v-if="value == 2">Đã đánh giá</span>
        <span class="badge bg-gradient-warning p-2 w-100"     v-if="value == 3">Đã duyệt</span>
        <span class="badge bg-gradient-danger p-2 w-100"      v-if="value == 4">Đã kết thúc</span>
    </div>
    
</template>
<script>
export default {
    props : {
        type : String,
        value : Number,
    }
}
</script>
<style lang="">
    
</style>