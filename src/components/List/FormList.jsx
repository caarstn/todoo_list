import AddList from "@/components/AddList.jsx";
import classNames from "classnames";
import { Form, Formik } from "formik";
import * as yup from "yup";

const initialValue = {
  title: "",
};

const validationSchema = yup.object().shape({
  title: yup.string().required().label("Title"),
});

const FormList = (props) => {
  const { className, onSubmit, initialValue, validationSchema } = props;

  return (
    <Formik
      onSubmit={onSubmit}
      initialValue={initialValue}
      validationSchema={validationSchema}
    >
      <Form>
        <AddList name="title" label="Title" />
      </Form>
      <Button type="submit">ADD THE LIST</Button>
    </Formik>
  );
};

export default FormList;
