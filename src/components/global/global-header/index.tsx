'use client'
import { Workspace } from "@prisma/client";
import { usePathname } from "next/navigation";
import React from "react";
 type Props = {workspace : Workspace}

 const GlobalHeader = ({workspace}:Props)=>{
    const pathName = usePathname().split( `/dashboard/${workspace.id}`)[1]
    return <article className="flex flex-col gap-2">
      <span className="text-[#707070] text-xs">{workspace.type.toLocaleUpperCase()}</span>
      <h1 className="text-4xl font-bold">
         {pathName && !pathName.includes('folder')
         ? pathName.charAt(1).toUpperCase() + pathName.slice(2).toLowerCase()
         : 'My Library'
         }
      </h1>
    </article>
 }
 export default GlobalHeader