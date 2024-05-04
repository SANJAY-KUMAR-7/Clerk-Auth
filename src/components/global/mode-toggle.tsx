'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export function ModeToggle() {
  const { setTheme } = useTheme()
  return (
    <DropdownMenu>

      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme('light')}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className='flex items-center justify-center'
        >
          <Sun className="  h-[1.2rem] w-[1.2rem]  transition-all dark:hidden" />
          <Moon className="hidden dark:inline-block  h-[1.2rem] w-[1.2rem]  transition-all   " />
          
        </Button>
      </DropdownMenuTrigger>
    </DropdownMenu>
  )
}