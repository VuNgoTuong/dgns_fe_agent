<template lang="">
    <section>
        <Delete_Modal ref="Delete_Modal"></Delete_Modal>
        <portal to="function-button">
            
            <el-tooltip content="Xuất Excel" placement="bottom-end" effect="dark">
                <li>
                    <a class="cursor-pointer">
                        <IconFileExport :size="32" stroke-width="2"/>
                    </a>
                </li>
            </el-tooltip>

            <!-- <li @click="$router.push('/admin/list-reviews/form')">
                <a class="cursor-pointer">
                    <IconPlus :size="32" stroke-width="2"/>
                </a>
            </li> -->
        </portal>

        <Filters 
            :AdvancedFilter="true" 
            @handleFilter="setDataFilter" 
            ref="Filter" 
            :date_time="true"
            :ApplyFilter="['period_code','period_name','status_reviews','tenant','employee_code','employee_name','date']"
        >
        </Filters>
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <!-- <div class="card-header">
                        <h5>Danh sách kỳ đánh giá</h5><span>Bảng tổng hợp danh sách kỳ đánh giá theo tiêu chí tìm kiếm</span>
                    </div> -->
                    <div class="table-responsive custom-scrollbar">
                        <table class="table table-xs table-fixed align-middle">
                            <thead>
                                <tr>
                                    <th width="2%" class="text-center px-2">STT</th>
                                    <th class="text-nowrap px-0" width="2%">Mã kỳ</th>
                                    <th class="text-nowrap" width="10%">Tên kỳ</th>
                                    <th class="text-nowrap px-1" width="5%">Mã NV</th>
                                    <th class="text-nowrap px-1" width="5%">Tên NV</th>
                                    <th class="text-nowrap px-1" width="10%">Phòng ban</th>
                                    <th class="text-nowrap" width="3%">Đơn vị</th>
                                    <th class="text-nowrap text-center px-1" width="5%">Ngày Thực hiện</th>
                                    <th class="text-nowrap px-2" width="5%">Trạng thái</th>
                                    <th class="text-nowrap px-2" width="5%">
                                        <div class="d-flex align-items-center">
                                            <IconDots :size="20" stroke-width="2" />
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, index) in data" :key="index">
                                    <th scope="row" class="text-center">
                                        <span v-if="paginate.page <= 1">{{ index + 1 }}</span>
                                        <span v-else>{{ (paginate.page - 1) * paginate.limit + index + 1 }}</span>   
                                    </th>
                                    <td class="px-0">{{item.period_code}}</td>
                                    <td class="text-nowrap">{{item.period_name}}</td>
                                    <td class="text-nowrap px-1">{{item.employee_code}}</td>
                                    <td class="text-nowrap px-1">{{item.employee_name}}</td>
                                    <td class="px-1 text-nowrap">{{item.phongban_name}}</td>
                                    <td class="text-nowrap">{{item.tenant_name}}</td>
                                    <td class="text-center px-1">
                                        <span class="text-nowrap fw-normal text-center">
                                            {{FormatDate(item.start_date,'DD-MM-YYYY')}}
                                        </span>
                                    </td>
                                    <td class="px-2">
                                        <Status
                                            type="list-reviews"
                                            :value="item.status"
                                        ></Status>
                                    </td>
                                    <td class="px-2">
                                        <button v-if="item.status == 0 && item.status != 4" class="btn btn-sm border-0 py-1 px-3 bg-gradient-light rounded-3 align-items-center d-flex gap-3 justify-content-center" style="width:120px">
                                            <IconLock :size="16" stroke-width="2"/>
                                            <span class="text-nowrap">Đã khóa</span>   
                                        </button>
                                       
                                        <button v-else class="btn btn-sm border-0 py-1 px-3 bg-gradient-primary shadow-primary rounded-3 cursor-pointer align-items-center d-flex gap-3 justify-content-center"
                                        @click="$router.push({ 
                                            path: '/admin/list-reviews/form/' + item.id, 
                                            query : {id : item.employee_id}
                                        })"
                                        style="width:120px"
                                        >
                                            <IconConfetti :size="16" stroke-width="2"/>
                                            <span class="text-nowrap">Đánh giá</span>   
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        
                    </div>
                    <div class="p-3 d-flex align-items-center">
                        <small class="text-nowrap flex-grow-1">Hiển thị {{paginate.display}} trên tổng {{paginate.total}} Kết quả</small>
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
            </div>
        </div>
    </section>
</template>
<script>
import Icons from '@Admin/common/js/Icons';
import axios from 'axios'
import {FormatDate} from '@Helpers/utils.js'
const PATH_API_DATA = import.meta.env.VITE_API_PATH_DATA;
const PATH_API_USER = import.meta.env.VITE_API_PATH_USER;
import Delete_Modal from '../modal/Delete_Modal.vue';
import Filters from '@Admin/components/common/Filters.vue'
import Status from '@Admin/components/common/Status.vue';
export default {

    data(){
        return {
            authorize : null,
            data : null,
            filter : {
                // request : {
                //     start_time : null,
                //     end_time : null,
                // },
                search_list : []
            },
            paginate : {
                total : 0,
                page : 1,
                limit : 10,
                display : 1,
            }
        }
    },
    async created(){
        await this._Init()
    },
    components : {...Icons,Delete_Modal,Filters,Status},
    methods : {
        async _Init(){
            const authorize = localStorage.getItem('authorize');
            this.authorize = await JSON.parse(authorize)
            // const current_user = JSON.parse(localStorage.getItem('current_user'));
            // this.current_user = current_user;
            await this.GetAllData()
        },
        async setDataFilter(e){
            this.filter = await e
            this.GetAllData()
        },
        Pagination(current_page){
            this.paginate.page = current_page
            this.GetAllData()
        },
        PaginationSizeChange(size){
            this.paginate.limit = size
            this.GetAllData()
        },

        GetAllData(){
            const params = {
                ...this.filter,
                page            : this.paginate.page,
                limit           : this.paginate.limit,
            }
            let config = {headers: {Authorization: `Bearer ${this.authorize.token}`}}
            axios.post(PATH_API_DATA + '/period-review/get-all-for-approver',params,config)
            .then(res => {
                this.data = res.data.data.items
                this.paginate.total = res.data.data.total
                this.paginate.display = res.data.data.items.length
            })
            .catch(err => {
                console.error(err); 
            })
        },
        FormatDate
    }
}
</script>
<style lang="">
    
</style>