import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Thank you! Your message has been sent. We will contact you shortly.');
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-amber-500 font-bold tracking-widest uppercase text-sm mb-3">Contact Us</h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">Ready to Secure Your Investment?</h3>
            <p className="text-slate-400 mb-12 text-lg">
              Visit our offices in Kangemi or reach out via phone and email. Our team is available to discuss your property needs.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-amber-500/10 p-3 rounded-lg text-amber-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Our Location</h4>
                  <p className="text-slate-400">Above Think Twice Second Hand Cloths, Next to Equity Bank Kangemi, Nairobi</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-amber-500/10 p-3 rounded-lg text-amber-500">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Phone Number</h4>
                  <p className="text-slate-400">+254 704 363 600</p>
                  <p className="text-slate-400">+254 722 607 247 (Director)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-amber-500/10 p-3 rounded-lg text-amber-500">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Email Address</h4>
                  <p className="text-slate-400">info@eneocapital.co.ke</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-amber-500/10 p-3 rounded-lg text-amber-500">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Office Hours</h4>
                  <p className="text-slate-400">Mon - Fri: 8:00 AM - 5:00 PM</p>
                  <p className="text-slate-400">Sat: 9:00 AM - 1:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-12 rounded-3xl text-slate-900"
            >
              <h4 className="text-2xl font-bold mb-6">Send us a Message</h4>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Full Name</label>
                    <input 
                      required
                      type="text" 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all" 
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Phone Number</label>
                    <input 
                      required
                      type="tel" 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all" 
                      placeholder="+254..."
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email Address</label>
                  <input 
                    required
                    type="email" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all" 
                    placeholder="example@mail.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Service of Interest</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all">
                    <option>Rent Collection</option>
                    <option>Landlord Advances</option>
                    <option>Loans on Collection</option>
                    <option>Property Maintenance</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Message</label>
                  <textarea 
                    rows={4} 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all" 
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-all"
                >
                  Send Inquiry <Send size={18} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;