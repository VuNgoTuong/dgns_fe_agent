<template lang="">
    <section>
        <portal to="function-button">
            <li @click="$router.push('/admin/employee-reviews')">
                <a class="cursor-pointer">
                    <IconChevronLeft :size="32" stroke-width="2"/>
                </a>
            </li>
        </portal>

        <portal to="footer-area">
            <button class="btn btn-primary" @click="SentReviews">Gửi đánh giá</button>
        </portal>

        <div class="row" v-if="data && data.dataThongTinNV">
            <div class="col-lg-12">
                <div class="card mb-3">
                    <div class="card-header border-bottom p-3">
                        <h6 class="mb-0" style="font-size:13px">THÔNG TIN NHÂN SỰ</h6>
                    </div>
                    <div class="card-body p-3 d-flex align-items-center gap-3">
                        <div class="text-center d-flex justify-content-center" style="width:120px">
                            <div class="rounded-circle overflow-hidden" style="height:80px; width:80px">
                                <img src="/images/avatar-default.webp" class="w-100 h-100 object-fit-contain" alt="">
                            </div>
                        </div>
                        <div class="row g-2 flex-grow-1">
                            <div class="col-lg-4">
                                <div class="d-flex flex-column gap-1">
                                    <small class="text-nowrap pb-0">Họ và tên:</small>
                                    <el-input size="small" v-model="data.dataThongTinNV.fullname" placeholder="Nhập họ và tên..."  disabled readonly></el-input>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="d-flex flex-column gap-1">
                                    <small class="text-nowrap">Chức danh hiện tại:</small>
                                    <el-input size="small" v-model="data.dataThongTinNV.chucDanh" placeholder="Nhập chức danh hiện tại..." class="w-100"></el-input>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="d-flex flex-column gap-1">
                                    <small class="text-nowrap pb-0">Ngày vào công ty:</small>
                                    <el-date-picker
                                        v-model="data.dataThongTinNV.ngayVao"
                                        type="date"
                                        placeholder="Nhập ngày vào công ty..."
                                        class="w-100"
                                        size="small"
                                    />
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="d-flex flex-column gap-1">
                                    <small class="text-nowrap pb-0">Phòng ban/bộ phận:</small>
                                    <el-input size="small" v-model="data.dataThongTinNV.tenPhongBan" placeholder="Chọn phòng ban/bộ phận..."></el-input>
                                </div>
                            </div>

                            <div class="col-lg-4">
                                <div class="d-flex flex-column gap-1">
                                    <small class="text-nowrap pb-0">Đơn vị:</small>
                                    <el-input size="small" v-model="data.dataThongTinNV.tenDonVi" placeholder="Chọn phòng đơn vị..." disabled readonly></el-input>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row" v-if="data && data.dataThongTinNV_Leave">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-header border-bottom p-3">
                        <h6 class="mb-0" style="font-size:13px">THÔNG TIN ĐÁNH GIÁ</h6>
                    </div>
                    <div class="card-body">
                        <div class="mb-2">
                            <h6 class="mb-0 d-flex align-items-center gap-2 mb-3">
                                <span class="bg-gradient-primary d-flex align-items-center justify-content-center rounded-3" style="width:20px; height:20px">1</span>
                                <span class="d-flex">
                                    <p class="fw-bold mb-0">Ngày nghỉ: </p><p class="text-danger">(số ngày nghỉ trong năm 2023, không bao gồm các ngày nghỉ Lễ, Tết, chế độ đám cưới, tang chế)</p>
                                </span>
                            </h6>
                            <div class="d-flex flex-wrap gap-3">
                                <div class="mb-2">
                                    <div class="d-flex flex-row gap-3 align-items-center">
                                        <span class="text-nowrap mb-0 fw-light">Nghỉ phép năm:</span>
                                        <el-input-number size="small" v-model="data.dataThongTinNV_Leave.annual_leave" :step="1" class="w-100" min="0" style="max-width:100px" controls-position="right"/>
                                    </div>
                                </div>
                                <div class="mb-2">
                                    <div class="d-flex flex-row gap-3 align-items-center">
                                        <span class="text-nowrap mb-0 fw-light">Nghỉ việc riêng không lương :</span>
                                        <el-input-number size="small" v-model="data.dataThongTinNV_Leave.unpaid_leave" :step="1" class="w-100" min="0" style="max-width:100px" controls-position="right"/>
                                    </div>
                                </div>
                                <div class="mb-2">
                                    <div class="d-flex flex-row gap-3 align-items-center">
                                        <label class="text-nowrap mb-0 fw-light">Nghỉ ốm/ tai nạn LĐ/ bệnh nghề nghiệp :</label>
                                        <el-input-number v-model="data.dataThongTinNV_Leave.sick_leave" :step="1" class="w-100" size="small" min="0" style="max-width:100px" controls-position="right"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mb-2 d-flex flex-wrap gap-4">
                            <h6 class="mb-0 d-flex align-items-center gap-2">
                                <span class="bg-gradient-primary d-flex align-items-center justify-content-center rounded-3" style="width:20px; height:20px; font-size:12px">2</span>
                                <span>
                                    <p class="fw-bold">Số lần vi phạm kỷ luật :</p>
                                </span>
                            </h6>
                            <div class="d-flex gap-4">
                                <div>
                                    <div class="d-flex flex-row gap-3 align-items-center">
                                        <p class="text-nowrap mb-0">Nhắc nhở:</p>
                                        <el-input-number v-model="data.dataThongTinNV_Leave.violation_reminder" :step="1" class="w-100" size="small" min="0" controls-position="right" style="max-width:100px"/>
                                    </div>
                                </div>
                                <div>
                                    <div class="d-flex flex-row gap-3 align-items-center">
                                        <p class="text-nowrap mb-0">Khiển trách (văn bản) :</p>
                                        <el-input-number v-model="data.dataThongTinNV_Leave.violation_reproach" :step="1" class="w-100" size="small" min="0" controls-position="right" style="max-width:100px"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mb-4">
                            <div class="d-flex gap-3 align-items-center">
                                <div>
                                    <h6 class="mb-0 d-flex align-items-center">
                                        <div class="me-2">
                                            <span class="bg-gradient-primary d-flex align-items-center justify-content-center rounded-3" style="width:20px; height:20px">3</span>
                                        </div>
                                        <span class="d-flex flex-grow-1">
                                            <p class="fw-bold text-nowrap">Xếp loại đánh giá cuối năm 2022:</p>
                                        </span>
                                    </h6>
                                </div>
                                <div class="flex-grow-1">
                                    <el-input v-model="data.dataThongTinNV_Leave.rating_review" placeholder="Nhập xếp loại đánh giá cưới năm 2022" class="flex-grow-1" size="small" style="max-width:450px"/>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h6 class="mb-0 d-flex align-items-center gap-2 mb-3">
                                <span class="bg-gradient-primary d-flex align-items-center justify-content-center rounded-3" style="width:20px; height:20px">4</span>
                                <span>
                                    <p class="fw-bold">Trách nhiệm (của chức danh đánh giá):</p>
                                </span>
                            </h6>
                            <div class="row">
                                <div class="col-lg-12 mb-3">
                                    <div class="d-flex flex-column gap-1">
                                        <p class="text-nowrap mb-0 fw-normal">Nhiệm vụ chính:</p>
                                        <el-input
                                            v-model="data.dataThongTinNV_Leave.responsibility_main"
                                            :rows="2"
                                            type="textarea"
                                            placeholder="Nhập nhiệm vụ chính..."
                                            size="small"
                                        />
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="d-flex flex-column gap-1">
                                        <p class="text-nowrap mb-0 fw-normal">Kiêm nhiệm :</p>
                                        <el-input
                                            v-model="data.dataThongTinNV_Leave.responsibility_sub"
                                            :rows="2"
                                            type="textarea"
                                            placeholder="Nhập nhiệm vụ kiêm nhiệm..."
                                            size="small"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row" v-if="data && data.dataNVDanhGia">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-header border-bottom p-3">
                        <p class="mb-0 fw-bold text-dark">NHÂN SỰ TỰ ĐÁNH GIÁ THEO TIÊU CHÍ TIÊU CHUẨN</p>
                        <small style="font-size:12px">Xác định cấp độ yêu cầu và nhận xét, đánh giá cấp độ đạt được dựa theo tiêu chí - tiêu chuẩn nhân sự. Thang điểm đánh giá từ 1 - 5</small>
                    </div>
                    <div class="card-body">
                        <div class="card w-100 border-0 mb-2" v-for="(rate, index) in data.dataNVDanhGia" :key="index">
                            <div class="card-header border p-3 border-bottom">
                                <h6 class="mb-0 d-flex align-items-center gap-2">
                                    <span class="bg-gradient-primary d-flex align-items-center justify-content-center rounded-3" style="width:20px; height:20px">{{index + 1}}</span>
                                    <span>
                                        <p class="fw-bold text-dark">{{rate.criteria_content}}</p>
                                    </span>
                                </h6>
                            </div>
                            <div class="card-body p-0">
                                <table class="table table-sm table-bordered align-middle">
                                    <thead>
                                        <tr>
                                            <th width="20%" class="text-center align-middle">Tiêu chí</th>
                                            <th width="30%" class="text-center">Nhận xét</th>
                                            <th width="10%" class="text-center">Điểm</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="p-2">
                                                <div class="d-flex flex-column gap-1">
                                                    <div class="d-flex gap-2" v-for="(item, index) in rate.lstDetailCriteria" :key="index">
                                                        <small class="fw-semibold">{{item.criteria_detail_content}}</small>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="text-center p-2">
                                                <el-input
                                                    v-model="rate.note_employee"
                                                    :rows="rate.lstDetailCriteria.length"
                                                    type="textarea"
                                                    placeholder="Nhập đánh giá của nhân viên"
                                                    class="h-100"
                                                    size="small"
                                                />
                                            </td>
                                            <td class="text-center p-2">
                                                <el-select v-model="rate.score_employee" class="m-2 select-el-center-text" placeholder="Select" size="small">
                                                    <el-option class="text-center" :label="1" :value="1" />
                                                    <el-option class="text-center" :label="2" :value="2" />
                                                    <el-option class="text-center" :label="3" :value="3" />
                                                    <el-option class="text-center" :label="4" :value="4" />
                                                    <el-option class="text-center" :label="5" :value="5" />
                                                </el-select>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        
        <div class="row" v-if="data && data.dataHieuQuaCV">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-header border-bottom py-3 px-4">
                        <p class="mb-0 fw-bold text-dark">HIỆU QUẢ CÔNG VIỆC NĂM 2023</p>
                    </div>
                    <div class="card-body">
                        <table class="table table-xs table-bordered align-middle">
                            <thead>
                                <tr>
                                    <th rowspan="2" width="1%" class="text-center align-middle">STT</th>
                                    <th rowspan="2" width="30%" class="text-center align-middle">Chỉ tiêu công việc</th>
                                    <th rowspan="2" width="30%" class="text-center align-middle">Phương pháp đo lường</th>
                                    <th rowspan="2" width="20%" class="text-center align-middle">Tỷ trọng</th>
                                    <th colspan="2" width="25%" class="text-center">Kết quả hoàn thành công việc(%)</th>
                                </tr>
                                <tr>
                                    <th colspan="2" class="text-center">Cá nhân tự đánh giá</th>
                                </tr>
                            </thead>
                            <tbody v-for="(item, index) in data.dataHieuQuaCV" :key="index">
                                <tr>
                                    <th class="text-start ps-3" colspan="3">{{item.effective_content}}</th>
                                    <td class="text-center">
                                        <!-- <el-popover :visible="AttendProportionPercent(item.weight,TotalProportion(index)) > 100" placement="top" :width="250" size="small">
                                            <div class="text-nowrap text-center text-danger">
                                                Tỷ trọng nhập không đúng
                                            </div>
                                            <template #reference>
                                                <el-progress :text-inside="true" :stroke-width="18" :percentage="AttendProportionPercent(item.weight,TotalProportion(index))" size="small" class="mb-2" :color="colors" />
                                            </template>
                                        </el-popover> -->

                                        <el-popover :visible="AttendProportionPercent(item.weight,TotalProportion(index)) > 100" placement="top" :width="250" size="small">
                                            <div class="text-nowrap text-center text-danger">
                                                Tỷ trọng nhập không đúng
                                            </div>
                                            <template #reference>
                                                <el-input-number v-model="item.weight" :min="0" :max="100" @change="handleChange" size="small" class="w-100 " style="max-width:100px; min-width:100px" controls-position="right"/>
                                            </template>
                                        </el-popover>
                                    </td>
                                    <td class="text-center">
                                        <div>
                                            <el-progress
                                                :text-inside="true"
                                                :stroke-width="15"
                                                :percentage="RatingEmployeePercent(index)"
                                                status="success"
                                                :color="colors"
                                                v-model="item.score_employee"
                                            />
                                        </div>
                                    </td>
                                    <td class="text-center"></td>
                                </tr>
                                <tr v-for="(job, index_job) in item.lstDetailEffectiveJob" :key="index">
                                    <td class="text-center">{{index_job+1}}</td>
                                    <td class="p-1">
                                        <input type="text" class="w-100 border-0 px-2 bg-transparent text-dark" v-model="job.effective_content" placeholder="Nhập chỉ tiêu công việc..." style="height:40px">
                                    </td>
                                    <td class="p-1">
                                        <input type="text" class="w-100 border-0 px-2 bg-transparent text-dark" v-model="job.measurement_method" placeholder="Nhập phương pháp đo lường..." style="height:40px">
                                    </td>
                                    <td class="text-center">
                                        <el-input-number v-model="job.weight" :min="0" :max="100" @change="handleChange" size="small" class="w-100" style="max-width:100px; min-width:100px" controls-position="right"/>
                                    </td>
                                    <td>
                                        <div class="d-flex justify-content-center">
                                            <el-input-number v-model="job.score_employee" :min="0" :max="100" @change="handleChange" size="small" style="max-width:100px; min-width:100px" controls-position="right"/>
                                        </div>
                                    </td>
                         
                                    <td width="5%" class="text-center">
                                        <IconX @click="remove_JobPerformance(index,index_job)" class="bg-gradient-danger p-1 rounded-3 cursor-pointer" :size="20" stroke-width="2"/>
                                    </td>
                                </tr>
                                <tr>
                                    <th class="text-center" colspan="7">
                                        <div class="d-flex align-items-center justify-content-start gap-3 cursor-pointer" @click="addNew_Target(index)">
                                            <IconPlus class="bg-gradient-primary p-1 rounded-3" :size="20" stroke-width="2"/>
                                            <span>Thêm chỉ tiêu công việc</span>
                                        </div>
                                    </th>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <th class="text-center ps-3" colspan="3">KẾT QUẢ</th>
                                    <td class="text-center">
                                        <el-popover :visible="Result_TotalProportion() > 100" placement="top" :width="250" size="small">
                                            <div class="text-nowrap text-center text-danger">
                                                Tỷ trọng nhập không đúng
                                            </div>
                                            <template #reference>
                                                <el-progress v-model="something" :text-inside="true" :stroke-width="18" :percentage="Result_TotalProportion()" size="small" :color="colors" />
                                            </template>
                                        </el-popover>
                                    </td>
                                    <td class="text-center">
                                        <el-popover :visible="Result_TotalEmployeeReview() > 100" placement="top" :width="250" size="small">
                                            <div class="text-nowrap text-center text-danger">
                                                Tỷ trọng nhập không đúng
                                            </div>
                                            <template #reference>

                                                {{Result_TotalEmployeeReview()}}
                                                <el-progress :text-inside="true" :stroke-width="15" :percentage="Result_TotalEmployeeReview()" size="small" :color="colors"/>
                                            </template>
                                        </el-popover>
                                    </td>
                                    <td></td>
                         
                                </tr>
                                <tr>
                                    <th class="text-center ps-3 text-danger" colspan="3">ĐIỂM KẾT QUẢ</th>
                                    <td class="text-center"></td>
                                    <td>
                                        <div class="d-flex flex-column justify-content-center align-items-center py-2">
                                            <h6 class="mb-0 text-warning">{{Result_Score(Result_TotalEmployeeReview())}}</h6>
                                            <el-rate class="rate-lg" v-model="result_score" size="large" allow-half disabled/>
                                        </div>
                                    </td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        

    </section>
