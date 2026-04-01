import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Mail } from 'lucide-react';

const staff = [
  { name: "Chege", role: "Director", phone: "+254 722 607 247" },
  { name: "Steve", role: "Operations Manager" },
  { name: "Tabitha Wamboi", role: "HR Manager" },
  { name: "Njuguna", role: "Accountant" },
  { name: "Mary", role: "Receptionist" },
  { name: "Douglas", role: "Field Officer" },
  { name: "Bett", role: "Field Officer" },
  { name: "Nahason", role: "Field Officer" },
  { name: "Barasa", role: "Field Officer" },
];

const Team = () => {
  return (
    <section id="team" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-amber-600 font-bold tracking-widest uppercase text-sm mb-3">The Professionals</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Meet Our Expert Team</h3>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Dedicated professionals committed to delivering the best property management experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {staff.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-amber-200 transition-all hover:shadow-lg group"
            >
              <div className="mb-4">
                <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 group-hover:rotate-12 transition-transform">
                  {member.name.charAt(0)}
                </div>
                <h4 className="text-xl font-bold text-slate-900">{member.name}</h4>
                <p className="text-amber-600 font-medium text-sm mb-4">{member.role}</p>
              </div>
              
              {member.phone && (
                <p className="text-slate-500 text-sm mb-4">
                  <span className="font-semibold text-slate-700">Phone:</span> {member.phone}
                </p>
              )}

              <div className="flex gap-3">
                <button className="p-2 bg-white rounded-lg text-slate-400 hover:text-amber-600 shadow-sm border border-slate-100">
                  <Mail size={16} />
                </button>
                <button className="p-2 bg-white rounded-lg text-slate-400 hover:text-amber-600 shadow-sm border border-slate-100">
                  <ExternalLink size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;