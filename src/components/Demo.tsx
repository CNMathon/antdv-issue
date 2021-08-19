import { defineComponent, reactive } from "vue";
import { Modal } from "ant-design-vue";

const Page = defineComponent({
  setup() {
    const showModal = () => {
      const formState = reactive({
        userName: "",
        password: "",
      });

      const contentDOM = () => (
        <a-form layout="vertical" model={formState}>
          <a-form-item label="UserName">
            <a-input v-model-value={formState.userName} />
          </a-form-item>
          <a-form-item label="Password">
            <a-input v-model-value={formState.password} />
          </a-form-item>
        </a-form>
      );

      Modal.confirm({
        title: "Form",
        content: contentDOM(),
        onOk() {
          console.log("OK");
        },
        onCancel() {
          console.log("Cancel");
        },
        class: "test",
      });
    };

    return () => (
      <div>
        <a-button onClick={showModal}>Open Modal</a-button>
      </div>
    );
  },
});

export default Page;
