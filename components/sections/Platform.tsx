export default function Platform() {
    const features = [
      "AI Product Descriptions",
      "Meta Titles",
      "Meta Descriptions",
      "Alt Text Generation",
      "Shopify Sync",
    ];
  
    return (
      <section id="plattform" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
              CodeSpes Platform
            </span>
  
            <h2 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-6xl">
              Product SEO automation built for Shopify.
            </h2>
  
            <p className="mt-6 text-lg leading-8 text-gray-400">
              Optimize product content, generate SEO metadata and sync everything
              directly back into your Shopify store.
            </p>
  
            <div className="mt-8 grid gap-4">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="rounded-xl border border-white/10 bg-white/5 p-4 text-gray-200"
                >
                  ✓ {feature}
                </div>
              ))}
            </div>
          </div>
  
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="rounded-2xl bg-[#0F172A] p-6">
              <p className="text-sm text-gray-400">Product Optimization</p>
  
              <div className="mt-6 space-y-4">
                <div className="rounded-xl bg-white/5 p-4">
                  <p className="text-sm text-gray-400">Meta Title</p>
                  <p className="mt-2 font-semibold text-white">
                    Premium Leather Wallet | Handmade & Minimal
                  </p>
                </div>
  
                <div className="rounded-xl bg-white/5 p-4">
                  <p className="text-sm text-gray-400">Meta Description</p>
                  <p className="mt-2 text-gray-300">
                    Discover a handmade leather wallet with premium materials,
                    slim design and fast shipping.
                  </p>
                </div>
  
                <div className="rounded-xl bg-indigo-600/20 p-4 text-indigo-200">
                  Synced to Shopify
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }