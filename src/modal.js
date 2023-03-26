import { reactive, toRefs } from 'vue';

export default function useModal() {
  const state = reactive({
    isOpen: false,
    title: '',
  });

  function open(title) {
    state.isOpen = true;
    state.title = title;
  }

  function close() {
    state.isOpen = false;
  }

  return { ...toRefs(state), open, close };
}