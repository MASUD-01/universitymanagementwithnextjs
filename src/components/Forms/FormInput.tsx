"use client";
import { Input } from "antd";
import { useFormContext, Controller } from "react-hook-form";

//49.7 video
interface IInput {
  type?: string;
  name: string;
  value?: string;
  size?: "large" | "small";
  id?: string;
  placeholder?: string;
  validation?: object;
  label?: string;
}
const FormInput = ({
  name,
  type,
  size,
  value,
  id,
  placeholder,
  validation,
  label,
}: IInput) => {
  const { control } = useFormContext(); // eikhane amra nije control na kore (state diye manage na kore control e dilam se manage korbe)

  return (
    <>
      {label ? label : null}
      <Controller
        control={control}
        name={name}
        render={({ field /* : { onChange, onBlur, value, ref } */ }) =>
          type == "password" ? (
            <Input.Password
              type={type}
              size={size}
              placeholder={placeholder}
              {...field}
              value={value ? value : field.value}
            />
          ) : (
            <Input
              type={type}
              size={size}
              placeholder={placeholder}
              {...field}
              value={value ? value : field.value}
            />
          )
        }
      />
    </>
  );
};

export default FormInput;
