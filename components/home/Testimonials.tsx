import { motion } from 'framer-motion';

export default function Testimonials() {
  const reviews = [
    {
      name: "Aarti Desai",
      role: "Homeowner, Worli",
      text: "Morphis Studio completely transformed our sea-facing apartment. Their attention to detail and ability to balance luxurious materials with everyday functionality is truly unparalleled.",
      rating: 5
    },
    {
      name: "Rohan Kapoor",
      role: "CEO, TechFlow",
      text: "Our new corporate office is a masterpiece. The Morphis team understood our brand instantly and created a workspace that our employees genuinely love coming to.",
      rating: 5
    },
    {
      name: "Priya Mehta",
      role: "Founder, Luxe Hospitality",
      text: "From concept to execution, the process was incredibly smooth. They elevated our boutique hotel's lobby into a destination. Highly recommend their turnkey solutions.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="bg-[#FAF9F6] py-[120px] px-[var(--gutter)] border-t border-[var(--border-light)]">
      <div className="max-w-[var(--container)] mx-auto">
        <div className="text-center mb-16 reveal visible">
          <span className="text-[var(--accent)] text-[11px] uppercase tracking-[0.18em] font-medium mb-4 block">
            Client Experiences
          </span>
          <h2 className="font-display text-[40px] md:text-[56px] text-[var(--text-dark)] leading-none">
            Customer Reviews
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => {
            const bgGradients = [
              'from-[#FDFBF7] to-[#F1F3E9]',
              'from-[#FAF6F3] to-[#F1E5DB]',
              'from-[#F4F7F6] to-[#E3ECE9]'
            ];
            const gradient = bgGradients[idx % bgGradients.length];

            return (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, margin: "-50px", amount: 0.2 }}
                transition={{ duration: 0.7, type: "spring", bounce: 0.4, delay: idx * 0.2 }}
                className={`bg-gradient-to-br ${gradient} p-10 rounded-2xl shadow-lg border border-white/60 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group`}
              >
                <div className="absolute inset-0 bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                <div className="flex gap-1 mb-6 relative z-10">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="var(--accent)" stroke="var(--accent)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-sm">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  ))}
                </div>
                
                <p className="font-body text-[16px] text-[#444] leading-[1.8] mb-8 italic relative z-10">
                  "{review.text}"
                </p>
                
                <div className="relative z-10 border-t border-[var(--border-light)] pt-6 mt-auto">
                  <h4 className="font-display text-[22px] text-[var(--text-dark)]">{review.name}</h4>
                  <p className="font-body text-[13px] text-[var(--accent)] font-semibold mt-1 uppercase tracking-[0.05em]">{review.role}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
