<template lang="">
    <section>
        <Delete_Modal ref="Delete_Modal" @ReloadData="GetAllData"></Delete_Modal>
        <portal to="function-button">
            <li @click="$router.push('/admin/reviews-period/form')">
                <a class="cursor-pointer">
                    <IconPlus :size="32" stroke-width="2"/>
                </a>
            </li>
        </portal>

        <Filters 
            :AdvancedFilter="true" 
            @handleFilter="setDataFilter" 
            ref="Filter" 
            :date_time="true"
            :ApplyFilter="['period_code','period_name','tenant','date','status']"
        >
        </Filters>

        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <!-- <div class="card-header p-3">
                        <h6 class="mb-0">Danh sách kỳ đánh giá</h6>
                        <span>Bảng tổng hợp danh sách kỳ đánh giá theo tiêu chí tìm kiếm</span>
                    </div> -->
                    <div class="table-responsive custom-scrollbar">
                        <table class="table table-xs table-fixed align-middle">
                            <thead>
                                <tr>
                                    <th scope="col" class="text-center px-2" width="1%">STT</th>
                                    <th scope="col" class="text-nowrap px-2" width="2%">Mã kỳ</th>
                                    <th scope="col" class="text-nowrap px-2" width="10%">Tên kỳ</th>
                                    <th scope="col" class="text-nowrap px-2" width="5%">Đơn vị</th>
                                    <th scope="col" class="text-nowrap text-center px-0" width="0.5%">Ngày bắt đầu</th>
                                    <th scope="col" class="text-nowrap text-center px-0" width="0.5%">Ngày kết thúc</th>
                                    <th scope="col" class="text-nowrap text-center px-0" width="0.5%">Kết thúc tự đánh giá</th>
                                    <th scope="col" class="text-nowrap" width="1%">Trạng thái</th>
                                    <th scope="col" width="5%">
                                        <div class="d-flex align-items-center">
                                            <IconDots :size="20" stroke-width="2" />
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, index) in data" :key="index">
                                    <th scope="row" class="text-center px-3">
                                        <span v-if="paginate.page <= 1">{{ index + 1 }}</span>
                                        <span v-else>{{ (paginate.page - 1) * paginate.limit + index + 1 }}</span>   
                                    </th>
                                    <td class="text-nowrap px-2">{{item.period_code}}</td>
                                    <td class="text-nowrap px-2">{{item.period_name}}</td>
                                    <td class="text-nowrap px-2">{{item.tenant_name}}</td>
                                    <td class="text-nowrap text-center">{{FormatDate(item.start_date,'DD-MM-YYYY')}}</td>
                                    <td class="text-nowrap text-center">{{FormatDate(item.end_date,'DD-MM-YYYY')}}</td>
                                    <td class="text-nowrap text-center">{{FormatDate(item.period_duration,'DD-MM-YYYY')}}</td>
                                    <td class="text-nowrap">
                                        <Status
                                            type="reviews-period"
                                            :value="item.status"
                                        ></Status>
                                    </td>
                                    <td>
                                        <div class="d-flex gap-1">
                                            <IconPencil :size="26" stroke-width="2" class="d-flex bg-gradient-primary shadow-primary p-1 rounded-3 cursor-pointer" @click="$router.push({ path: '/admin/reviews-period/form/' + item.id,})" />
                                            <IconX :size="26" stroke-width="2" class="d-flex bg-gradient-danger shadow-danger p-1 rounded-3 cursor-pointer" @click="$refs.Delete_Modal._Init({id:item.id})" />
                                        </div>
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
import {ShowToast} from '@Helpers/Notify.js'
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
            data : [],
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

        Pagination(current_page){
            this.paginate.page = current_page
            this.GetAllData()
        },
        PaginationSizeChange(size){
            this.paginate.limit = size
            this.GetAllData()
        },
        async setDataFilter(e){
            this.filter = await e
            this.GetAllData()
        },
        GetAllData(){
            const params = {
                ...this.filter,
                page            : this.paginate.page,
                limit           : this.paginate.limit,
                // sorts           : [],
                // search_list     : [],
                // flag            : true
            }
            let config = {headers: {Authorization: `Bearer ${this.authorize.token}`}}
            axios.post(PATH_API_DATA + '/period-review/get-all',params,config)
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