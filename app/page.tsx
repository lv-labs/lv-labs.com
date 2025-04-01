import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { GlitchLogo } from "@/components/glitch-logo"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24">
      <div className="flex flex-col items-center gap-8 text-center">
        {/* Logo */}
        <div className="mb-4 w-full max-w-[640px] h-[320px] md:max-w-[800px] md:h-[400px]">
          <GlitchLogo />
        </div>

        {/* Site Title */}
        {/* <h1 className="text-4xl font-bold tracking-tight md:text-5xl">lv_labs</h1> */}

        {/* Optional tagline */}
        <p className="text-lg text-muted-foreground">experimental sound machines</p>

        {/* Navigation Buttons */}
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/about">about</Link>
          </Button>
          <Button asChild size="lg">
            <Link href="/products">eurorack</Link>
          </Button>
          <Button asChild size="lg">
            <Link href="/services">services</Link>
          </Button>
          <Button asChild size="lg">
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

