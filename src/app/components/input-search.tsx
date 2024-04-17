import React from "react";
import { Input } from "@nextui-org/react";
import { IconSearch } from "@tabler/icons-react";

export default function InputSearch() {
    return (
        <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
            <Input
                type="text"
                placeholder="Buscar"
                startContent={<IconSearch />}
            />
        </div>
    );
}
