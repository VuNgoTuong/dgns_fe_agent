<template lang="">
    <!-- Modal -->
    <div class="modal fade" id="AccountImport_Modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl modal-dialog-centered">
            <div class="modal-content p-2 shadow-lg rounded-4 border-top border-start-0 border-end-0 border-bottom-0 border-5" style="border-color: #7cc5b6!important;trasition:.3s ease-in-out">
                <div class="modal-body p-4">
                    <div class="d-flex justify-content-center mb-4 position-absolute start-0 w-100" style="top: -50px">
                        <div class="rounded-circle bg-gradient-success shadow-success">
                            <IconTableImport :size="64" stroke-width="2" class="d-flex p-3" style="padding:12px" @click="$refs.Delete_Modal._Init()" />
                        </div>
                        
                    </div>
                    <div class="mb-3">
                        <h2 class="modal-title fs-5 fw-bold flex-grow-1" >Nhập danh sách người dùng</h2>
                        <p>Nhập danh sách người dùng theo file mẫu</p>
                    </div>

                    <div class="d-flex flex-column gap-4 mb-3">
                        <el-upload
                            class="AccountManager-Import"
                            drag
                            :auto-upload="false"
                            :multiple="false"
                            :show-file-list="false"
                            limit="1"
                            :on-change="handleSuccess"
                        >
                            <div class="d-flex align-items-center w-100 justify-content-center mb-1">
                                <IconFileUpload :size="24" class="text-info" stroke-width="1.5" />
                            </div>
                            <div class="el-upload__text">
                            Kéo, thả hoặc <em>nhấn vào để tải tệp lên</em>
                            </div>
                            <template #tip>
                            <div class="text-center text-primary mt-2">
                                <a :href="sample_template" download="import_template.xlsx">
                                    <div class="d-flex align-items-center gap-2 justify-content-center">
                                        <IconFileUpload :size="16" stroke-width="1.5" /> Tải file dữ liệu mẫu
                                    </div>
                                </a>
                            </div>
                            </template>
                        </el-upload> 
                    </div>
         
                    <div class='card' v-if="data_import.length > 0">
                        <div class="card-header p-3 pb-1">
                            <div class="d-flex">
                                <h6 class="mb-0 flex-grow-1">Danh sách dữ liệu nhập vào</h6>
                                <button v-if="export_err" class="btn btn-xs btn-danger" @click="exportExcel()">Tải danh sách lỗi khi nhập</button>
                            </div>
                        </div>
                        <div class="card-body p-3 pt-0">
                            <div class='table-responsive custom-scrollbar mb-2' style="height:350px">
                                <table class="table-xs table-striped table-bordered my-2" style="width:180%">
                                    <thead>
                                        <tr>
                                            <th class="text-center text-nowrap px-0" width="6%">Mã nhân viên</th>
                                            <th class="text-center text-nowrap px-0" width="10%">Tên nhân viên</th>
                                            <th class="text-center text-nowrap px-0" width="10%">Email</th>
                                            <th class="text-center text-nowrap px-0" width="8%">Chức vụ</th>
                                            <th class="text-center text-nowrap px-0" width="8%">Chức danh</th>
                                            <th class="text-center text-nowrap px-0" width="5%">Ngày vào</th>
                                            <th class="text-center text-nowrap px-0" width="5%">Mã phòng ban</th>
                                            <th class="text-center text-nowrap px-0" width="15%">Mô tả</th>
                                            <th class="text-center text-nowrap px-0" width="15%">Báo lỗi</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(item, index) in data_import" :key="index">
                                            <template v-if="index + 1 <= (paginate.page * paginate.limit) && index + 1 > (paginate.page - 1) * paginate.limit">
                                                <td class="p-0">
                                                    <div class="d-flex align-items-center position-relative">
                                                        <input type="text" v-model="item.employee_code" class="w-100 px-2 text-center border-0 bg-transparent" style="height:30px;" @input="v$.data_import.$touch();">
                                                        <div class="position-absolute end-0 top-0" v-for="error in v$.data_import.$each.$response.$errors[index].employee_code"
                                                        :key="error"
                                                        >
                                                            <div class="c-tooltip" :title="error.$message" >
                                                                <IconExclamationCircle :size="16" stroke-width="2" class="cursor-pointer text-danger mt-2 me-1"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td class="p-0">
                                                    <div class="d-flex align-items-center position-relative">
                                                        <input type="text" v-model="item.fullName" class="w-100 px-2 text-center border-0 bg-transparent" style="height:30px" @input="v$.data_import.$touch();">
                                                        <div class="position-absolute end-0 top-0" v-for="error in v$.data_import.$each.$response.$errors[index].fullName"
                                                        :key="error"
                                                        >
                                                            <div class="c-tooltip" :title="error.$message" >
                                                                <IconExclamationCircle :size="16" stroke-width="2" class="cursor-pointer text-danger mt-2 me-1"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td class="p-0">
                                                    <div class="d-flex align-items-center position-relative">
                                                        <input type="text" v-model="item.email" class="w-100 px-2 text-center border-0 bg-transparent" style="height:30px" @input="v$.data_import.$touch();">
                                                        <div class="position-absolute end-0 top-0" v-for="error in v$.data_import.$each.$response.$errors[index].email"
                                                        :key="error"
                                                        >
                                                            <div class="c-tooltip" :title="error.$message" >
                                                                <IconExclamationCircle :size="16" stroke-width="2" class="cursor-pointer text-danger mt-2 me-1"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td class="p-0">
                                                    <input type="text" v-model="item.chucVu" class="w-100 border-0 px-2 text-center bg-transparent" style="height:30px">
                                                </td>
                                                <td class="p-0">
                                                    <input type="text" v-model="item.chucDanh" class="w-100 border-0 px-2 text-center bg-transparent" style="height:30px">
                                                </td>
                                                <td class="p-0">
                                                    <div class="d-flex align-items-center position-relative">
                                                        <input type="text" v-model="item.ngayVao" class="w-100 px-2 text-center border-0 bg-transparent" style="height:30px" @input="v$.data_import.$touch();">
                                                        <div class="position-absolute end-0 top-0" v-for="error in v$.data_import.$each.$response.$errors[index].ngayVao"
                                                        :key="error"
                                                        >
                                                            <div class="c-tooltip" :title="error.$message" >
                                                                <IconExclamationCircle :size="16" stroke-width="2" class="cursor-pointer text-danger mt-2 me-1"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td class="p-0">
                                                    <input type="text" v-model="item.maPhongBan" class="w-100 border-0 px-2 text-center bg-transparent" style="height:30px">
                                                </td>
                                                <td class="p-0">
                                                    <input type="text" v-model="item.description" class="w-100 border-0 px-2 bg-transparent" style="height:30px">
                                                </td>
                                                <td class="px-2">
                                                    <span class="text-danger">{{item.errMess}}</span>
                                                </td>
                                            </template>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="d-flex justify-content-between align-items-center">
                                <small>Tống số {{paginate.total}} kết quả</small>
                                <el-pagination 
                                background 
                                layout="prev, pager, next" 
                                :total="paginate.total"
                                @current-change="Pagination" 
                                small />
                            </div>
                        </div>
                        
                    </div>

                    <div class="d-flex gap-3">
                        <button type="button" class="btn btn-outline-light w-50 text-muted" data-bs-dismiss="modal">Hủy bỏ</button>
                        <button type="button" class="btn bg-gradient-success border-0 text-white w-50 btn-hvr-success" @click="ImportData">Nhập danh sách</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Icons from '@Admin/common/js/Icons';
