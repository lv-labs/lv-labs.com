"use client"

import { useTheme } from "@/components/theme-provider"
import { useEffect, useRef, useState } from "react"

export function GlitchLogo() {
  const { theme } = useTheme()
  const svgRef = useRef<SVGSVGElement>(null)
  const [hoveredPath, setHoveredPath] = useState<number | null>(null)

  // Random glitch effect
  useEffect(() => {
    if (!svgRef.current) return

    // Only select paths with the logo-path class
    const paths = svgRef.current.querySelectorAll("path.logo-path") as NodeListOf<SVGPathElement>
    const visiblePaths = Array.from(paths)

    // Create separate intervals for hovered and non-hovered paths
    const normalInterval = setInterval(() => {
      if (Math.random() > 0.75) {
        visiblePaths.forEach((path, index) => {
          if (index !== hoveredPath) {
            const translateX = Math.random() * 20 - 10
            const translateY = Math.random() * 10 - 5
            path.style.transform = `translate(${translateX}px, ${translateY}px)`
            path.style.opacity = Math.random() > 0.75 ? "1" : "0.3"

            setTimeout(
              () => {
                path.style.transform = "translate(0, 0)"
                path.style.opacity = "1"
              },
              30 + Math.random() * 80,
            )
          }
        })
      }
    }, 300) // Normal interval for non-hovered paths

    const hoveredInterval = hoveredPath !== null ? setInterval(() => {
      if (Math.random() > 0.4) {
        const path = visiblePaths[hoveredPath]
        const translateX = Math.random() * 40 - 20
        const translateY = Math.random() * 20 - 10
        path.style.transform = `translate(${translateX}px, ${translateY}px)`
        path.style.opacity = Math.random() > 0.7 ? "1" : "0.3"

        setTimeout(
          () => {
            path.style.transform = "translate(0, 0)"
            path.style.opacity = "1"
          },
          20 + Math.random() * 50,
        )
      }
    }, 50) : null // Faster interval for hovered path

    return () => {
      clearInterval(normalInterval)
      if (hoveredInterval) clearInterval(hoveredInterval)
    }
  }, [hoveredPath])

  // Logo color based on theme
  const strokeColor = theme === "dark" ? "rgb(192, 161, 137)" : "rgb(0, 0, 255)"

  return (
    <div className="flex items-center justify-center w-full h-full">
      <svg
        ref={svgRef}
        width="100%"
        height="100%"
        viewBox="-8 -40 600 150"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible max-w-[600px]"
      >
        <style jsx>{`
          .logo-path {
            stroke-opacity: 1;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-miterlimit: 10;
            stroke-width: 5.68;
            transition: stroke 0.3s ease;
          }

          .hitbox-path {
            stroke-opacity: 0;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-miterlimit: 10;
            stroke-width: 40;
          }
        `}</style>

        {/* Your SVG paths */}
        <g>
          {/* Invisible wider paths for hitbox */}
          <path
            fill="none"
            stroke="transparent"
            className="hitbox-path"
            d="M 92.09261707313408 -32.84 C 92.09261707313408 -32.84 59.372499999999945 100 59.372499999999945 100"
            onMouseEnter={() => setHoveredPath(0)}
            onMouseLeave={() => setHoveredPath(null)}
          />
          <path
            fill="none"
            stroke={strokeColor}
            className="logo-path"
            d="M 92.09261707313408 -32.84 C 92.09261707313408 -32.84 59.372499999999945 100 59.372499999999945 100"
          />
          <path
            fill="none"
            stroke="transparent"
            className="hitbox-path"
            d="M 102.5804423454631 22.510000000000005 C 102.5804423454631 22.510000000000005 122.56909134480486 102.76750000000001 122.56909134480486 102.76750000000001 C 122.56909134480486 102.76750000000001 169.00044234546306 22.510000000000005 169.00044234546306 22.510000000000005"
            onMouseEnter={() => setHoveredPath(1)}
            onMouseLeave={() => setHoveredPath(null)}
          />
          <path
            fill="none"
            stroke={strokeColor}
            className="logo-path"
            d="M 102.5804423454631 22.510000000000005 C 102.5804423454631 22.510000000000005 122.56909134480486 102.76750000000001 122.56909134480486 102.76750000000001 C 122.56909134480486 102.76750000000001 169.00044234546306 22.510000000000005 169.00044234546306 22.510000000000005"
          />
          <path
            fill="none"
            stroke="transparent"
            className="hitbox-path"
            d="M 168.19652292964793 88.93 C 168.19652292964793 88.93 167.30500000000006 100 167.30500000000006 100 C 167.30500000000006 100 233.72500000000002 100 233.72500000000002 100 C 233.72500000000002 100 234.8394036620599 86.1625 234.8394036620599 86.1625"
            onMouseEnter={() => setHoveredPath(2)}
            onMouseLeave={() => setHoveredPath(null)}
          />
          <path
            fill="none"
            stroke={strokeColor}
            className="logo-path"
            d="M 168.19652292964793 88.93 C 168.19652292964793 88.93 167.30500000000006 100 167.30500000000006 100 C 167.30500000000006 100 233.72500000000002 100 233.72500000000002 100 C 233.72500000000002 100 234.8394036620599 86.1625 234.8394036620599 86.1625"
          />
          <path
            fill="none"
            stroke="transparent"
            className="hitbox-path"
            d="M 273.51045241820066 -32.84 C 273.51045241820066 -32.84 253.09749999999997 100 253.09749999999997 100"
            onMouseEnter={() => setHoveredPath(3)}
            onMouseLeave={() => setHoveredPath(null)}
          />
          <path
            fill="none"
            stroke={strokeColor}
            className="logo-path"
            d="M 273.51045241820066 -32.84 C 273.51045241820066 -32.84 253.09749999999997 100 253.09749999999997 100"
          />
          <path
            fill="none"
            stroke="transparent"
            className="hitbox-path"
            d="M 306.2753081363354 22.510000000000005 C 306.2753081363354 22.510000000000005 361.62530813633543 22.510000000000005 361.62530813633543 22.510000000000005 C 361.62530813633543 22.510000000000005 344.42500000000007 100 344.42500000000007 100 C 344.42500000000007 100 289.07500000000005 100 289.07500000000005 100 C 289.07500000000005 100 297.67515406816767 61.254999999999995 297.67515406816767 61.254999999999995 C 297.67515406816767 61.254999999999995 353.0251540681677 61.254999999999995 353.0251540681677 61.254999999999995"
            onMouseEnter={() => setHoveredPath(4)}
            onMouseLeave={() => setHoveredPath(null)}
          />
          <path
            fill="none"
            stroke={strokeColor}
            className="logo-path"
            d="M 306.2753081363354 22.510000000000005 C 306.2753081363354 22.510000000000005 361.62530813633543 22.510000000000005 361.62530813633543 22.510000000000005 C 361.62530813633543 22.510000000000005 344.42500000000007 100 344.42500000000007 100 C 344.42500000000007 100 289.07500000000005 100 289.07500000000005 100 C 289.07500000000005 100 297.67515406816767 61.254999999999995 297.67515406816767 61.254999999999995 C 297.67515406816767 61.254999999999995 353.0251540681677 61.254999999999995 353.0251540681677 61.254999999999995"
          />
          <path
            fill="none"
            stroke="transparent"
            className="hitbox-path"
            d="M 399.13765895958954 -32.84 C 399.13765895958954 -32.84 377.635 100 377.635 100 C 377.635 100 432.985 100 432.985 100 C 432.985 100 445.5282177264272 22.510000000000005 445.5282177264272 22.510000000000005 C 445.5282177264272 22.510000000000005 390.1782177264272 22.510000000000005 390.1782177264272 22.510000000000005"
            onMouseEnter={() => setHoveredPath(5)}
            onMouseLeave={() => setHoveredPath(null)}
          />
          <path
            fill="none"
            stroke={strokeColor}
            className="logo-path"
            d="M 399.13765895958954 -32.84 C 399.13765895958954 -32.84 377.635 100 377.635 100 C 377.635 100 432.985 100 432.985 100 C 432.985 100 445.5282177264272 22.510000000000005 445.5282177264272 22.510000000000005 C 445.5282177264272 22.510000000000005 390.1782177264272 22.510000000000005 390.1782177264272 22.510000000000005"
          />
          <path
            fill="none"
            stroke="transparent"
            className="hitbox-path"
            d="M 533.6312788140077 22.510000000000005 C 533.6312788140077 22.510000000000005 478.2812788140077 22.510000000000005 478.2812788140077 22.510000000000005 C 478.2812788140077 22.510000000000005 472.2381394070038 61.254999999999995 472.2381394070038 61.254999999999995 C 472.2381394070038 61.254999999999995 527.5881394070038 61.254999999999995 527.5881394070038 61.254999999999995 C 527.5881394070038 61.254999999999995 521.545 100 521.545 100 C 521.545 100 466.19499999999994 100 466.19499999999994 100"
            onMouseEnter={() => setHoveredPath(6)}
            onMouseLeave={() => setHoveredPath(null)}
          />
          <path
            fill="none"
            stroke={strokeColor}
            className="logo-path"
            d="M 533.6312788140077 22.510000000000005 C 533.6312788140077 22.510000000000005 478.2812788140077 22.510000000000005 478.2812788140077 22.510000000000005 C 478.2812788140077 22.510000000000005 472.2381394070038 61.254999999999995 472.2381394070038 61.254999999999995 C 472.2381394070038 61.254999999999995 527.5881394070038 61.254999999999995 527.5881394070038 61.254999999999995 C 527.5881394070038 61.254999999999995 521.545 100 521.545 100 C 521.545 100 466.19499999999994 100 466.19499999999994 100"
          />
        </g>
      </svg>
    </div>
  )
}

