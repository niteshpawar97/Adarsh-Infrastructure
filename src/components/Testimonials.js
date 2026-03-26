import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonials = [
  { text: "Adarsh Infrastructure ने हमारे सरकारी विद्युतीकरण प्रोजेक्ट में बेहतरीन HT & LT पावर डिस्ट्रीब्यूशन का कार्य किया। उनका कार्य अत्यधिक विश्वसनीय और समय पर पूरा हुआ।", author: "Suresh Dubey", role: "MP Power Transmission Co. Ltd." },
  { text: "हमारे ग्रामीण विद्युतीकरण योजना के तहत Adarsh Infrastructure ने 100kV ट्रांसफार्मर और पोल इंस्टॉलेशन का कार्य शानदार तरीके से पूरा किया।", author: "Ramesh Verma", role: "Chhindwara Rural Electrification Project" },
  { text: "हमारे इंडस्ट्रियल पार्क में पावर सप्लाई और ऑटोमेशन सिस्टम की ज़रूरत थी। Adarsh Infrastructure ने हमें आधुनिक और ऊर्जा-कुशल समाधान प्रदान किए।", author: "Amit Tiwari", role: "Chhindwara Industrial Development Authority" },
  { text: "Adarsh Infrastructure ने हमारे स्कूल और अस्पताल में स्मार्ट विद्युत प्रणाली और बैकअप सोल्यूशंस इंस्टॉल किए। उनकी टीम बहुत ही समर्पित है।", author: "Dr. Sunita Sharma", role: "Chhindwara City Hospital" },
  { text: "हमारे गाँव में पहली बार बिजली पहुंचाने का श्रेय Adarsh Infrastructure को जाता है। उन्होंने पूरे इलाके में DP और ट्रांसफार्मर इंस्टॉल किए।", author: "Vikas Patel", role: "Gram Panchayat" },
  { text: "हमारे फार्महाउस के लिए सोलर पावर सिस्टम इंस्टॉल कराया। पूरी प्रक्रिया सुगम, किफायती और उच्च गुणवत्ता वाली रही।", author: "Vikas Jain", role: "Green Farms Chhindwara" },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const next = useCallback(() => setIndex((p) => (p + 1) % testimonials.length), []);

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <section className="py-14 sm:py-16 lg:py-20 bg-background">
      <div className="max-w-3xl lg:max-w-4xl mx-auto px-4 sm:px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="section-heading">Client <span className="text-gold">Testimonials</span></h2>
          <div className="section-divider" />
        </motion.div>

        <div className="relative card p-5 sm:p-8 md:p-10 min-h-[240px] sm:min-h-[280px] flex flex-col justify-center">
          <FaQuoteLeft className="text-primary/20 text-3xl sm:text-5xl absolute top-4 sm:top-6 left-4 sm:left-6" />

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="text-center relative z-10"
            >
              <div className="flex justify-center gap-1 mb-4 sm:mb-5">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-primary text-xs sm:text-sm" />
                ))}
              </div>
              <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed italic mb-4 sm:mb-6 px-2">
                &ldquo;{testimonials[index].text}&rdquo;
              </p>
              <div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <span className="text-primary font-bold text-base sm:text-lg">
                    {testimonials[index].author.charAt(0)}
                  </span>
                </div>
                <p className="text-white font-bold text-base sm:text-lg">{testimonials[index].author}</p>
                <p className="text-primary text-xs sm:text-sm">{testimonials[index].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center items-center gap-2 sm:gap-3 mt-4 sm:mt-6">
          <button
            onClick={() => setIndex((p) => (p - 1 + testimonials.length) % testimonials.length)}
            className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:text-primary hover:bg-primary/10 transition-all"
            aria-label="Previous"
          >&#8592;</button>
          <div className="flex gap-1.5 sm:gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                  i === index ? "bg-primary w-5 sm:w-6" : "bg-white/20 w-1.5 sm:w-2 hover:bg-white/40"
                }`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:text-primary hover:bg-primary/10 transition-all"
            aria-label="Next"
          >&#8594;</button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
