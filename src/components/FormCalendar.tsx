import {
  FieldValues,
  Path,
  useController,
  useFormContext,
} from "react-hook-form";
import { Calendar as CalendarIcon } from "lucide-react";
import { FormField, FormItem } from "./ui/form";
import { format } from "date-fns";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { useEffect } from "react";
import { Label } from "./ui/label";

interface FormCalendar<T extends FieldValues> {
  label: string;
  name: Path<T>;
  disabledAt?: (date: Date) => boolean;
  placeholder?: string;
  required?: boolean;
  iconColor?: string;
  className?: string;
  fieldClassName?: string;
  disabled?: boolean;
}

export const FormCalendar = <T extends FieldValues>({
  placeholder,
  name,
  label,
  required,
  iconColor = "#969696",
  className,
  disabledAt,
  fieldClassName,
  disabled,
}: FormCalendar<T>) => {
  const { control } = useFormContext<T>();
  const { field } = useController({ name, control });
  useEffect(() => {
    if (field.value) field.onChange(field.value);
  }, []);
  return (
    <FormItem className={`flex flex-col gap-1 `}>
      <Label htmlFor={name} className="block text-sm font-medium">
        {label}
        {required && <span className="text-error align-top">*</span>}
      </Label>
      <FormField
        control={control}
        name={name}
        render={({ field, fieldState }) => (
          <FormItem className="flex flex-col">
            <Popover modal onOpenChange={(open) => !open && field.onBlur()}>
              <PopoverTrigger asChild disabled={disabled}>
                <Button
                  variant={"outline"}
                  className={`flex h-12 w-full rounded-full !p-[21px] text-sm font-[400] border-[1px] border-border !placeholder:text-placeholder placeholder:font-normal file:text-sm file:font-medium focus:border-[1px] focus:border-[#1551B2] disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-none hover:bg-white bg-white ${
                    fieldClassName ?? ""
                  }`}
                  disabled={disabled}
                >
                  {field.value ? (
                    format(field.value, "MM/dd/yyyy")
                  ) : (
                    <span className="text-placeholder ">{placeholder}</span>
                  )}
                  <CalendarIcon
                    className="ml-auto h-4 w-4 "
                    style={{ color: iconColor }}
                  />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 " align="end">
                <Calendar
                  mode="single"
                  selected={field.value}
                  onSelect={field.onChange}
                  disabled={disabledAt}
                  initialFocus
                  className={className}
                />
              </PopoverContent>
            </Popover>
            {fieldState.error && (
              <p className="text-error text-xs">{fieldState.error.message}</p>
            )}
          </FormItem>
        )}
      />
    </FormItem>
  );
};
