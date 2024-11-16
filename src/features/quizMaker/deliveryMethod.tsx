import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { Popover, PopoverContent, PopoverTrigger } from "~/components/ui/popover";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";

interface DeliveryMethodProps {
  value: string;
  onChange: (value: string) => void;
}

const options = [
  { value: "email", label: "Email" },
  { value: "whatsapp", label: "WhatsApp" },
];

export const DeliveryMethod: React.FC<DeliveryMethodProps> = ({ value, onChange }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[150px] justify-between"
        >
          {value
            ? options.find((option) => option.value === value)?.label
            : "Select"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[150px] p-2">
        {options.map((option) => (
          <div
            key={option.value}
            className={cn(
              "flex items-center p-2 cursor-pointer hover:bg-gray-100",
              value === option.value ? "bg-gray-200" : ""
            )}
            onClick={() => {
              onChange(option.value);
              setOpen(false);
            }}
          >
            <Check
              className={cn(
                "mr-2 h-4 w-4",
                value === option.value ? "opacity-100" : "opacity-0"
              )}
            />
            {option.label}
          </div>
        ))}
      </PopoverContent>
    </Popover>
  );
};
