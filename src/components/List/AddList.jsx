import classNames from "classnames";
import { Field } from "formik";

const AddList = (props) => {
  const { title, label, className } = props;

  return (
    <Field name={title}>
      {({ field }) => (
        <label /*className={classNames("flex flex-col gap-2", className)}*/>
          <span /*className="text-sm font-semibold"*/>
            {label}
            <input
              {...field}
              /*className="border-2 border-black px-2 py-1"*/
              placeholder="Add a title"
            />
          </span>
        </label>
      )}
    </Field>
  );
};

export default AddTask;
