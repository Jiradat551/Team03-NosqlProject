<template>
  <main id="Home-page">
    <div class="container">
      <div class="row">
        <CreateAccModal v-if="modalVisible" @close="closeModal">
          <div class="modal-content"></div>
         </CreateAccModal>
        <div class="col-12">
          <CreateAccModal @close="toggleModal" :modalActive="modalActive">
            <div class="modal-content"></div>
          </CreateAccModal>
          <button class="btn btn-primary" style="margin-right: 10px;background-color: #245dc1;border-color: #245dc1;"  @click="toggleModal">
            <i class="bi bi-plus-square" style="padding-right: 6px"></i><span>เพิ่มข้อมูล</span>
          </button>
        </div>
        <div>
          <div class="row">
            <div class="col-lg-8 offset-lg-12">
              <div class="table-responsive">
                <DataTable
                  :data="Acc"
                  :columns="columns"
                  class="table table-striped table-bordered display"
                  :options="{
                    responsive: true,
                    autoWidth: false,
                    dom: 'rftp',
                    language: {
                      search: 'ค้นหา',
                      zeroRecords: 'ไม่ค้นพบ',
                      info: 'แสดง _START_ จาก _END_ ถึง _TOTAL_ ทั้งหมด',
                      paginate: { previous: 'ก่อนหน้า', next: 'ถัดไป' },
                    },
                  }"
                >
                  <thead>
                    <tr>
                      <th>ลำดับ</th>
                      <th>ชื่อ</th>
                      <th>คะแนน</th>
                      <th>ตัวดำเนินการ</th>
                    </tr>
                  </thead>
                </DataTable>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import axios from "axios";
import DataTableLib from "datatables.net-bs5";
import ButtonsHtml5 from "datatables.net-buttons/js/buttons.html5";
import "datatables.net-responsive-bs5";
import DataTable from "datatables.net-vue3";
import JsZip from "jszip";
import pdfmake from "pdfmake";
import { ref } from "vue";
import CreateAccModal from "../components/AchieveModal.vue";


window.JsZip = JsZip;
DataTable.use(DataTableLib);
DataTable.use(pdfmake);
DataTable.use(ButtonsHtml5);
export default {
  components: {
    DataTable,
    CreateAccModal,

  },
  setup() {
    const modalActive = ref(false);

    const toggleModal = () => {
      modalActive.value = !modalActive.value;
    };

    return { modalActive, toggleModal };
  },
  data() {
    return {
      modalVisible: false,
      Acc: null,
      columns: [
        {
          data: null,
          render: function (data, type, row, meta) {
            return `${meta.row + 1}`;
            
          },
        },
        {data:'achiveNames',className:'text-center' },
        {data:'score',className:'text-center' },
        {
          data: null,
          className: "text-center",
          orderable: false,
          searchable: false,
          width: "200px",
          render: function (data, type, row, meta) {
            return `<button class="btn btn-primary" style="background-color: #245dc1; border-color: #245dc1" @click="editData(${row.id})">
              <i class="bi bi-pencil-square" style="padding-right: 6px"></i><span>แก้ไข</span>
              </button>
              <button class="btn btn-danger" style="background-color: #e98a7f; border-color: #e98a7f" @click="deleteData(${row.id})">
              <i class="bi bi-trash" style="padding-right: 6px"></i><span>ลบ</span>
              </button>`;
          },
        },
      ],
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      try {
        axios
          .get("http://localhost:3001/achive/Achievement")
          .then((Response) => (this.Acc = Response.data));
      } catch (error) {
        console.log(error);
        window.alert("ERROR");
      }
    },
    closeModal() {
      this.modalVisible = false;
    },
  },
};
</script>
<style>
@import "datatables.net-bs5";
thead {
  background-color: #ef4c4d;
}
.white-text {
  color: white;
}
</style>
