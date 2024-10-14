'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import Logo from "@/app/logo"
import { CreditCardIcon, SettingsIcon, ShieldIcon, MenuIcon } from "lucide-react"
import Link from 'next/link'


import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"


import { Button } from "@/components/ui/button"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"

export default function Navigation() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()


  const handleBillingPortal = async () => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/stripe/portal', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (!response.ok) {
        throw new Error('Failed to create portal session')
      }

      const { url } = await response.json()
      router.push(url)
    } catch (error) {
      console.error('Error creating portal session:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const NavLinks = () => (
    <NavigationMenu className="max-w-full justify-center md:justify-start">
      <NavigationMenuList className="flex-col md:flex-row">
        <NavigationMenuItem>
          <Link href="/articles" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Articles
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )

  return (
    <nav className="w-full border-b border-gray-50">
      <div className="max-w-7xl mx-auto px-3">
        <div className="flex items-center justify-between py-2">
          {/* Left side - Logo */}
          <div className="w-[300px] flex items-center">
            <Link href="/" className="flex-shrink-0">
              <Logo color="black" width={150} height={50} />
            </Link>
          </div>

          <div className="hidden md:block w-full">
            <NavLinks />
          </div>
          {/* Mobile Navigation */}
          <div>
          <Link
            href="https://www.youtube.com/@storefront"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 text-sm font-bold text-white bg-red-500 hover:bg-red-600 rounded-sm transition-colors"
          >
            YouTube
          </Link>
          </div>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MenuIcon className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-4 mt-4">
                  <div className="w-full">
                    <NavLinks />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}