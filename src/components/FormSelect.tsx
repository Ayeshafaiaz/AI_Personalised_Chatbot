import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Controller, useFormContext } from "react-hook-form";
import { FormControl, FormItem, FormLabel } from "../components/ui/form";
interface Option {
  label: string;
  value: string;
}

interface FormSelect {
  options: Option[];
  placeholder?: string;
  groupLabel?: string;
  name: string;
  defaultValue?: string;
  label?: string;
  onChange?: (value: string) => void;
  required?: boolean;
  disabled?: boolean;
  value?: string;
}

export const FormSelect: React.FC<FormSelect> = ({
  value,
  options,
  placeholder,
  groupLabel,
  name,
  defaultValue,
  label,
  onChange,
  required,
  disabled,
}) => {
  const { control, trigger } = useFormContext();
  return (
    <FormItem className="flex flex-col">
      {label && (
        <FormLabel htmlFor={name} className="block text-sm font-[600]">
          {label}
          {required && <span className="text-error align-top pl-1">*</span>}
        </FormLabel>
      )}
      <FormControl className="flex items-center">
        <Controller
          name={name}
          control={control}
          render={({ field, fieldState }) => (
            <>
              <Select
                disabled={disabled}
                onValueChange={async (value) => {
                  if (onChange) {
                    onChange(value);
                  }
                  field.onChange(value);
                  await trigger(name);
                }}
                onOpenChange={(isOpen) => {
                  if (!isOpen) {
                    trigger(name);
                  }
                }}
                value={(field.value as string) || defaultValue || value}
              >
                <SelectTrigger className="rounded-full w-full bg-white p-[21px] ">
                  <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent className="">
                  <SelectGroup>
                    <SelectLabel className="">{groupLabel}</SelectLabel>
                    {(options || []).map((option) => (
                      <SelectItem
                        key={option.value}
                        value={option.value}
                        className="font-medium"
                        onBlur={() => trigger(name)}
                      >
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              {fieldState.error && (
                <p className="text-error text-xs">{fieldState.error.message}</p>
              )}
            </>
          )}
        />
      </FormControl>
    </FormItem>
  );
};
