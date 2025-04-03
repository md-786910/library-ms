import React from 'react';
import { motion } from 'framer-motion';

const TestimonialCard = ({ image, name, role, quote, delay }) => {
  return (
    <motion.div 
      className="bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
    >
      <motion.div 
        className="absolute -right-10 -bottom-10 w-40 h-40 bg-indigo-100 rounded-full opacity-50"
        animate={{ 
          scale: [1, 1.1, 1],
        }}
        transition={{ 
          repeat: Infinity,
          duration: 8,
          ease: "easeInOut" 
        }}
      />
      
      <div className="relative">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <motion.img 
              className="h-12 w-12 rounded-full border-2 border-indigo-500 p-0.5"
              src={image}
              alt={name}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-medium text-gray-900">{name}</h3>
            <div className="text-sm text-indigo-600">{role}</div>
          </div>
        </div>
        
        <div className="mt-4">
          <svg className="h-8 w-8 text-indigo-300 mb-1" fill="currentColor" viewBox="0 0 32 32">
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>
          <p className="text-base text-gray-500">{quote}</p>
        </div>
      </div>
    </motion.div>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      name: "Sarah Johnson",
      role: "Computer Science Major",
      quote: "The booking system has been a game-changer for my study routine. I can now secure my favorite quiet corner in advance and plan my week efficiently."
    },
    {
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      name: "Michael Chen",
      role: "Business Administration",
      quote: "My study group relies on the collaborative spaces for our weekly meetings. The booking process is seamless, and the spaces are perfect for brainstorming sessions."
    },
    {
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      name: "Priya Patel",
      role: "Medical Student",
      quote: "As a medical student with a packed schedule, being able to book study spaces in advance has helped me maintain consistency in my study routine. Highly recommended!"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-indigo-50 to-white py-16 sm:py-24 relative overflow-hidden">
      <motion.div 
        className="absolute top-40 -right-40 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        animate={{ 
          x: [0, 30, 0],
          y: [0, 40, 0],
        }}
        transition={{ 
          repeat: Infinity,
          duration: 20,
          ease: "easeInOut" 
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-base font-semibold text-indigo-600 tracking-wide uppercase"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Testimonials
          </motion.h2>
          <motion.p 
            className="mt-1 text-3xl font-extrabold text-gray-900 sm:text-4xl sm:tracking-tight"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Students love our library spaces
          </motion.p>
          
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="h-1 w-24 bg-gradient-to-r from-pink-500 to-indigo-500 mt-6 mx-auto"
          />
          
          <motion.p 
            className="max-w-xl mt-5 mx-auto text-xl text-gray-500"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Hear from students who have transformed their study habits with our booking system
          </motion.p>
        </motion.div>
        
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index}
                image={testimonial.image}
                name={testimonial.name}
                role={testimonial.role}
                quote={testimonial.quote}
                delay={0.2 + index * 0.1}
              />
            ))}
          </div>
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.a 
            href="#" 
            className="inline-flex items-center text-indigo-600 font-medium"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <span>View all testimonials</span>
            <svg className="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default TestimonialsSection;