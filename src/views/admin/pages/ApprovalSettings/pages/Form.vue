<template lang="">
    <section>
        <portal to="function-button">
            <li @click="$router.push('/admin/reviews-period')">
                <a class="cursor-pointer">
                    <IconChevronLeft :size="32" stroke-width="2"/>
                </a>
            </li>
        </portal>

        <div class="row">
            <div class="col-lg-8 offset-2">
                <div class="card mb-3">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-lg-6 mb-3">
                                <div class="d-flex flex-column gap-1">
                                    <label class="text-nowrap">Mã kỳ :</label>
                                    <el-input v-model="input1" placeholder="Nhập mã kỳ..."></el-input>
                                </div>
                            </div>
                            <div class="col-lg-6 mb-3">
                                <div class="d-flex flex-column gap-1">
                                    <label class="text-nowrap">Tên kỳ :</label>
                                    <el-input v-model="input1" placeholder="Nhập tên kỳ..."></el-input>
                                </div>
                            </div>
                            <div class="col-lg-6 mb-3">
                                <div class="d-flex flex-column gap-1">
                                    <label class="text-nowrap">Đơn vị thực hiện :</label>
                                    <el-select v-model="value" class="w-100" placeholder="Select">
                                        <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value"
                                        />
                                    </el-select>
                                </div>
                            </div>
                            <div class="col-lg-6 mb-3">
                                <div class="d-flex flex-column gap-1">
                                    <label class="text-nowrap">Trạng thái :</label>
                                    <el-select v-model="value" class="w-100" placeholder="Select">
                                        <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value"
                                        />
                                    </el-select>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="d-flex flex-column gap-1">
                                    <label class="text-nowrap">Ngày bắt đầu :</label>
                                    <el-date-picker
                                        type="datetime"
                                        placeholder="Chọn ngày bắt đầu"
                                        format="YYYY/MM/DD HH:mm:ss"
                                        class="w-100"
                                    />
                                </div>
                            </div>
                            <div class="col-lg-6 mb-3">
                                <div class="d-flex flex-column gap-1">
                                    <label class="text-nowrap">Ngày kết thúc :</label>
                                    <el-date-picker
                                        type="datetime"
                                        placeholder="Chọn ngày kết thúc"
                                        format="YYYY/MM/DD HH:mm:ss"
                                        class="w-100"
                                    />
                                </div>
                            </div>
                            <div class="col-lg-12 mb-3">
                                <div class="d-flex flex-column gap-1">
                                    <label class="text-nowrap">Mô tả :</label>
                                    <el-input
                                        :rows="2"
                                        type="textarea"
                                        placeholder="Nhập mô tả..."
                                    />
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="d-flex flex-column gap-1">
                                    <label class="text-nowrap">Thời gian nhân viên thêm mới / chỉnh sửa đánh giá:</label>
                                    <el-input-number class="w-100" v-model="num" :min="1" :max="10"/>
                                </div>
                            </div>
                            <div class="col-lg-12 mt-5">
                                <div class="d-flex align-items-center justify-content-center">
                                    <button class="btn btn-primary py-2 px-5">
                                        <span class="d-flex align-items-center gap-2">
                                            <IconPlus :size="22" stroke-width="2"/>
                                            <span>Thêm mới kỳ đánh giá</span>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import Icons from '@Admin/common/js/Icons';
export default {
    data(){
        return{
            num : 1
        }
    },
    components : {...Icons}
}
</script>
<style lang="">
    
</style>