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
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-header pb-0 px-0">
                        <el-steps :space="200" :active="step" finish-status="success" simple>
                            <el-step title="Bước 1" class="cursor-pointer"/>
                            <el-step title="Bước 2" class="cursor-pointer"/>
                            <el-step title="Bước 3" class="cursor-pointer"/>
                        </el-steps>
                    </div>
                    <div class="card-body">
                        <div v-if="step == 0" class="row">
                            <div class="col-lg-6 mb-3">
                                <div class="d-flex flex-column gap-1">
                                    <label class="text-nowrap label-require">Mã kỳ đánh giá:</label>
                                    <div class="position-relative d-flex align-items-center justify-content-end">
                                        <el-input v-model="data.period_code" placeholder="Nhập mã kỳ..." @blur="v$.data.period_code.$touch()"></el-input>
                                        <div class="position-absolute me-2" v-if="v$.data.period_code.$error">
                                            <el-popover
                                                placement="top-start"
                                                :width="300"
                                                trigger="hover"
                                            >
                                            <p class="text-danger m-0" v-for="error of v$.data.period_code.$errors">-&nbsp;{{error.$message}}</p>
                                                <template #reference>
                                                    <IconAlertCircleFilled :size="22" class="d-flex text-danger cursor-pointer" stroke-width="2"/>
                                                </template>
                                            </el-popover>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 mb-3">
                                <div class="d-flex flex-column gap-1">
                                    <label class="text-nowrap label-require">Tên kỳ đánh giá:</label>
                                    <div class="position-relative d-flex align-items-center justify-content-end">
                                        <el-input v-model="data.period_name" placeholder="Nhập tên kỳ đánh giá..." @blur="v$.data.period_name.$touch()"></el-input>
                                        <div class="position-absolute me-2" v-if="v$.data.period_name.$error">
                                            <el-popover
                                                placement="top-start"
                                                :width="300"
                                                trigger="hover"
                                            >
                                            <p class="text-danger m-0" v-for="error of v$.data.period_name.$errors">-&nbsp;{{error.$message}}</p>
                                                <template #reference>
                                                    <IconAlertCircleFilled :size="22" class="d-flex text-danger cursor-pointer" stroke-width="2"/>
                                                </template>
                                            </el-popover>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            
                            <div class="col-lg-6 mb-3">
                                <div class="d-flex flex-column gap-1">
                                    <label class="text-nowrap">Trạng thái :</label>           
                                    <div class="position-relative d-flex align-items-center justify-content-end">
                                        <el-select v-model="data.status" class="w-100" placeholder="Chọn trạng thái..." @blur="v$.data.status.$touch()">
                                            <el-option
                                            v-for="item in status"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value"
                                            />
                                        </el-select>
                                        <div class="position-absolute me-2" v-if="v$.data.status.$error">
                                            <el-popover
                                                placement="top-start"
                                                :width="300"
                                                trigger="hover"
                                            >
                                            <p class="text-danger m-0" v-for="error of v$.data.status.$errors">-&nbsp;{{error.$message}}</p>
                                                <template #reference>
                                                    <IconAlertCircleFilled :size="22" class="d-flex text-danger cursor-pointer" stroke-width="2"/>
                                                </template>
                                            </el-popover>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="d-flex flex-column gap-1">
                                    <label class="text-nowrap">Ngày bắt đầu :</label>
                                    <div class="position-relative d-flex align-items-center justify-content-end">
                                        <el-date-picker
                                            type="date"
                                            placeholder="Chọn ngày bắt đầu"
                                            format="DD/MM/YYYY"
                                            value-format="YYYY/MM/DD"
                                            class="w-100"
                                            v-model="data.start_date"
                                            @blur="v$.data.start_date.$touch()"
                                        />
                                        <div class="position-absolute me-2" v-if="v$.data.start_date.$error">
                                            <el-popover
                                                placement="top-start"
                                                :width="300"
                                                trigger="hover"
                                            >
                                            <p class="text-danger m-0" v-for="error of v$.data.start_date.$errors">-&nbsp;{{error.$message}}</p>
                                                <template #reference>
                                                    <IconAlertCircleFilled :size="22" class="d-flex text-danger cursor-pointer" stroke-width="2"/>
                                                </template>
                                            </el-popover>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 mb-3">
                                <div class="d-flex flex-column gap-1">
                                    <label class="text-nowrap">Ngày kết thúc :</label>
                                    <div class="position-relative d-flex align-items-center justify-content-end">
                                        <el-date-picker
                                            type="date"
                                            placeholder="Chọn ngày kết thúc"
                                            format="DD/MM/YYYY"
                                            value-format="YYYY/MM/DD"
                                            class="w-100"
                                            v-model="data.end_date"
                                            @blur="v$.data.end_date.$touch()"
                                        />
                                        <div class="position-absolute me-2" v-if="v$.data.end_date.$error">
                                            <el-popover
                                                placement="top-start"
                                                :width="300"
                                                trigger="hover"
                                            >
                                            <p class="text-danger m-0" v-for="error of v$.data.end_date.$errors">-&nbsp;{{error.$message}}</p>
                                                <template #reference>
                                                    <IconAlertCircleFilled :size="22" class="d-flex text-danger cursor-pointer" stroke-width="2"/>
                                                </template>
                                            </el-popover>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="d-flex flex-column gap-1">
                                    <label class="text-nowrap">Ngày kết thúc tự đánh giá:</label>
                                    <div class="position-relative d-flex align-items-center justify-content-end">
                                        <el-date-picker
                                            type="date"
                                            placeholder="Chọn ngày kết thúc"
                                            format="DD/MM/YYYY"
                                            value-format="YYYY/MM/DD"
                                            class="w-100"
                                            v-model="data.period_duration"
                                            @blur="v$.data.period_duration.$touch()"
                                        />
                                        <div class="position-absolute me-2" v-if="v$.data.period_duration.$error">
                                            <el-popover
                                                placement="top-start"
                                                :width="300"
                                                trigger="hover"
                                            >
                                            <p class="text-danger m-0" v-for="error of v$.data.period_duration.$errors">-&nbsp;{{error.$message}}</p>
                                                <template #reference>
                                                    <IconAlertCircleFilled :size="22" class="d-flex text-danger cursor-pointer" stroke-width="2"/>
                                                </template>
                                            </el-popover>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class="col-lg-12 mb-3">
                                <div class="d-flex flex-column gap-1">
                                    <label class="text-nowrap">Mô tả :</label>
                                    <el-input
                                        :rows="2"
                                        type="textarea"
                                        placeholder="Nhập mô tả cho kỳ đánh giá..."
                                        v-model="data.description"
                                    />
                                </div>
                            </div>
                            
                            <!-- <div class="col-lg-12 mt-5">
                                <div class="d-flex align-items-center justify-content-center">
                                    <button v-if="update" class="btn btn-primary py-2 px-5" @click="UpdateData">
                                        <span class="d-flex align-items-center gap-2">
                                            <IconPlus :size="22" stroke-width="2"/>
                                            <span>Cập nhật kỳ đánh giá</span>
                                        </span>
                                    </button>

                                    <button v-else class="btn btn-primary py-2 px-5" @click="CreateData">
                                        <span class="d-flex align-items-center gap-2">
                                            <IconPlus :size="22" stroke-width="2"/>
                                            <span>Thêm mới kỳ đánh giá</span>
                                        </span>
                                    </button>
                                </div>
                            </div> -->
                        </div>
                        <div v-if="step == 1">
                            <div class="table-responsive custom-scrollbar" style="max-height:40vh;">
                                <el-table
                                    :data="tenant"
                                    row-key="id"
                                    class="table-striped"
                                    :header-row-style="{color:'#242934'}"
                                    v-if="data"
                                    size="small"
                                    :border="true"
                                    :default-expand-all="true"
                                    :fit="true"
                                >
                                    <el-table-column prop="name" label="Tên đơn vị" class="pe-5" class-name="ps-3"/>
                                    <el-table-column align="center" prop="approver" width="200px" label="Người phê duyệt" />
                                    <el-table-column prop="approver" label="..." width="150px" align="center">
                                        <template #default="scope">
                                            <el-checkbox-group class="hide-label" :disabled="!(scope.row.children.length < 1 && scope.row.tenant_parent_id !== '00000000-0000-0000-0000-000000000000')" v-model="data.lstTenantId" >
                                                <el-checkbox :label="scope.row.id">&nbsp;</el-checkbox>
                                            </el-checkbox-group>
                                        </template>
                                    </el-table-column>
                                </el-table>
                            </div>
                        </div>

                        <div v-if="step == 2">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="card border-0" v-if="user.length > 0">
                                        <div class="table-responsive custom-scrollbar">
                                            <table class="table table-xs align-middle table-borderless align-middle z-custom-table ">
                                                <thead>
                                                    <tr>
                                                        <th width="2%" class="text-center px-1">STT</th>
                                                        <th width="10%" class="px-1">Tên NV</th>
                                                        <th width="3%">
                                                            <div class="d-flex align-items-center justify-content-center">
                                                                <IconDots :size="20" stroke-width="2" />
                                                            </div>
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr v-for="(item, index) in user" :key="index">
                                                        <td scope="row" class="text-center px-2">
                                                            <span v-if="paginate.page <= 1">{{ index + 1 }}</span>
                                                            <span v-else>{{ (paginate.page - 1) * paginate.limit + index + 1 }}</span>
                                                        </td>
                                                        <td class="text-nowrap px-1">
                                                            <div class="fw-bold">{{item.fullname}}</div>
                                                            <div>
                                                                {{item.tenDonVi}} / {{item.tenPhongBan}}
                                                            </div>
                                                        </td>
                                                        <td class="align-middle text-center">
                                                            <el-switch
                                                                size="small"
                                                                v-model="user[index].selected"
                                                                :active-value="true"
                                                                style="--el-switch-on-color: #00529c; --el-switch-off-color: #c6d1df"
                                                            />
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div class="p-3 d-flex align-items-center">
                                            <small class="text-nowrap flex-grow-1">Hiển thị {{user.length}} trên tổng {{paginate.total}} Kết quả</small>
                                            <el-pagination 
                                            background 
                                            :page-sizes="[5, 10, 50, 100]"
                                            layout="sizes, prev, pager, next" 
                                            :total="paginate.total"
                                            @size-change="PaginationSizeChange"
                                            @current-change="Pagination" 
                                            small />
                                        </div>
                                    </div>
                                    <div v-else class="rounded-3 d-flex align-items-center justify-content-center" style="min-height:250px; background:#f5f7fa">
                                        <div class="d-flex flex-column justify-content-center align-items-center">
                                            <img src="/images/empty-folder.png" width="100">
                                            <p class="fw-normal text-uppercase" style="color:#9fadbd">Không tìm thấy người dùng</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer py-3">
                        <div class="d-flex gap-2 justify-content-end">
                            <button class="btn bg-light text-dark py-2 px-5" v-if="step > 0" @click="BackStep">
                                <span class="d-flex align-items-center gap-2">
                                    <IconChevronLeft :size="22" stroke-width="2"/>
                                    <span>Quay lại</span>
                                </span>
                            </button>
                            <button v-if="step < 2" class="btn btn-primary py-2 px-5" @click="NextStep">
                                <span class="d-flex align-items-center gap-2">
                                    <span>Bước tiếp theo</span>
                                    <IconChevronRight :size="22" stroke-width="2"/>
                                </span>
                            </button>
                            <button v-if="step >= 2 && !update" class="btn btn-primary py-2 px-5" @click="CreateData">
                                <span class="d-flex align-items-center gap-2">
                                    <IconPlus :size="22" stroke-width="2"/>
                                    <span>Tạo kỳ đánh giá</span>
                                </span>
                            </button>
                            <button v-if="step >= 2 && update" class="btn btn-primary py-2 px-5" @click="UpdateData">
                                <span class="d-flex align-items-center gap-2">
                                    <IconPlus :size="22" stroke-width="2"/>
                                    <span>Cập nhật kỳ đánh giá</span>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- <div class="row">
            <div class="col-lg-8 offset-2">
                <div class="card mb-3">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-lg-6 mb-3">
                                <div class="d-flex flex-column gap-1">
                                    <label class="text-nowrap label-require">Mã kỳ đánh giá:</label>
                                    <el-input v-model="data.period_code" placeholder="Nhập mã kỳ..."></el-input>
                                </div>
                            </div>
                            <div class="col-lg-6 mb-3">
                                <div class="d-flex flex-column gap-1">
                                    <label class="text-nowrap label-require">Tên kỳ đánh giá:</label>
                                    <el-input v-model="data.period_name" placeholder="Nhập tên kỳ đánh giá..."></el-input>
                                </div>
                            </div>
                            <div class="col-lg-6 mb-3">
                                <div class="d-flex flex-column gap-1">
                                    <label class="text-nowrap label-require">Đơn vị thực hiện :</label>
                                    <el-select
                                    v-model="data.tenant_id"
                                    class="w-100"
                                    multiple
                                    collapse-tags
                                    collapse-tags-tooltip
                                    placeholder="Chọn đơn vị thực hiện..."
                                    style="width: 240px"
                                    >
                                    <el-option
                                        v-for="item in tenant"
                                        :key="item.id"
                                        :label="item.tenant_name"
                                        :value="item.id"
                                    />
                                    </el-select>
                                    
                                </div>
                            </div>
                            <div class="col-lg-6 mb-3">
                                <div class="d-flex flex-column gap-1">
                                    <label class="text-nowrap">Trạng thái :</label>
                                    <el-select v-model="data.status" class="w-100" placeholder="Chọn trạng thái...">
                                        <el-option
                                        v-for="item in status"
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
                                        type="date"
                                        placeholder="Chọn ngày bắt đầu"
                                        format="DD/MM/YYYY"
                                        value-format="YYYY/MM/DD"
                                        
                                        class="w-100"
                                        v-model="data.start_date"
                                    />
                                </div>
                            </div>
                            <div class="col-lg-6 mb-3">
                                <div class="d-flex flex-column gap-1">
                                    <label class="text-nowrap">Ngày kết thúc :</label>
                                    <el-date-picker
                                        type="date"
                                        placeholder="Chọn ngày kết thúc"
                                        format="DD/MM/YYYY"
                                        value-format="YYYY/MM/DD"
                                        class="w-100"
                                        v-model="data.end_date"
                                    />
                                </div>
                            </div>
                            <div class="col-lg-12 mb-3">
                                <div class="d-flex flex-column gap-1">
                                    <label class="text-nowrap">Mô tả :</label>
                                    <el-input
                                        :rows="2"
                                        type="textarea"
                                        placeholder="Nhập mô tả cho kỳ đánh giá..."
                                        v-model="data.description"
                                    />
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="d-flex gap-3 align-items-center">
                                    <label class="text-nowrap">Ngày kết thúc tự đánh giá:</label>
                                    <el-date-picker
                                        type="date"
                                        placeholder="Chọn ngày kết thúc"
                                        format="DD/MM/YYYY"
                                        value-format="YYYY/MM/DD"
                                        class="w-100"
                                        v-model="data.period_duration"
                                    />
                                </div>
                            </div>
                            <div class="col-lg-12 mt-5">
                                <div class="d-flex align-items-center justify-content-center">
                                    <button v-if="update" class="btn btn-primary py-2 px-5" @click="UpdateData">
                                        <span class="d-flex align-items-center gap-2">
                                            <IconPlus :size="22" stroke-width="2"/>
                                            <span>Cập nhật kỳ đánh giá</span>
                                        </span>
                                    </button>

                                    <button v-else class="btn btn-primary py-2 px-5" @click="CreateData">
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
        </div> -->
    </section>
</template>
<script>
import Icons from '@Admin/common/js/Icons';
import axios from 'axios';
import {ShowToast} from '@Helpers/Notify.js'
const PATH_API_DATA = import.meta.env.VITE_API_PATH_DATA;
const PATH_API_USER = import.meta.env.VITE_API_PATH_USER;
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';

import { useVuelidate } from '@vuelidate/core'
import { required, email, alpha, numeric, helpers } from '@vuelidate/validators'

dayjs.extend(isBetween);
export default {
    setup () {
        return { v$: useVuelidate() }
    },
    data(){
        return{
            step : 0,
            id : null,
            num : 1,
            data : {
                lstTenantId : [],
                lstEmployeeId : [],
            },
            update : false,
            tenant : [],
            status : [
                {
                    value : 0,
                    label : 'Chưa diễn ra',
                },
                {
                    value : 1,
                    label : 'Đang diễn ra',
                },
                {
                    value : 2,
                    label : 'Đã kết thúc',
                },
            ],

            filter : {
                request : {
                    start_time : null,
                    end_time : null,
                },
                search_list : []
            },
            paginate : {
                total : 0,
                page : 1,
                limit : 10,
            },
            current_user : [],
            user : [],
        }
    },
    validations () {
        return {
            data: {
                period_code: {required: helpers.withMessage('Dữ liệu không được trống', required)},
                period_name: {required: helpers.withMessage('Dữ liệu không được trống', required)},
                status: {required: helpers.withMessage('Dữ liệu không được trống', required)},
                start_date: {
                    required: helpers.withMessage('Dữ liệu không được trống', required),
                    valid : helpers.withMessage('Ngày không hợp lệ. Vui lòng nhập theo định dạng DD-MM-YYYY.',this.isValidDate)
                },
                end_date: {
                    required: helpers.withMessage('Dữ liệu không được trống', required),
                    valid : helpers.withMessage('Ngày không hợp lệ. Vui lòng nhập theo định dạng DD-MM-YYYY.',this.isValidDate)
                },
                period_duration: {
                    required: helpers.withMessage('Dữ liệu không được trống', required),
                    valid : helpers.withMessage('Ngày không hợp lệ. Vui lòng nhập theo định dạng DD-MM-YYYY.',this.isValidDate),
                },
            }
        }
    },
    async created(){
        await this._Init()
        if(this.$route.params.id || this.$route.params.id === 0){
            this.update = true
            this.id = this.$route.params.id
            this.GetAllTenant()
            this.GetUpdateData()
        }
    },
    methods : {
        async _Init(){
            const authorize = localStorage.getItem('authorize');
            this.authorize = await JSON.parse(authorize)
            // const current_user = JSON.parse(localStorage.getItem('current_user'));
            // this.current_user = current_user;
            await this.GetAllTenant()
        },

        CheckDateDuration(){
            if(this.data.start_date || this.data.start_date === 0){
                if(this.data.end_date || this.data.end_date === 0){
                    if(this.data.period_duration || this.data.period_duration === 0){
                        let check_duration = dayjs(this.data.period_duration).isBetween(this.data.start_date, this.data.end_date, null, '[)')
                        if(check_duration){
                            return true;
                        }else{
                            ShowToast({status_code : 401, message : 'Ngày kết thúc tự đánh giá phải nằm trong phạm vi bắt đầu và kết thúc'})
                            return false;
                        }
                    }else{
                        ShowToast({status_code : 401, message : 'Chưa nhập ngày kết thúc tự đánh giá'})
                        return false;
                    }
                }else{
                    ShowToast({status_code : 401, message : 'Chưa nhập ngày kết thúc'})
                    return false;
                }
            }else{
                ShowToast({status_code : 401, message : 'Chưa nhập ngày bắt đầu'})
                return false;
            }
        },

        GetAllTenant(){
            const params = {
                page            : 0,
                limit           : 0,
                sorts           : [],
                search_list     : [],
                flag            : true
            }
            let config = {headers: {Authorization: `Bearer ${this.authorize.token}`}}
            axios.post(PATH_API_USER + '/tenant/get-all-with-user-approver',params,config)
            .then(async res =>{
                var data = await res.data.data.items
                this.tenant = await this.processWaterfall(data, "00000000-0000-0000-0000-000000000000");
            })
            .catch(err => {
                ShowToast({status_code : 401, message : 'Không lấy được danh sách đơn vị'})
                console.error(err); 
            })
        },


        processWaterfall(arr, parentId) {
            const filteredItems = arr.filter(item => item.tenant_parent_id === parentId);
            const result = filteredItems.map((item,key) => {
                const children = this.processWaterfall(arr, item.id);
                return { 
                    // ...item,
                    id : item.id,
                    date : item.create_time,
                    name : item.tenant_name,
                    address : item.modify_by,
                    approver : item.appprover_Name,
                    tenant_parent_id : item.tenant_parent_id,
                    children 
                };
            });
            return result;
        },

        async NextStep(){
            this.v$.data.$touch();


            if(this.step == 0){
                if(this.CheckDateDuration()){
                    let validate = await this.v$.$validate()
                    if(validate){
                        this.step = this.step + 1
                    }else{
                        ShowToast({status_code : 401, message : 'Dữ liệu chưa chính xác'})
                    }
                }
            }else{
                this.step = this.step + 1
            }

            if(this.step == 2){
                this.GetUserData();
            }

        },

        BackStep(){
            this.step = this.step - 1
        },

        GetUpdateData(){
            const params = {
                item : this.id
            }
            let config = {headers: {Authorization: `Bearer ${this.authorize.token}`}}
            axios.post(PATH_API_DATA + '/period-review/get-by-id',params,config)
            .then(async res => {
                let data = await res.data.data
                data.start_date ? data.start_date = dayjs(data.start_date).format('YYYY/MM/DD') : ''
                data.end_date ? data.end_date = dayjs(data.end_date).format('YYYY/MM/DD') : ''
                data.period_duration ? data.period_duration = dayjs(data.period_duration).format('YYYY/MM/DD') : ''
                this.data = data
            })
            .catch(err => {
                ShowToast({status_code : 401, message : 'Lấy dữ liệu thất bại'})
                console.error(err); 
            })
        },

        async CreateData(){
            let params = this.data
            params.lstEmployeeId = await this.user.filter(item => item.selected == true).map(item => item.employee_id);
            let config = {headers: {Authorization: `Bearer ${this.authorize.token}`}}
            console.log(params)
            axios.post(PATH_API_DATA + '/period-review/create',params,config)
            .then(res => {
                ShowToast({status_code : 200, message : 'Tạo kỳ đánh giá thành công'})
                setTimeout(() => {
                    this.$router.push('/admin/reviews-period')
                }, 1000);
            })
            .catch(err => {
                ShowToast({status_code : 401, message : 'Tạo kỳ đánh giá thất bại'})
                console.error(err); 
            })
        },

        async UpdateData(){
            const params = this.data
            params.lstEmployeeId = await this.user.filter(item => item.selected == true).map(item => item.employee_id);
            let config = {headers: {Authorization: `Bearer ${this.authorize.token}`}}
            axios.post(PATH_API_DATA + '/period-review/update',params,config)
            .then(res => {
                ShowToast({status_code : 200, message : 'Cập nhật kỳ đánh giá thành công'})
                setTimeout(() => {
                    this.$router.push('/admin/reviews-period')
                }, 800);
            })
            .catch(err => {
                ShowToast({status_code : 401, message : 'Cập nhật kỳ đánh giá thất bại'})
                console.error(err); 
            })
        },


        GetUserData(){
            let data = this.data.lstTenantId
            if(data && data.length > 0){
                const params = {
                    lstTenantId : data.toString(),
                }
                let config = {headers: {Authorization: `Bearer ${this.authorize.token}`}}
                axios.post(PATH_API_USER + '/user/get-all-user-by-tenant-id',params,config)
                .then(async res => {
                    let user = await res.data.data.items
                    if(this.$route.params.id || this.$route.params.id === 0){
                        user.map(item => {
                            this.data.lstEmployeeId.includes(item.employee_id) ? item.selected = true : item.selected = false
                        })
                    }else{
                        user.map(item => item.selected = true)
                    }
                    this.user = this.user.filter(objB => user.some(objA => objA.employee_id === objB.employee_id));
                    user.forEach(objA => {
                        if (!this.user.some(objB => objB.employee_id === objA.employee_id)) {
                            this.user.push(objA);
                        }
                    });
                })
            }
        },
        isValidDate(value) {
            return dayjs(value, 'YYYY/MM/DD', true).isValid();
        }
    },
    components : {...Icons}
}
</script>
<style lang="">
    
</style>