<template>
    <transition name="modal-animation">
      <div v-show="modalActive" class="Accmodal">
        <transition name="modal-animation-inner">
          <div v-show="modalActive" class="modal-inner">
            <i @click="close" class="far fa-times-circle"></i>
            <form class="mb-2" id="formtasklist" autocomplete="off">
              <div class="card-body">
                <h1>เพิ่มข้อมูล</h1>
                <div class="form-group">
                  <label for="tl_name" class="form-label"
                    >ชื่อ<span style="color: red">*</span></label
                  >
                  <input
                    type="text"
                    class="form-control"
                    name="inputValue[]"
                    v-model="achieve.achiveNames"
                  />
                  <font id="tlnameMsg" class="small text-danger"></font>
                </div>
                <div class="form-group">
                  <label for="tl_name" class="form-label"
                    >คะแนน <span style="color: red">*</span></label
                  >
                  <input
                    type="text"
                    class="form-control"
                    name="inputValue[]"
                    v-model="achieve.score"
                  />
                  <font id="tlnameMsg" class="small text-danger"></font>
                </div>
              </div>
            </form>
            <slot />
            <div class="mt-2" style="display: flex; justify-content: end">
              <button style="margin-right: 10px" @click="Create()" type="button">
                ยืนยัน
              </button>
              <button
                style="background-color: #9b9b9b"
                @click="close"
                type="button"
              >
                ยกเลิก
              </button>
            </div>
          </div>
        </transition>
      </div>
    </transition>
</template>
  
<script>
import axios from "axios";
export default {
    data() {
      return {
        achieve: {
          achiveNames: "",
          score: ""
        },
      };
    },
    props: ["modalActive"],
    setup(props, { emit }) {
      const close = () => {
        emit("close");
      };
  
      return { close };
    },
  
    methods: {
      async Create() {
        try {
          await axios
            .post("http://localhost:3001/achive/create", this.achieve)
            .then(() => {
              this.$emit("close");
            });
          window.location.reload();
        } catch (error) {
          console.log(error);
          window.alert("ERROR");
        }
      },
  
    },
  };
</script>
  
  <style lang="scss" scoped>
  .modal-animation-enter-active,
  .modal-animation-leave-active {
    transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
  }
  
  .modal-animation-enter-from,
  .modal-animation-leave-to {
    opacity: 0;
  }
  
  .modal-animation-inner-enter-active {
    transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
  }
  
  .modal-animation-inner-leave-active {
    transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
  }
  
  .modal-animation-inner-enter-from {
    opacity: 0;
    transform: scale(0.8);
  }
  
  .modal-animation-inner-leave-to {
    transform: scale(0.8);
  }
  
  .Accmodal {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 0.7);
  
    .modal-inner {
      position: relative;
      max-width: 640px;
      width: 80%;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 4px -1px rgba(0, 0, 0, 0.06);
      background-color: #fff;
      padding: 64px 16px;
  
      i {
        position: absolute;
        top: 15px;
        right: 15px;
        font-size: 20px;
        cursor: pointer;
  
        &:hover {
          color: crimson;
        }
      }
  
      button {
        padding: 20px 30px;
        border: none;
        font-size: 16px;
        background-color: crimson;
        color: #fff;
        cursor: pointer;
      }
    }
  }
  </style>
  