<template>
  <main id="Home-page">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <h1>Main Reward</h1>
        <table class="table reward table-striped table-bordered table-hover">
          <thead class="thead-dark">
            <tr>
              <th>ชื่อรางวัล</th>
            </tr>
          </thead>
          <tbody>
              <tr>Daily Scrum</tr>
              <tr>Sprint Planning</tr>
              <tr>Sprint Review</tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
</template>
<script>
import DataTableLib from "datatables.net-bs5";
import ButtonsHtml5 from "datatables.net-buttons/js/buttons.html5";
import "datatables.net-responsive-bs5";
import DataTable from "datatables.net-vue3";
import JsZip from "jszip";
import pdfmake from "pdfmake";
import Modal from "../components/Modal.vue";

window.JsZip = JsZip;
DataTable.use(DataTableLib);
DataTable.use(pdfmake);
DataTable.use(ButtonsHtml5);
export default {
  components: {
    DataTable,
    Modal,
  },
};
</script>
<style>
@import "datatables.net-bs5";
@import url('https://fonts.googleapis.com/css2?family=Prompt:wght@600&display=swap');
thead {
  background-color: #6abaf0;
}
.white-text {
  color: white;
}
.reward{
  margin-top: 20px;
  font-size: 20px;

}

</style>
