<template lang="">
    <section>
        <Delete_Modal ref="Delete_Modal" @ReloadData="GetAllData"></Delete_Modal>
        <Import_Modal ref="Import_Modal" @ReloadData="GetAllData"></Import_Modal>
        <Create_Modal ref="Create_Modal" @ReloadData="GetAllData"></Create_Modal>
        <Update_Modal ref="Update_Modal" @ReloadData="GetAllData"></Update_Modal>

        <portal to="function-button">
            <li @click="$refs.Import_Modal._Init()">
                <a class="cursor-pointer">
                    <IconTableImport class="text-success" :size="32" stroke-width="2"/>
                </a>
            </li>
            <li @click="$refs.Create_Modal._Init()">
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
            :ApplyFilter="['employee_code','employee_name','tenant','approver']"
        >
        </Filters>

        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="table-responsive custom-scrollbar">
                        <table class="table table-xs table-fixed align-middle">
                            <thead>
                                <tr>
                                    <th width="5%" class="text-center px-1">STT</th>
                                    <th width="10%" class="px-1">Mã NV</th>
                                    <th width="10%" class="px-1">Tên NV</th>
                                    <th width="10%" class="px-1">Phòng ban</th>
                                    <th width="3%" class="px-1">Đơn vị</th>
                                    <!-- <th width="3%" class="px-1">Trạng thái</th>
                                    <th width="3%" class="text-nowrap px-3">Người phê duyệt</th> -->
                                    <th width="3%">
                                        <div class="d-flex align-items-center">
                                            <IconDots :size="20" stroke-width="2" />
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, index) in data" :key="index">
                                    <th scope="row" class="text-center px-2">
                                        <span v-if="paginate.page <= 1">{{ index + 1 }}</span>
                                        <span v-else>{{ (paginate.page - 1) * paginate.limit + index + 1 }}</span>
                                    </th>
                                    <td class="text-nowrap px-1">{{item.employee_code}}</td>
                                    <td class="text-nowrap px-1">{{item.fullname}}</td>
                                    <td class="text-nowrap px-1">{{item.tenPhongBan}}</td>
                                    <td class="text-nowrap px-1">{{item.tenant_name}}</td>
                                    <!-- <td class="px-1">
                                        <p v-if="item.tenLanhDao == ''" class="text-danger text-nowrap mb-0">Chưa có lãnh đạo đánh giá</p>
                                        <p v-else class="text-success text-nowrap mb-0">Đã có lãnh đạo đánh giá</p>
                                    </td>
                                    <td class="text-nowrap px-3">
                                        {{item.tenLanhDao}}
                                    </td> -->
                                    <td>
                                        <div class="d-flex gap-1">
                                            <IconPencil :size="24" stroke-width="2" class="d-flex bg-gradient-primary shadow-primary p-1 rounded-3 cursor-pointer" @click="$refs.Update_Modal._Init({id:item.id})" />
                                            <IconX :size="24" stroke-width="2" class="d-flex bg-gradient-danger shadow-danger p-1 rounded-3 cursor-pointer" @click="$refs.Delete_Modal._Init({id:item.id})" />
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
const PATH_API_DATA = import.meta.env.VITE_API_PATH_DATA;
const PATH_API_USER = import.meta.env.VITE_API_PATH_USER;
import Delete_Modal from '../modal/Delete_Modal.vue';
import Import_Modal from '../modal/Import_Modal.vue';
import Create_Modal from '../modal/Create_Modal.vue';
import Update_Modal from '../modal/Update_Modal.vue';
import Filters from '@Admin/components/common/Filters.vue'
export default {

    data(){
        return {
            authorize : null,
            data : [],
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
                display : 1,
            }
        }
    },
    async created(){
        await this._Init()
    },
    components : {...Icons,Delete_Modal,Import_Modal,Create_Modal,Update_Modal,Filters},
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
                page            : this.paginate.page,
                limit           : this.paginate.limit,
                ...this.filter,
            }
            let config = {headers: {Authorization: `Bearer ${this.authorize.token}`}}
            axios.post(PATH_API_USER + '/user/get-all',params,config)
            .then(res => {
                this.data = res.data.data.items
                this.paginate.total = res.data.data.total
                this.paginate.display = res.data.data.items.length
            })
            .catch(err => {
                console.error(err); 
            })
        }
    }
}
</script>
<style lang="">
    
</style>