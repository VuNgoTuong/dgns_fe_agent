<template lang="">
    <div class="container-fluid">
        <div class="page-header pb-3">
            <div class="row">
                <div class="col-sm-6">
                <h6 class="mb-0 text-uppercase fw-bold">{{$route.meta.title}}</h6>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <router-link to="/admin">Trang chủ</router-link>
                    </li>
                    <li class="breadcrumb-item active">{{$route.meta.title}}</li>
                </ol>
                </div>
                <div class="col-sm-6">
                    <div class="bookmark">
                        <ul>
                            <portal-target name="function-button"></portal-target>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Icons from '@Admin/common/js/Icons';
export default {
    components : {...Icons,}
}
</script>
<style lang="">
    
</style>