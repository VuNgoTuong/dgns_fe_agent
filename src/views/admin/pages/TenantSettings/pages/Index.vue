<template lang="">
    <!-- <section>
        <Delete_Modal ref="Delete_Modal"></Delete_Modal>
        <portal to="function-button">
            <li @click="$router.push('/admin/reviews-period/form')">
                <a class="cursor-pointer">
                    <IconPlus :size="32" stroke-width="2"/>
                </a>
            </li>
        </portal>

        <div class="row">
            <div class="col-lg-12">
                <div class="card mb-3">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-lg-3 mb-3">
                                <div class="d-flex flex-column gap-1">
                                    <label class="text-nowrap">Mã NV :</label>
                                    <el-input v-model="input1" placeholder="Please input"></el-input>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="d-flex flex-column gap-1">
                                    <label class="text-nowrap">Tên NV :</label>
                                    <el-input v-model="input1" placeholder="Please input"></el-input>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="d-flex flex-column gap-1">
                                    <label class="text-nowrap">Phòng/Ban :</label>
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
                            <div class="col-lg-3">
                                <div class="d-flex flex-column gap-1">
                                    <label class="text-nowrap">Đơn vị :</label>
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
                            <div class="col-lg-3">
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
                            <div class="col-lg-3">
                                <div class="d-flex flex-column gap-1">
                                    <label class="text-nowrap">Lãnh đạo đánh giá :</label>
                                    <el-input v-model="input1" placeholder="Please input"></el-input>
                                </div>
                            </div>
                            <div class="col-lg-12 mt-4">
                                <div class="d-flex align-items-center justify-content-center">
                                    <button class="btn btn-primary py-2 px-5">
                                        <span class="d-flex align-items-center gap-2">
                                            <IconSearch :size="22" stroke-width="2"/>
                                            <span>Tìm kiếm kỳ đánh giá</span>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-header">
                        <h5>Danh sách kỳ đánh giá</h5><span>Bảng tổng hợp danh sách kỳ đánh giá theo tiêu chí tìm kiếm</span>
                    </div>
                    <div class="table-responsive">
                        <table class="table align-middle">
                            <thead>
                                <tr>
                                    <th scope="col" class="text-center">STT</th>
                                    <th scope="col">Mã NV</th>
                                    <th scope="col">Tên NV</th>
                                    <th scope="col">Phòng ban</th>
                                    <th scope="col">Đơn vị</th>
                                    <th scope="col">Trạng thái</th>
                                    <th scope="col">Lãnh đạo đánh giá</th>
                                    <th scope="col">
                                        <div class="d-flex align-items-center">
                                            <IconDots :size="20" stroke-width="2" />
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, index) in data" :key="index">
                                    <th scope="row" class="text-center">{{index + 1}}</th>
                                    <td>{{item.code}}</td>
                                    <td>{{item.name}}</td>
                                    <td>-</td>
                                    <td>{{item.start_date}}</td>
                                    <td>{{item.end_date}}</td>
                                    <td>
                                        <span class="badge bg-danger p-2">Chưa diễn ra</span>
                                    </td>
                                    <td>
                                        <div class="d-flex gap-1">
                                            <IconPencil :size="28" stroke-width="2" class="d-flex bg-gradient-primary shadow-primary p-1 rounded-3 cursor-pointer" @click="$router.push('/admin/reviews-period/form/1923781932')" />
                                            <IconX :size="28" stroke-width="2" class="d-flex bg-gradient-danger shadow-danger p-1 rounded-3 cursor-pointer" @click="$refs.Delete_Modal._Init()" />
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="p-4 d-flex justify-content-end">
                            <el-pagination background layout="prev, pager, next" :total="1000" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> -->
</template>
<script>
import Icons from '@Admin/common/js/Icons';
import axios from 'axios'
const PATH_API_DATA = import.meta.env.VITE_API_PATH_DATA;
const PATH_API_USER = import.meta.env.VITE_API_PATH_USER;
import Delete_Modal from '../modal/Delete_Modal.vue';
export default {

    data(){
        return {
            token : null,
            data : [],
        }
    },
    async created(){
        await this._Init()
    },
    components : {...Icons,Delete_Modal},
    methods : {
        async _Init(){
            // const current_user = JSON.parse(localStorage.getItem('current_user'));
            const token = localStorage.getItem('token');
            // this.current_user = current_user;
            this.token = await token;
        },
    }
}
</script>
<style lang="scss">


    
</style>