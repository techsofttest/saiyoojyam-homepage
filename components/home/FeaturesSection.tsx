import Image from "next/image";

export function FeaturesSection() {
  const features = [
    {
      title: "Rooms",
      image: "/why-us/rooms2.png",
      alt: "Well-furnished hostel room with rain shower attached bathroom",
      description:
        "Seventy four (74) well-furnished rooms with attached bathrooms with rain shower. Kitchen facilities include a large cooking area plus modular kitchen and pantry.",
    },
    {
      title: "Dining",
      image: "/why-us/dining2.png",
      alt: "Modern dining space for catering high quality food",
      description:
        "Ground floor is a fully equipped kitchen and dining for high quality catering services. Provision for North-Indian, South Indian and Chinese food is available.",
    },
    {
      title: "Food Quality",
      image: "/why-us/food-quality.png",
      alt: "Fresh reliable food ingredients and healthy meals",
      description:
        "Vegetables, dairy products, chicken and fish are totally reliable in quality. We continuously monitor purchases to ensure quality and make necessary changes.",
    },
    {
      title: "Twin Tower Complex",
      image: "/why-us/twin-tower.png",
      alt: "Modern twin tower residential building complex in Kusumagiri Kakkanad",
      description:
        "Five-storied twin tower complex with elevator & 250 person capacity in Kusumagiri, Kakkanad. Fully furnished with European standard fittings, A/C & Non-A/C rooms.",
    },
  ];

  return (
    <section className="w-full pt-16 pb-16 bg-surface-container-lowest">
      <div className="max-w-[1280px] mx-auto px-6">
        <h2 className="text-3xl sm:text-5xl font-bold text-on-surface mb-12 tracking-tight">
          Why Choose Saiyoojyam?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col group cursor-pointer">
              {/* Full Width Image Banner */}
              <div className="relative w-full h-56 rounded-sm overflow-hidden mb-5 shadow-sm">
                <Image
                  src={feature.image}
                  alt={feature.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Larger Title & Description */}
              <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-base text-slate-700 leading-relaxed font-medium">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