</template>

<script>
import Icons from '@Admin/common/js/Icons';
import axios from 'axios'
import {ShowToast} from '@Helpers/Notify.js'
const PATH_API_DATA = import.meta.env.VITE_API_PATH_DATA;
const PATH_API_USER = import.meta.env.VITE_API_PATH_USER;
export default {
    data(){
        return{

            authorize : null,
            period_id : null,
            result_score : 0,
            data : {
                dataThongTinNV_Leave: {}
            },


            colors : [
                { color: '#2ed573', percentage: 0 },
                { color: '#2ed573', percentage: 101 },
                { color: '#ff4757', percentage: 110 },
            ],
            percentage2: 30,
            num : 1,
            job_performance : [],
            manager_performance : [],
            training_performance : [],
            rate: 3,
        }
    },

    async created(){
        await this._Init()
    },

    methods : {

        async _Init(){
            const authorize = localStorage.getItem('authorize');
            this.authorize = await JSON.parse(authorize)
            // const current_user = JSON.parse(localStorage.getItem('current_user'));
            // this.current_user = current_user;
            // await this.GetAllData()

            if(this.$route.params.id || this.$route.params.id === 0){
                this.period_id = this.$route.params.id
                this.GetAllData()
            }

        },

        GetAllData(){
            const params = {
                period_id : this.period_id,
                employee_id : this.authorize.employee_id
                // ...this.filter,
                // page            : this.paginate.page,
                // limit           : 10,
                // // sorts           : [],
                // // search_list     : [],
                // // flag            : true
            }
            let config = {headers: {Authorization: `Bearer ${this.authorize.token}`}}
            axios.post(PATH_API_DATA + '/period-review/get-detail-review-by-id',params,config)
            .then(res => {
                this.data = res.data.data
                // this.paginate.total = res.data.data.total
            })
            .catch(err => {
                console.error(err); 
            })
        },


        addNew_Target(index){
            let dataHieuQuaCV = this.data.dataHieuQuaCV
            console.log(dataHieuQuaCV[index])
            dataHieuQuaCV[index].lstDetailEffectiveJob.push({
                id: '00000000-0000-0000-0000-000000000000',
                effective_content: '',
                measurement_method: '',
                weight: 0,
                effective_parent_id: dataHieuQuaCV[index].id,
                score_employee: 0,
                score_approve: 0
            })
        },

        TotalProportion(index){
            let lstDetailEffectiveJob = this.data.dataHieuQuaCV[index].lstDetailEffectiveJob
            var tongWeight = lstDetailEffectiveJob.reduce(function(acc, current) {
                return acc + current.weight;
            }, 0);
            return tongWeight
        },
        AttendProportionPercent(proportion,total_proportion){
            if(proportion && proportion > 0){
                if(total_proportion && total_proportion > 0){
                    return Math.round((total_proportion / proportion) * 100)
                }
            }else{
                return 0
            }
        },

        RatingEmployeePercent(index){
            let dataHieuQuaCV = this.data.dataHieuQuaCV[index]
            let arr = []
            dataHieuQuaCV.lstDetailEffectiveJob.map(item => {
                let rate = (item.score_employee * item.weight) / (dataHieuQuaCV.weight > 0 ? dataHieuQuaCV.weight : 0)
                if(rate > 0){
                    arr.push(parseFloat(rate.toFixed(2))) 
                }else{
                    arr.push(0)
                }
            })
            var total_employee_score = parseFloat(arr.reduce((acc, current) => acc + current, 0));
            dataHieuQuaCV.score_employee = parseFloat(total_employee_score.toFixed(2))
            let result = parseFloat(total_employee_score.toFixed(1))
            return isFinite(result) ? result : 0
        },

        Result_TotalProportion(){
            let dataHieuQuaCV = this.data.dataHieuQuaCV
            let arr = []
            dataHieuQuaCV.map(item => {arr.push(item.weight)})
            var total_result_score = parseFloat(arr.reduce((acc, current) => acc + current, 0));
            this.data.dataHieuQuaCV_Result[0].weight = total_result_score
            return total_result_score
        },

        Result_TotalEmployeeReview(){
            let dataHieuQuaCV = this.data.dataHieuQuaCV
            let arr = []
            dataHieuQuaCV.forEach(item => {
                let result_employee = item.score_employee * item.weight
                arr.push(parseFloat(result_employee.toFixed(2)))
            });
            var total_result_employee = parseFloat((arr.reduce((acc, current) => acc + current, 0) / 100).toFixed(1));
            this.data.dataHieuQuaCV_Result[0].score_employee = total_result_employee
            return isFinite(total_result_employee) ? total_result_employee : 0
        },

        Result_Score(score_percent){
            let result
            result = score_percent < 70 ? 1 : score_percent < 80 ? 2 : score_percent < 90 ? 3 : score_percent < 100 ? 4 : 5
            this.result_score = result
            this.data.dataHieuQuaCV_Result[1].score_employee = result
            return result
        },

        remove_JobPerformance(index,index_job){
            let dataHieuQuaCV = this.data.dataHieuQuaCV
            dataHieuQuaCV[index].lstDetailEffectiveJob.splice(index_job, 1)
        },

        SentReviews(){
            const params = this.data
            params.period_id = this.period_id
            params.employee_id = this.authorize.employee_id
            let config = {headers: {Authorization: `Bearer ${this.authorize.token}`}}
            axios.post(PATH_API_DATA + '/period-review/create-or-update',params,config)
            .then(res => {
                ShowToast({status_code : 200, message : 'Gửi đánh giá thành công'})
            })
            .catch(err => {
                ShowToast({status_code : 401, message : 'Gửi đánh giá thất bại'})
                console.error(err); 
            })
        }

    },


    components : {...Icons},
}
</script>
<style lang="scss">
    .select-el-center-text{
        .el-input__inner{
            text-align: center;
        }
    }
</style>