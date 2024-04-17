import { Avatar } from "@nextui-org/react"
import { AuthButtonServer } from "./auth-button-server";
import { IconDots } from "@tabler/icons-react"
import { Popover, PopoverTrigger, PopoverContent, Button } from "@nextui-org/react";

const Profile = ({ userAvatarUrl, userName }: {
    userAvatarUrl: string
    userName: string
}) => {
    return (
        <div className="flex items-center gap-x-4">
            <Avatar src={userAvatarUrl} isBordered />
            <div className="flex flex-col">
                <span className="font-bold text-lg">Hiroshi</span>
                <span className="text-sm text-white/50">@{userName}</span>
            </div>
            <Popover placement="top" showArrow={true}>
                <PopoverTrigger>
                    <Button>
                        <IconDots />
                    </Button>
                </PopoverTrigger>
                <PopoverContent>
                    <div className="px-1 py-2">
                        <AuthButtonServer />
                    </div>
                </PopoverContent>
            </Popover>
            {/* <Dropdown>
                <DropdownTrigger>
                    <Button variant="light">
                        <IconDots />
                    </Button>
                </DropdownTrigger>
                <DropdownMenu>
                    <DropdownItem key="logout">
                        <AuthButtonServer />
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown> */}
        </div>
    )
}

export default Profile