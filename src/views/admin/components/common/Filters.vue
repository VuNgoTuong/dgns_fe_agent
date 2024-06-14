<template lang="">

    <div class="row">
        <div class="col-lg-12">
            <div class="card mb-3">
                <div class="card-body p-3">
                    <div class="row">
                        <div v-for="(item, index) in ApplyFilter" :key="index" class="col-lg-3 py-1">
                            <template v-if="item === 'date'">
                                <Filters_Date
                                    @FilterData="handleFilters" 
                                    @ApplyEnter="ApplyAdvancedFilter"
                                    ref="Filters_Date"
                                ></Filters_Date>
                            </template>

                            <template v-if="item === 'period_code'">
                                <Filters_PeriodCode 
                                    @FilterData="handleFilters"
                                    @ApplyEnter="ApplyAdvancedFilter" 
                                    ref="Filters_PeriodCode"
                                ></Filters_PeriodCode>
                            </template>

                            <template v-if="item === 'period_name'">
                                <Filters_PeriodName 
                                    @FilterData="handleFilters"
                                    @ApplyEnter="ApplyAdvancedFilter"
                                    ref="Filters_PeriodName"
                                ></Filters_PeriodName>
                            </template>

                            <template v-if="item === 'approver'">
                                <Filters_Approver 
                                    @FilterData="handleFilters"
                                    @ApplyEnter="ApplyAdvancedFilter"
                                    ref="Filters_Approver"
                                ></Filters_Approver>
                            </template>

                            <template v-if="item === 'employee_code'">
                                <Filters_EmployeeCode 
                                    @FilterData="handleFilters"
                                    @ApplyEnter="ApplyAdvancedFilter"
                                    ref="Filters_EmployeeCode"
                                ></Filters_EmployeeCode>
                            </template>

                            <template v-if="item === 'employee_name'">
                                <Filters_EmployeeName 
                                    @FilterData="handleFilters" 
                                    @ApplyEnter="ApplyAdvancedFilter"
                                    ref="Filters_EmployeeName"
                                ></Filters_EmployeeName>
                            </template>

                            <template v-if="item === 'status'">
                                <Filters_Status 
                                    @FilterData="handleFilters"
                                    @ApplyEnter="ApplyAdvancedFilter"
                                    ref="Filters_Status"
                                ></Filters_Status>
                            </template>

                            <template v-if="item === 'status_reviews'">
                                <Filters_StatusReviews 
                                    @FilterData="handleFilters"
                                    @ApplyEnter="ApplyAdvancedFilter"
                                    ref="Filters_StatusReviews"
                                ></Filters_StatusReviews>
                            </template>

                            <template v-if="item === 'tenant'">
                                <Filters_Tenant
                                    @FilterData="handleFilters"
                                    @ApplyEnter="ApplyAdvancedFilter"
                                    ref="Filters_Status"
                                ></Filters_Tenant>
                            </template>
                        </div>

                        <!-- <div class="col-lg-3 py-1" v-if="ApplyFilter && ApplyFilter.includes('period_code')">
                            <Filters_PeriodCode 
                                @FilterData="handleFilters" 
                                ref="Filters_PeriodCode"
                            ></Filters_PeriodCode>
                        </div>

                        <div class="col-lg-3 py-1" v-if="ApplyFilter && ApplyFilter.includes('period_name')">
                            <Filters_PeriodName 
                                @FilterData="handleFilters" 
                                ref="Filters_PeriodName"
                            ></Filters_PeriodName>
                        </div>

                        <div class="col-lg-3 py-1" v-if="ApplyFilter && ApplyFilter.includes('approver')">
                            <Filters_Approver 
                                @FilterData="handleFilters" 
                                ref="Filters_Approver"
                            ></Filters_Approver>
                        </div>

                        <div class="col-lg-3 py-1" v-if="ApplyFilter && ApplyFilter.includes('employee_code')">
                            <Filters_EmployeeCode 
                                @FilterData="handleFilters" 
                                ref="Filters_EmployeeCode"
                            ></Filters_EmployeeCode>
                        </div>

                        <div class="col-lg-3 py-1" v-if="ApplyFilter && ApplyFilter.includes('employee_name')">
                            <Filters_EmployeeName 
                                @FilterData="handleFilters" 
                                ref="Filters_EmployeeName"
                            ></Filters_EmployeeName>
                        </div>

                        <div class="col-lg-3 py-1" v-if="ApplyFilter && ApplyFilter.includes('status')">
                            <Filters_Status 
                                @FilterData="handleFilters" 
                                ref="Filters_Status"
                            ></Filters_Status>
                        </div>

                        <div class="col-lg-3 py-1" v-if="ApplyFilter && ApplyFilter.includes('tenant')">
                            <Filters_Tenant
                                @FilterData="handleFilters" 
                                ref="Filters_Status"
                            ></Filters_Tenant>
                        </div> -->

                        <div class="col-lg-12 mt-1">
                            <div class="d-flex align-items-center justify-content-center">
                                <button class="btn btn-sm btn-primary" @click="ApplyAdvancedFilter">
                                    <span class="d-flex align-items-center gap-2">
                                        <IconSearch :size="18" stroke-width="2"/>
                                        <span>Tìm kiếm</span>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- <div v-if="show" class="card-header d-flex">
        <div class="w-100">
            <div class="card bg-light">
                <div class="card-header">
                    <div class="d-flex w-100">
                        <div class="card-title flex-grow-1">
                            <span>LỌC DỮ LIỆU</span>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <div class="row mb-3">
                        <Filters_PeriodCode 
                            @FilterData="handleFilters" 
                            ref="Filters_ProjectName"
                            v-if="ApplyFilter && ApplyFilter.includes('period_code')"
                        ></Filters_PeriodCode>
                    </div>
      

                    <div class="row mt-3" v-if="ApplyFilter">
                        <div class="col-lg-12">
                            <div class="d-flex gap-2">
                                <button class="btn btn-success d-flex gap-2 align-items-center" @click="ApplyAdvancedFilter">
                                    <IconFilter color="#FFFFFF" :size="18" stroke-width="2" class="d-flex" />
                                    <span>Áp dụng</span>
                                </button>
                                <button @click="RemoveFilter" class="btn bg-secondary bg-opacity-25 text-muted d-flex gap-2 align-items-center">
                                    <IconFilterOff :size="18" stroke-width="2" class="d-flex" />
                                    <span>Bỏ lọc</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> -->
