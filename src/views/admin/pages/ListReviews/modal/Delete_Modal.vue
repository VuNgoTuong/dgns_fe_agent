<template lang="">
    <div class="modal fade" id="Delete_ReviewsPeriod" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content p-3 shadow-lg rounded-4 border-top border-start-0 border-end-0 border-bottom-0 border-5 border-danger">
                <div class="modal-body p-4 text-center">
                    <div class="d-flex justify-content-center mb-4">
                        <IconTrash :size="64" stroke-width="1" class="d-flex bg-gradient-danger shadow-danger p-2 rounded-circle cursor-pointer" @click="$refs.Delete_Modal._Init()" />
                    </div>
                    <h2 class="modal-title fs-5 fw-bold flex-grow-1 mb-3" >Bạn có chắc chắn ?</h2>
                    <p>Xóa có thể gây mất mát dữ liệu không thể khôi phục. Hãy kiểm tra kỹ trước khi tiếp tục. Liên hệ với quản trị viên nếu cần hỗ trợ.</p>
                    <div class="d-flex gap-3">
                        <button type="button" class="btn btn-outline-light w-50 text-muted" data-bs-dismiss="modal">Hủy bỏ</button>
                        <button type="button" class="btn btn-danger w-50">Xóa dữ liệu</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Icons from '@Admin/common/js/Icons';
var modal
export default {
    data(){
        return{
            token : null,
        }
    },
    components : {...Icons},
    mounted(){
        modal = new bootstrap.Modal('#Delete_ReviewsPeriod');
    },
    methods : {
        async _Init(value){
            value ? this.init = value : false
            const token = await localStorage.getItem('token');
            this.token = token;
            modal.show();
        }
    }
}
</script>
<style lang="">
    
</style>