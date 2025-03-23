import React from "react";
import { FormField, FormItem, FormControl } from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";
import { useFormContext } from "react-hook-form";

interface FormSwitchProps {
  name: string;
}

const FormSwitch: React.FC<FormSwitchProps> = ({ name }) => {
  const { control } = useFormContext();
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-row items-center text-sm font-[500] align-middle space-x-3 space-y-0 p-2">
          <FormControl>
            <div className="flex flex-row gap-4">
              <Switch
                checked={field.value as boolean}
                onCheckedChange={field.onChange}
                className={"w-[70px] h-[25px]"}
              />{" "}
            </div>
          </FormControl>
        </FormItem>
      )}
    />
  );
};

export default FormSwitch;
