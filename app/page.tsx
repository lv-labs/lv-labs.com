import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { GlitchLogo } from "@/components/glitch-logo"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24">
      <div className="flex flex-col items-center gap-8 text-center">
        {/* Logo */}
        <div className="mb-4 w-full max-w-[640px] h-[140px] md:max-w-[800px] md:h-[300px]">
          <GlitchLogo />
        </div>

        {/* Site Title */}
        {/* <h1 className="text-4xl font-bold tracking-tight md:text-5xl">lv_labs</h1> */}

        {/* Optional tagline */}
        <p className="text-xl text-muted-foreground">experiments in sound</p>

        {/* Navigation Buttons */}
        <div className="mt-6 flex flex-wrap justify-center gap-8">
          <Button asChild size="lg" variant="outline">
            <Link href="/about">about</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/devices">devices</Link>
          </Button>
            <Button asChild size="lg" variant="outline">
            <Link href="/services">services</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/contact">contact</Link>
          </Button>
        </div>
      </div>

      {/* Theme Toggle - Bottom Right */}
      <div className="fixed bottom-4 right-4">
        <ModeToggle />
      </div>
    </main>
  )
}

