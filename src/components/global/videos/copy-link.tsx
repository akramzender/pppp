import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";
import React from "react";
import { toast } from "sonner";

type Props = {
    videoId : string
    className? : string
    variant?:
    |'default'
    |'destructive'
    |'outline'
    |'secondary'
    |'ghost'
    |'link'
    |null
}

const CopyLink = ({videoId,className,variant}:Props)=> {
    const onCopyClipboard =  () => {
        navigator.clipboard.writeText(`${process.env.NEXT_PUBLIC_HOST_URL}/preview/${videoId}`)
        return toast('Copied',{description:'Link succesfully copied'})
    }
    return (<Button variant={variant} onClick={onCopyClipboard} className={className}>
                <Link
                size={20}
                className="text-[#a4a4a4] cursor-pointer"/>
        </Button>
)}

export default CopyLink