import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    text: "Adarsh Infrastructure ने हमारे सरकारी विद्युतीकरण प्रोजेक्ट में बेहतरीन HT & LT पावर डिस्ट्रीब्यूशन का कार्य किया। उनका कार्य अत्यधिक विश्वसनीय और समय पर पूरा हुआ।",
    author: "Suresh Dubey, MP Power Transmission Co. Ltd.",
  },
  {
    text: "हमारे ग्रामीण विद्युतीकरण योजना के तहत Adarsh Infrastructure ने 100kV ट्रांसफार्मर और पोल इंस्टॉलेशन का कार्य शानदार तरीके से पूरा किया।",
    author: "Ramesh Verma, Chhindwara Rural Electrification Project",
  },
  {
    text: "हमारे इंडस्ट्रियल पार्क में पावर सप्लाई और ऑटोमेशन सिस्टम की ज़रूरत थी। Adarsh Infrastructure ने हमें आधुनिक और ऊर्जा-कुशल समाधान प्रदान किए।",
    author: "Amit Tiwari, Chhindwara Industrial Development Authority",
  },
  {
    text: "Adarsh Infrastructure ने हमारे स्कूल और अस्पताल में स्मार्ट विद्युत प्रणाली और बैकअप सोल्यूशंस इंस्टॉल किए। उनकी टीम बहुत ही समर्पित और तकनीकी रूप से दक्ष है।",
    author: "Dr. Sunita Sharma, Chhindwara City Hospital",
  },
  {
    text: "हमारे गाँव में पहली बार बिजली पहुंचाने का श्रेय Adarsh Infrastructure को जाता है। उन्होंने पूरे इलाके में DP और ट्रांसफार्मर इंस्टॉल किए।",
    author: "Vikas Patel,  ग्राम पंचायत",
  },
  {
    text: "Chhindwara में हमारे होटल के लिए इन्होंने पावर डिस्ट्रीब्यूशन, ऑटोमेशन और स्मार्ट लाइटिंग का कार्य किया। शानदार अनुभव रहा!",
    author: "Manoj Patel, Patel Grand Hotel",
  },
  {
    text: "हमारे फार्महाउस के लिए सोलर पावर सिस्टम इंस्टॉल कराया। पूरी प्रक्रिया सुगम, किफायती और उच्च गुणवत्ता वाली रही।",
    author: "Vikas Jain, Green Farms Chhindwara",
  },
];



const Testimonials = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="p-6 md:p-10 text-center bg-gradient-to-r from-background to-secondary text-foreground rounded-lg shadow-lg max-w-4xl mx-auto min-h-64 flex flex-col justify-center">
      {/* Heading */}
      <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4 md:mb-6">What Our Clients Say</h3>

      {/* Testimonial Carousel */}
      <div className="relative w-full overflow-hidden min-h-36 md:min-h-36 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="absolute text-base md:text-lg italic px-4 w-full text-center"
          >
            &ldquo;{testimonials[index].text}&rdquo;
            <p className="mt-2 md:mt-4 font-bold text-accent">{testimonials[index].author}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};


export default Testimonials;
