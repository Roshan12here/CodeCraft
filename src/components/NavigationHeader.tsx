import { currentUser } from "@clerk/nextjs/server"
import { ConvexHttpClient } from "convex/browser"
import Link from "next/link"
import { Blocks, Code2, Sparkles, Activity, CodeSquare, Menu } from "lucide-react"
import { SignedIn } from "@clerk/nextjs"
import HeaderProfileBtn from "@/app/(root)/_components/HeaderProfileBtn"

function Header() {
  return (
    <div className="relative z-[100]">
      <div className="flex items-center justify-between max-w-7xl mx-auto bg-gradient-to-r from-slate-900/80 to-slate-800/80 backdrop-blur-lg p-4 lg:px-6 mb-4 rounded-2xl border border-slate-700 shadow-2xl shadow-slate-800/30">
        {/* Mobile menu button */}
        <button className="lg:hidden p-2 hover:bg-slate-700/30 rounded-lg transition-colors duration-200">
          <Menu className="w-5 h-5 text-slate-400" />
        </button>

        {/* Left section with logo and navigation */}
        <div className="hidden lg:flex items-center gap-12 2xl:gap-16">
          <Link href="/" className="flex items-center gap-3 group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-700 blur-md shadow-lg" />
            <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-2 rounded-xl ring-1 ring-white/10 group-hover:ring-blue-400/50 transition-all duration-300">
              <Blocks className="w-6 h-6 text-blue-400 transform -rotate-6 group-hover:rotate-0 transition-transform duration-500" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text tracking-tight animate-pulse">
              CodeCraft
            </span>
          </Link>
       
        </div>

        {/* Right section with actions */}
        <div className="flex items-center gap-2 sm:gap-4 lg:gap-6">
          {/* Activity button */}
          <Link
            href="/profile"
            className="group flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl
              bg-slate-800/30 hover:bg-slate-700/30
              border border-slate-700/50 hover:border-blue-400/50
              transition-all duration-300  text-sm font-medium 
              text-slate-300 group-hover:text-blue-300"
          >
            <Activity className="w-4 h-4 text-blue-400 group-hover:text-blue-300 transition-colors" />
            Activity
          </Link>

          {/* Code Editor button with distinct styling */}
          <Link
            href="/snippets"
            className="relative group flex items-center gap-2.5 px-5 py-2 rounded-xl 
              bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600
              border-2 border-purple-500 hover:border-purple-600 transition-all duration-300
              shadow-lg shadow-purple-500/20 hover:shadow-xl hover:shadow-purple-600/30
              transform hover:scale-[1.01] active:scale-95 box-shadow
            "
          >
            <CodeSquare className="w-5 h-5 text-white group-hover:text-purple-300 transition-colors" />
            <span className="text-sm font-semibold text-white group-hover:text-purple-200 transition-colors">
              Code Editor
            </span>
          </Link>

          {/* Snippets button */}
          <Link
            href="/snippets"
            className="group flex items-center gap-2.5 px-5 py-2 rounded-xl 
              bg-slate-800/30 hover:bg-slate-700/30
              border border-slate-700/50 hover:border-blue-400/50 
              transition-all duration-300  text-sm font-medium 
              text-slate-300 group-hover:text-blue-300"
          >
            <Code2 className="w-4 h-4 text-blue-400 group-hover:text-blue-300 transition-colors" />
            Snippets
          </Link>

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

