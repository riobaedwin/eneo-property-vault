import React from 'react';
import { motion } from 'framer-motion';
import { Banknote, HandCoins, Settings, UserCheck, Search, ShieldAlert } from 'lucide-react';

const services = [
  {
    title: "Rent Collection",
    description: "Reliable and timely rent collection on behalf of landlords, ensuring consistent cash flow without the stress.",
    icon: Banknote,
    img: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/15ef1068-33bc-4e95-bedd-a5a93a82d64d/eneocapital-service-rent-collection-ac45277b-1775078427724.webp"
  },
  {
    title: "Loans on Rental Collection",
    description: "Need funds urgently? We offer credit facilities backed by your future rental income to keep you moving.",
    icon: HandCoins,
    img: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Landlord Advances",
    description: "Get immediate access to advances on your rent, helping you manage unexpected expenses or investments.",
    icon: ShieldAlert,
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Property Maintenance",
    description: "Full-scale maintenance services ensuring your properties remain in top-tier condition and retain their value.",
    icon: Settings,
    img: "https://images.unsplash.com/photo-1581578731548-c64695cc6954?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Tenant Screening",
    description: "Rigorous vetting processes to ensure only high-quality, reliable tenants occupy your valuable properties.",
    icon: UserCheck,
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Dispute Resolution",
    description: "Professional handling of tenant-landlord conflicts and legal compliance to protect your interests.",
    icon: Search,
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-amber-600 font-bold tracking-widest uppercase text-sm mb-3">Our Expertise</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Comprehensive Management Services</h3>
          <p className="text-slate-600 max-w-2xl mx-auto">
            At Eneo Capital Limited, we go beyond simple rent collection. We provide a full ecosystem of financial and operational support for modern landlords.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="bg-amber-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-amber-600">
                  <service.icon size={24} />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;