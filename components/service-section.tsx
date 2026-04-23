'use client'

import Image from 'next/image'
import Link from 'next/link'

interface ServiceSectionProps {
  title: string
  description: string
  features: string[]
  image: string
  align: 'left' | 'right'
}

export function ServiceSection({
  title,
  description,
  features,
  image,
  align
}: ServiceSectionProps) {
  const isImageLeft = align === 'left'

  return (
    <section className="w-full py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center ${isImageLeft ? '' : 'md:[direction:rtl]'}`}>
          {/* Image */}
          <div className="w-full aspect-square bg-muted rounded-lg overflow-hidden">
            <Image
              src={image}
              alt={title}
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className={`space-y-6 md:[direction:ltr]`}>
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-serif text-foreground">
                {title}
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
                {description}
              </p>
            </div>

            {/* Features */}
            <ul className="space-y-3">
              {features.map((feature, idx) => (
                <li key={idx} className="flex gap-3 text-foreground">
                  <span className="text-accent font-semibold">•</span>
                  <span className="text-sm md:text-base">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-accent hover:opacity-80 transition-opacity font-medium text-base md:text-lg"
              >
                Get Started
                <span className="text-lg">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
