import { currentUser } from "@clerk/nextjs/server"
import { ConvexHttpClient } from "convex/browser"
import { api } from "../../../../convex/_generated/api"
import Link from "next/link"
import { Blocks, Code2, Sparkles, Activity, ChevronRight, Menu } from "lucide-react"
import { SignedIn } from "@clerk/nextjs"
import ThemeSelector from "./ThemeSelector"
import LanguageSelector from "./LanguageSelector"
import RunButton from "./RunButton"
import HeaderProfileBtn from "./HeaderProfileBtn"

async function Header() {
  const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!)
  const user = await currentUser()

  const convexUser = await convex.query(api.users.getUser, {
    userId: user?.id || "",
  })

  return (
    <div className="relative z-10">
      <div className="flex items-center justify-between max-w-screen-2xl mx-auto bg-[#0d1117] p-4 lg:px-6 mb-4 rounded-2xl border border-slate-800/50 shadow-2xl">
        {/* Mobile menu button */}
        <button className="lg:hidden p-2 hover:bg-slate-800/50 rounded-lg">
          <Menu className="w-5 h-5 text-slate-400" />
        </button>

        {/* Left section with logo and navigation */}
        <div className="hidden lg:flex items-center gap-12 2xl:gap-16">
          <Link href="/" className="flex items-center gap-3 group relative">
            {/* Logo hover effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 to-blue-400/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl" />

            {/* Logo container */}
            <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-2.5 rounded-xl ring-1 ring-white/10 group-hover:ring-blue-500/50 transition-all duration-300">
              <Blocks className="size-6 text-blue-400 transform -rotate-6 group-hover:rotate-0 transition-all duration-500" />
            </div>

            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text tracking-tight">
              CodeCraft
            </span>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center space-x-4 2xl:space-x-6">
            <Link
              href="/snippets"
              className="relative group flex items-center gap-2.5 px-5 py-2 rounded-xl 
                bg-slate-800/30 hover:bg-slate-700/30
                border border-slate-700/50 hover:border-blue-500/50 
                transition-all duration-300"
            >
              <Code2 className="w-4 h-4 text-blue-400 group-hover:text-blue-300 transition-colors" />
              <span className="text-sm font-medium text-slate-300 group-hover:text-blue-100 transition-colors">
                Snippets
              </span>
            </Link>
          </nav>
        </div>

        {/* Right section with actions */}
        <div className="flex items-center gap-2 sm:gap-4 lg:gap-6">
          {/* Theme and Language selectors - Hidden on mobile */}
          <div className="hidden sm:flex items-center gap-4">
            <ThemeSelector />
            <LanguageSelector />
          </div>

          {/* Activity button - Compact on mobile */}
          <Link
            href="/profile"
            className="group flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl
              bg-slate-800/30 hover:bg-slate-700/30
              border border-slate-700/50 hover:border-blue-500/50
              transition-all duration-300"
          >
            <div className="relative">
              <Activity className="w-4 h-4 text-blue-400 group-hover:text-blue-300 transition-colors" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
            </div>
            <span className="hidden sm:block text-sm font-medium text-slate-300 group-hover:text-blue-100 transition-colors">
              Activity
            </span>
          </Link>

    
          {/* Run button */}
          <SignedIn>
            <RunButton />
          </SignedIn>

          {/* Profile button */}
          <div className="border-l border-slate-800 pl-4">
            <HeaderProfileBtn />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header

