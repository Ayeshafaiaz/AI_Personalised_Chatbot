import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";
import { FormItem, FormLabel, FormControl } from "../components/ui/form";
import { Input, InputProps } from "../components/ui/input";

interface FormInput<T extends FieldValues> extends InputProps {
  name: Path<T>;
  label?: string;
  placeholder?: string;
  required?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  allowNumbers?: boolean;
  allowAlphabets?: boolean;
  hideLabel?: boolean;
  hasControl?: boolean;
}

export const FormInput = <T extends FieldValues>({
  name,
  label,
  placeholder,
  required,
  onChange,
  hideLabel,
  allowNumbers,
  allowAlphabets,
  hasControl = true,
  defaultValue,
  ...inputProps
}: FormInput<T>) => {
  const { control } = useFormContext();
  return (
    <FormItem className={`flex flex-col `}>
      {!hideLabel && (
        <FormLabel htmlFor={name} className="block text-sm font-[600]">
          {label}
          {required && <span className="text-error align-top pl-1">*</span>}
        </FormLabel>
      )}
      {hasControl ? (
        <FormControl className="flex items-center">
          <Controller
            name={name}
            control={control}
            render={({ field, fieldState }) => (
              <>
                <Input
                  {...field}
                  id={name}
                  onChange={(e) => {
                    if (allowAlphabets) {
                      e.target.value = e.target.value.replace(/[0-9]/g, "");
                    }
                    if (allowNumbers) {
                      e.target.value = e.target.value.replace(/[^0-9]/g, "");
                    }

                    if (e.target.value.length === 0) field.onChange(undefined);
                    else field.onChange(e);
                    if (onChange) {
                      onChange(e);
                    }
                  }}
                  value={field.value}
                  placeholder={placeholder}
                  {...inputProps}
                />
                {fieldState.error && (
                  <p className="text-error text-xs">
                    {fieldState.error.message}
                  </p>
                )}
              </>
            )}
          />
        </FormControl>
      ) : (
        <Input
          onChange={(e) => {
            if (onChange) {
              onChange(e);
            }
          }}
          value={defaultValue}
          placeholder={placeholder}
          {...inputProps}
        />
      )}
    </FormItem>
  );
};
