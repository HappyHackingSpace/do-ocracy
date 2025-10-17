export default function PosterPage() {
  return (
    <div className="min-h-screen w-full bg-black flex items-center justify-center p-8">
      <div className="w-full max-w-[1400px]">
        <div
          className="relative bg-black overflow-hidden border-2 border-green-500/30"
          style={{
            aspectRatio: "5/7",
            width: "100%",
          }}
        >
          {/* Terminal scanline effect */}
          <div className="absolute inset-0 pointer-events-none opacity-5">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `repeating-linear-gradient(
                  0deg,
                  rgba(0, 255, 0, 0.1) 0px,
                  transparent 1px,
                  transparent 2px,
                  rgba(0, 255, 0, 0.1) 3px
                )`,
              }}
            />
          </div>

          {/* Terminal grid background */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `
                  linear-gradient(to right, #00ff00 1px, transparent 1px),
                  linear-gradient(to bottom, #00ff00 1px, transparent 1px)
                `,
                backgroundSize: "30px 30px",
              }}
            />
          </div>

          <div className="relative z-10 h-full flex flex-col p-12 md:p-16 lg:p-20 font-mono">
            {/* Terminal header */}
            <div className="mb-8 border-b border-green-500/40 pb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
              </div>
            </div>

            {/* Terminal prompt and command */}
            <div className="mb-8">
              <p className="text-green-500/60 text-sm mb-2">
                <span className="text-green-500">root@happyhacking.space</span>:~$ cat community_guidelines.txt
              </p>
            </div>

            {/* Main content */}
            <div className="flex-1 flex flex-col justify-center space-y-12">
              {/* ASCII art style title */}
              <div className="space-y-2">
                <pre
                  className="text-green-500 font-bold leading-none"
                  style={{
                    fontSize: "clamp(2rem, 6vw, 7rem)",
                    textShadow: "0 0 10px rgba(0, 255, 0, 0.5)",
                  }}
                >
                  {`╔═══════════════╗
║  DO-OCRACY    ║
╚═══════════════╝`}
                </pre>
              </div>

              {/* Separator */}
              <div className="flex items-center gap-2">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent" />
              </div>

              {/* Main message in terminal style */}
              <div className="space-y-6 max-w-4xl">
                <div className="space-y-3">
                  <p className="text-green-400 text-lg md:text-2xl lg:text-3xl leading-relaxed">
                    <span className="text-green-500/60">&gt;</span> If you want something done,
                  </p>
                  <p
                    className="text-green-300 font-bold leading-relaxed pl-6"
                    style={{
                      fontSize: "clamp(1.5rem, 3.5vw, 4rem)",
                      textShadow: "0 0 20px rgba(0, 255, 0, 0.3)",
                    }}
                  >
                    DO IT
                  </p>
                </div>

                <div className="space-y-3 pt-4">
                  <p className="text-green-400 text-lg md:text-2xl lg:text-3xl leading-relaxed">
                    <span className="text-green-500/60">&gt;</span> But remember to be
                  </p>
                  <p
                    className="text-cyan-400 font-bold leading-relaxed pl-6"
                    style={{
                      fontSize: "clamp(1.5rem, 3.5vw, 4rem)",
                      textShadow: "0 0 20px rgba(0, 255, 255, 0.3)",
                    }}
                  >
                    EXCELLENT TO EACH OTHER
                  </p>
                  <p className="text-green-400 text-lg md:text-2xl lg:text-3xl leading-relaxed pl-6">when doing so</p>
                </div>
              </div>
            </div>

            {/* Terminal footer */}
            <div className="mt-auto pt-8 border-t border-green-500/40">
              <div className="flex items-center justify-between text-green-500/60 text-xs md:text-sm">
                <p>
                  <span className="text-green-500">█</span> HAPPY HACKING SPACE
                </p>
                <p className="font-mono tracking-wider">[PRINT: 50×70cm | 300 DPI]</p>
              </div>
            </div>
          </div>

          {/* Corner glow effects */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-green-500/10 blur-3xl rounded-full" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-cyan-500/10 blur-3xl rounded-full" />
        </div>

      
      </div>
    </div>
  )
}