</template>
<script>
import Icons from '@Admin/common/js/Icons';
import dayjs from 'dayjs';

import Filters_PeriodCode from './Filters/Filters_PeriodCode.vue'
import Filters_PeriodName from './Filters/Filters_PeriodName.vue'
import Filters_Status from './Filters/Filters_Status.vue'
import Filters_Tenant from './Filters/Filters_Tenant.vue'
import Filters_EmployeeCode from './Filters/Filters_EmployeeCode.vue'
import Filters_EmployeeName from './Filters/Filters_EmployeeName.vue'
import Filters_Date from './Filters/Filters_Date.vue'
import Filters_Approver from './Filters/Filters_Approver.vue'
import Filters_StatusReviews from './Filters/Filters_StatusReviews.vue'

export default {
    data(){
        return {
            filters : {
                // request : {
                //     start_time : null,
                //     end_time : null,
                // },
                search_list: [],
            },
            date : [],
            date_start : '',
            date_end : '',
            keyword : "",
            show: false,
        }
    },
    props : ['date_time','AdvancedFilter','ApplyFilter'],

    mounted(){
        this.date_start = dayjs().startOf('year').format('YYYY-MM-DD 00:00:00');
        this.date_end = dayjs().endOf('year').format('YYYY-MM-DD 23:59:59');
        this.InitFilter()
    },

    methods: {
        async handleFilters(e){
            let filter = {}
            filter.name_field = e.name_field
            filter.value_search = e.search_value
            let objIndex = this.filters.search_list.findIndex((obj => obj.name_field == e.name_field));
            if((objIndex) >= 0){
                if(e.search_value || e.search_value == ''){
                    this.filters.search_list[objIndex].value_search = e.search_value
                }else{
                    this.filters.search_list[objIndex].value_search = event.target.value
                }
            }else{
                filter.value_search = e.search_value
                this.filters.search_list.push(filter)
            }

        },

        setDateFilter(){
            if(this.date ?? '' !== ''){
                this.filters.request.start_time = dayjs(this.date_start).format('YYYY-MM-DD 00:00:00');
                this.filters.request.end_time = dayjs(this.date_end).format('YYYY-MM-DD 23:59:59');
            }else{
                this.filters.request.start_time = dayjs().startOf('month').format('YYYY-MM-DD 00:00:00');
                this.filters.request.end_time = dayjs().format('YYYY-MM-DD HH:mm:ss');
            }
            this.handleFilter()
        },

        setKeywordFilter(){
            const existingItem = this.filters.search_list.find(item => item.name_field === 'search_field');
            if (existingItem) {
                existingItem.value_search = this.keyword;
            } else {
                this.filters.search_list.push({ name_field: 'search_field', value_search: this.keyword });
            }
            this.handleFilter()
        },
        ApplyAdvancedFilter(){
            this.filters.search_list = this.filters.search_list.filter(item => item.name_field != 'search_field')
            this.handleFilter()
        },

        handleFilter(){
            this.$emit('handleFilter',this.filters)
        },

        RemoveFilter(){
            this.filters.search_list = [];
            this.$refs.Filters_PeriodCode.RemoveFilter();
            this.InitFilter()
            this.handleFilter()
        },

        InitFilter(){
            // let query_get = this.$route.query
            // if(query_get){
            //     query_get.id ?  this.filters.search_list.push({name_field : 'object_id',value_search : query_get.id,}) : false
            //     query_get.type ? this.filters.search_list.push({name_field : 'object_type',value_search : query_get.type,}) : false
            //     query_get.status ? this.filters.search_list.push({name_field : 'project_status',value_search : query_get.status,}) : false
            // }
        }
    },
    components :{
        ...Icons,
        Filters_PeriodCode,Filters_PeriodName,Filters_Status,Filters_Tenant,Filters_EmployeeCode,Filters_EmployeeName,Filters_Date,Filters_Approver,Filters_StatusReviews
    }
}
</script>
<style lang="scss">

</style>