import axios from 'axios'
import {ShowToast} from '@Helpers/Notify.js'
const PATH_API_DATA = import.meta.env.VITE_API_PATH_DATA;
const PATH_API_USER = import.meta.env.VITE_API_PATH_USER;
import ExcelJS from 'exceljs';
import * as XLSX from 'xlsx';
import dayjs from 'dayjs';

import { useVuelidate } from '@vuelidate/core'
import { required, email, alpha, numeric, helpers } from '@vuelidate/validators'

var modal

export default {
    setup () {
        return { v$: useVuelidate() }
    },
    data(){
        return {
            sample_template : '/template/import_template.xlsx',
            err_template : '/template/err_template.xlsx',
            authorize : null,
            init : null,
            data : {
                is_active: true,
            },
            tenant : [],
            users : [],
            file : null,
            data_import : [],
            import_err : [],
            export_err : false,
            modal : false,
            paginate : {
                total : 1,
                page : 1,
                limit : 10,
            }
        }
    },

    mounted(){
        modal = new bootstrap.Modal('#AccountImport_Modal');
    },

    validations () {
        return {
            data_import: {
                $each: helpers.forEach({
                    employee_code: {
                        required: helpers.withMessage('Dữ liệu không được trống', required)
                    },
                    fullName: {required: helpers.withMessage('Dữ liệu không được trống', required)},
                    email: {
                        required: helpers.withMessage('Dữ liệu không được trống', required),
                        email: helpers.withMessage('Sai định dạng email', email),
                    },
                    ngayVao : {
                        required: helpers.withMessage('Dữ liệu không được trống', required),
                        valid : helpers.withMessage('Ngày không hợp lệ. Vui lòng nhập theo định dạng YYYY-MM-DD.',this.isValidDate)
                    },
                })
            }
        }
    },


    methods : {
        validateEmail(){
            this.v$.data_import.$touch();
        },

        handleSuccess(response, file, fileList){
            this.file = file
            this.readExcel(this.file[0].raw);
        },

        async _Init(value){
            value ? this.init = value : false
            const authorize = localStorage.getItem('authorize');
            this.authorize = await JSON.parse(authorize)
            modal.show()      
        },
        async readExcel(file) {
            this.data_import = [];
            const workbook = new ExcelJS.Workbook();
            await workbook.xlsx.load(file);
            const worksheet = workbook.worksheets[0];
            const jsonData = [];
            worksheet.eachRow((row, rowNumber) => {
                if (rowNumber !== 1 && rowNumber !== 2) {
                const rowObject = {};
                row.eachCell((cell, colNumber) => {
                    rowObject[worksheet.getCell(1, colNumber).value] = cell.value;
                });
                    jsonData.push(rowObject);
                }
            });

            let result = [];
            await jsonData.forEach(item => {
                let arr = {
                    employee_code: item.employee_code ? (typeof item.employee_code === 'object' ? String(item.employee_code.text) : String(item.employee_code)) : '',
                    fullName: item.fullName ? (typeof item.fullName === 'object' ? item.fullName.text : item.fullName) : '',
                    email: item.email ? (typeof item.email === 'object' ? item.email.text : item.email) : '',
                    chucVu: item.chucVu ? (typeof item.chucVu === 'object' ? item.chucVu.text : item.chucVu) : '',
                    chucDanh: item.chucDanh ? (typeof item.chucDanh === 'object' ? item.chucDanh.text : item.chucDanh) : '',
                    ngayVao: item.ngayVao ? (typeof item.ngayVao === 'object' ? String(item.ngayVao.text) : String(item.ngayVao)) : '',
                    maPhongBan: item.maPhongBan ? (typeof item.maPhongBan === 'object' ? String(item.maPhongBan.text) : String(item.maPhongBan)) : '',
                    description: item.description ? (typeof item.description === 'object' ? item.description.text : item.description) : '',
                    errMess         :   item.errMess ?? "",
                }
                result.push(arr)
            });

            

            this.data_import = await result

            console.log(this.data_import)

            this.paginate.total = result.length
            await this.validateEmail()
        },

        Pagination(current_page){
            this.paginate.page = current_page
            // this.paginate.limit = this.paginate.limit * current_page
            // this.paginate.page = current_page
            // this.GetAllData()
        },

        async exportExcel(){
            const path = '/template/err_template.xlsx';
            const response = await fetch(path);
            const arrayBuffer = await response.arrayBuffer();
            const workbook = new ExcelJS.Workbook();
            await workbook.xlsx.load(arrayBuffer);
            const worksheet = workbook.getWorksheet(1);
            this.import_err.forEach((row,index) => {
                let rowData = [
                    row.employee_code ?? "",
                    row.fullName ?? "",
                    row.email ?? "",
                    row.chucVu ?? "",
                    row.chucDanh ?? "",
                    row.ngayVao ?? "",
                    row.maPhongBan ?? "",
                    row.description ?? "",
                    row.errMess ?? "",
                ]
                const data = worksheet.addRow(rowData, index + 3);
                data.eachCell((cell) => {
                    cell.border = {
                        top: { style: 'thin' },
                        left: { style: 'thin' },
                        bottom: { style: 'thin' },
                        right: { style: 'thin' },
                    };
                });
                data.getCell(9).font = { color: { argb: 'FF0000' } };
                data.getCell(9).alignment = { horizontal: 'center' };
            });
            const outputBuffer = await workbook.xlsx.writeBuffer();
            this.saveToFile(outputBuffer, 'export_error.xlsx');
        },

        saveToFile(buffer, filename) {
            const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = filename;
            link.click();
        },

        ImportData(){
            let params = []
            $.each(this.data_import, function (i,v) {
                let arr = {
                    employee_code: v.employee_code ? (typeof v.employee_code === 'object' ? String(v.employee_code.text) : String(v.employee_code)) : '',
                    chucDanh: v.chucDanh ? (typeof v.chucDanh === 'object' ? v.chucDanh.text : v.chucDanh) : '',
                    chucVu: v.chucVu ? (typeof v.chucVu === 'object' ? v.chucVu.text : v.chucVu) : '',
                    email: v.email ? (typeof v.email === 'object' ? v.email.text : v.email) : '',
                    fullName: v.fullName ? (typeof v.fullName === 'object' ? v.fullName.text : v.fullName) : '',
                    maPhongBan: v.maPhongBan ? (typeof v.maPhongBan === 'object' ? String(v.maPhongBan.text) : String(v.maPhongBan)) : '',
                    ngayVao: v.ngayVao ? (typeof v.ngayVao === 'object' ? String(v.ngayVao.text) : String(v.ngayVao)) : '',
                    description: v.description ? (typeof v.description === 'object' ? v.description.text : v.description) : '',
                    is_active: true,
                }
                params.push(arr)
            });
            let config = {headers: {Authorization: `Bearer ${this.authorize.token}`}}
            axios.post(PATH_API_USER + '/user/import',params,config)
            .then(async res =>{
                let data = res.data.data.items
                if(data.length > 0){
                    this.import_err = await data
                    this.data_import = await data
                    this.$emit('ReloadData')
                    this.export_err = true
                    ShowToast({status_code : 401, message : 'Có ' +data.length+' lỗi trong quá trình nhập'})
                }else{
                    this.$emit('ReloadData')
                    // await this.exportExcel()
                    this.export_err = false
                    ShowToast({status_code : 200, message : 'Nhập dữ liệu thành công'})
                    this.file = []
                    modal.hide();
                }
            })
            .catch(err => {
                ShowToast({status_code : 401, message : 'Nhập dữ liệu thất bại'})
                console.error(err); 
            })
        },

        isValidDate(value) {
            return dayjs(value, 'YYYY-MM-DD', true).isValid();
        }
    },
    components : {...Icons}
}

</script>
<style lang="scss">

    div{
        &.c-tooltip[title]:hover::after {
            content: attr(title);
            position: absolute;
            top: -100%;
            left : -500%;
            color:#de4251;
            border:1px solid #de4251;
            background: #FFFFFF;
            padding:4px;
            font-size:11px;
            min-width: 250px;
            font-weight: bold;
            box-shadow:5px 5px 10px -10px #000;
            border-radius:3px;
            z-index: 9999;
            text-align: center;
        }
    }
    
    .AccountManager-Import{
        .el-upload-dragger{
            padding:15px;
        }
    }
</style>