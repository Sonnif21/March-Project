import { motion } from "framer-motion";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Wan Nurdiana",
      role: "Automotive Workshop Owner, Malaysia",
      content: "The markerless AR diagnostic tool made it so much easier to explain vehicle damage to customers. They can actually see the 3D visualization instead of just hearing a technical explanation - it builds a lot more trust.",
      image: "wan-nurdiana.jpg"
    },
    {
      name: "Soraya",
      role: "Cafe Owner, Malaysia",
      content: "Customers just point their phone at the table and the menu pops up in AR, no marker or app download needed. It's a small detail, but it makes the cafe feel a lot more modern and memorable.",
      image: "soraya.jpg"
    },
    {
      name: "Bachtiar",
      role: "Founder, Seven.grad",
      content: "Before this, we managed graduation photo bookings manually through WhatsApp chats. Now clients pick their own date and session, upload payment proof themselves, and the slot locks automatically once we verify it. It's cut down so much back-and-forth during our busiest season.",
      image: "bachtiar.jpg"
    }
  ];

  return (
    <section id="testimonials" className="max-w-7xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="mb-16 text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Client <span className="text-gradient-primary">Testimonials</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Feedback from the clients I've had the pleasure of building AR, VR, and web solutions for across Indonesia and Malaysia.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((test, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="glass-panel p-8 rounded-3xl border border-foreground/10 flex flex-col relative overflow-hidden group hover:border-primary/30 transition-colors duration-500"
          >
            {/* Subtle glow orb */}
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/10 rounded-full blur-[40px] group-hover:bg-primary/20 transition-colors duration-500 pointer-events-none" />
            
            {/* Quote Icon Background */}
            <div className="absolute top-6 right-6 text-primary/10 select-none pointer-events-none">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 11l-2 2v-3H4V4h6v7zm10 0l-2 2v-3h-4V4h6v7z" />
              </svg>
            </div>

            <p className="text-muted-foreground leading-relaxed flex-grow relative z-10 italic mb-8 pr-14">
              "{test.content}"
            </p>

            <div className="flex items-center gap-4 relative z-10 mt-auto">
              <img src={test.image} alt={test.name} className="w-12 h-12 rounded-full object-cover border border-foreground/10 bg-muted" />
              <div>
                <h4 className="text-foreground font-bold text-sm">{test.name}</h4>
                <p className="text-primary text-xs font-medium">{test.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;