<template>
<div>
    <div class="row justify-content-center">
        <div class="col-md-8">
            <form method="POST" id="borrower_create_form" action="#" @submit.prevent="borrowerCreateForm">

                <div class="row">
                    <div class="col-md-4">
                        <div class="form-group">
                            <label for="name">
                                <span class="text-danger mr-2">*</span>名稱
                            </label>
                            <input id="name" name="name" type="text" class="form-control mb-2" value="" required autocomplete="off" autofocus @input="onChangeForName">
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="form-group">
                            <label for="tel"><span class="text-danger mr-2">*</span>電話</label>
                            <input id="tel" name="tel" type="text" class="form-control mb-2" value="" placeholder="例：0423825559 或 0912569885" required autocomplete="off">
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="form-group">
                            <label for="birthday">生日</label>
                            <input id="birthday" name="birthday" type="text" class="form-control mb-2" value="" autocomplete="off" placeholder="例：1950-01-01">
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-4">
                        <div class="form-group">
                            <label for="status">
                                <span class="text-danger mr-2">*</span>身分別
                            </label>
                            <select name="status" id="status" class="form-control">
                                <option value="">請選擇...</option>
                                <option value="0">一般民眾</option>
                                <option value="1">符合社福資格</option>
                            </select>
                        </div>
                    </div>

                    <div class="col-md-8">
                        <div class="form-group">
                            <label for="agency_id">隸屬單位</label>
                            <div class="row">
                                <div class="col-md-6">
                                    <select id="agency_id" name="agency_id" class="form-control">
                                        <option value="0">請選擇...</option>
                                    </select>
                                </div>
                                <div class="col-md-6">
                                    <button type="button" class="btn btn-block btn-primary" data-toggle="modal" data-target="#CreateAgencyModal">
                                        <i class="fas fa-plus mr-2"></i>
                                        新增隸屬單位
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="email">信箱</label>
                            <input id="email" name="email" type="email" class="form-control" value="" autocomplete="off">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="content">備註內容</label>
                            <textarea name="content" id="content" class="form-control" cols="30" rows="3"></textarea>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-8">
                        <div id="address_twzipcode" class="form-group">
                            <label>地址</label>
                            <div class="row mb-2">
                                <div class="col-md-4">
                                    <div data-role="county" data-style="form-control" data-name="address_county" data-value=""></div>
                                </div>
                                <div class="col-md-4">
                                    <div data-role="district" data-style="form-control" data-name="address_district" data-value=""></div>
                                </div>
                                <div class="col-md-4">
                                    <div data-role="zipcode" data-style="form-control" data-name="address_zipcode" data-value=""></div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <input id="address_others" type="text" class="form-control" name="address_others" value="" autocomplete="off">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label for="job_title">職稱</label>
                            <input id="job_title" name="job_title" type="text" class="form-control mb-2" value="" autocomplete="off">
                        </div>
                    </div>
                </div>

                <div class="form-group row justify-content-center">
                    <div class="col-md-8">
                        <button type="submit" class="btn btn-block btn-primary">
                            確認新增
                        </button>
                        <a :href="BorrowersIndexURL" class="btn btn-block btn-danger">
                            返回列表
                        </a>
                    </div>
                </div>

            </form>
        </div>
    </div>
    <create-angcey-modal @refresh-agency="refreshAgency"></create-angcey-modal>
</div>
</template>

<script>
export default {
    data(){
        return {
            BorrowersIndexURL: $('#BorrowersIndexURL').html(),
            BorrowersStoreURL: $('#BorrowersStoreURL').html(),
            NameIsIniqueURL: $('#NameIsIniqueURL').html(),
            agencies: [],
        }
    },
    methods: {
        borrowerCreateForm(e) {
            let url = this.BorrowersStoreURL;
            let data = $(e.target).serializeObject();

            axios.post(url, data).then(response => {
                $.showSuccessModal('新增成功', response.data.url);
            }).catch((error) => {
                console.error('新增借閱人時發生錯誤，錯誤訊息：' + error);
                $.showErrorModal(error);
            });
        },
        generateAgenciesOption(added_id = null){
            // 生成 機構 下拉式選單
            let AgenciesListURL = $('#AgenciesListURL').html();
            axios.get(AgenciesListURL).then(response => {
                this.agencies = response.data.agencies;
                for(let i = 0; i < this.agencies.length; i++){
                    $("#agency_id").append($("<option></option>").attr("value", this.agencies[i].id).text(this.agencies[i].name));
                }
                $('#agency_id').selectpicker('refresh');
                if(added_id != null){
                    $('#agency_id').val(added_id);
                    $('#agency_id').selectpicker('refresh');
                }
            });
        },
        refreshAgency(added_id){
            this.generateAgenciesOption(added_id);
        },
        onChangeForName(e){
            this.checkName(e.target.value, this);
        },
        checkName: _.debounce((name, vm) => {
            axios.post(vm.NameIsIniqueURL, {
                name: name
            }).then(response => {
                console.log(response.data.message);
                if(!response.data.isUnique){
                   $.showWarningModal(response.data.message);
                }
            }).catch(error => {
                console.error('檢查借閱人名稱是否重複時發生錯誤，錯誤訊息：' + error);
                $.showErrorModal(error);
            });
        }, 750),
    },
    created() {
        this.generateAgenciesOption();
    },
    mounted(){
        // 地址
        $('#address_twzipcode').twzipcode({
            'readonly': false
        });

        // 生日
        $("#birthday").datepicker({
            dateFormat: 'yy-mm-dd',
            changeYear: true,
            changeMonth: true,
            yearRange: "-80:+0",
        });

        $('#agency_id').selectpicker({
            liveSearch: true
        });
    },
}
</script>

<style>

</style>
